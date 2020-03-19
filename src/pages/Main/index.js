import React, { Component } from 'react';

import { FaBuilding, FaSearch, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import validaCnpj from '../../util/validaCnpj';
import api from '../../services/api';
import {
  Title,
  FormContainer,
  SubmitButton,
  BgGradient,
  Container
} from './styles';

export default class Main extends Component {
  state = {
    newCnpj: '',
    company: [],
    loading: false
  };

  componentDidMount() {
    const company = localStorage.getItem('company');

    if (company) {
      this.setState({ company: JSON.parse(company) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { company } = this.state;

    if (prevState.company !== company) {
      localStorage.setItem('company', JSON.stringify(company));
    }
  }

  handleInputChange = e => {
    this.setState({ newCnpj: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { newCnpj, company } = this.state;

    const cnpjValido = validaCnpj(newCnpj);

    if (!cnpjValido) {
      this.setState({ newCnpj: '' });
      console.log('nao valido');
    } else {
      console.log('valido');

      this.setState({ loading: true });

      const response = await api.get(`/${newCnpj}`);

      const data = {
        nome: response.data.nome,
        cnpj: response.data.cnpj,
        logradouro: response.data.logradouro,
        numero: response.data.numero,
        complemento: response.data.complemento,
        bairro: response.data.bairro,
        cep: response.data.cep,
        municipio: response.data.municipio,
        uf: response.data.uf,
        status: response.data.status
      };

      this.setState({
        company: [...company, data],
        newCnpj: '',
        loading: false
      });
    }
  };

  render() {
    const { newCnpj, company, loading } = this.state;

    return (
      <>
        <Title>
          <FaBuilding size={48} />
          <h1>Localizador de Empresas</h1>
        </Title>
        <FormContainer>
          <form onSubmit={this.handleSubmit}>
            <input
              type="number"
              placeholder="CNPJ..."
              required
              value={newCnpj}
              onChange={this.handleInputChange}
            />

            <SubmitButton loading={loading ? 1 : 0}>
              {loading ? (
                <FaSpinner color="FFF" size={14} />
              ) : (
                <FaSearch color="FFF" size={14} />
              )}
            </SubmitButton>
          </form>
        </FormContainer>

        <BgGradient>
          <Container>
            {company.map(comp => (
              <Card>
                <li key={comp.cnpj}>
                  <div>
                    <strong>CNPJ</strong>
                    <p>{comp.cnpj}</p>
                  </div>
                  <div>
                    <strong>Razão Social</strong>
                    <p>{comp.nome}</p>
                  </div>
                  <div>
                    <strong>Endereço</strong>
                    <p>
                      <span>{comp.logradouro},</span>
                      <span> {comp.numero} -</span>
                      <span> {comp.complemento} -</span>
                      <span> {comp.bairro},</span>
                      <span> {comp.municipio} -</span>
                      <span> {comp.uf},</span>
                      <span> {comp.cep}</span>
                    </p>
                    <Link to="/displaymap">Ver no mapa</Link>
                  </div>
                </li>
              </Card>
            ))}
          </Container>
        </BgGradient>
      </>
    );
  }
}
