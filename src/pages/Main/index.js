import React, { Component } from 'react';

import { FaBuilding, FaSearch, FaSpinner } from 'react-icons/fa';
// import Card from '../../components/Card';

import api from '../../services/api';
import { Title, Form, SubmitButton } from './styles';

export default class Main extends Component {
  state = {
    newCnpj: '',
    company: [],
    loading: false
  };

  handleInputChange = e => {
    this.setState({ newCnpj: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    const { newCnpj, company } = this.state;

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
      uf: response.data.uf
    };

    this.setState({
      company: [...company, data],
      newCnpj: '',
      loading: false
    });
  };

  render() {
    const { newCnpj, loading } = this.state;

    return (
      <>
        <header>
          <Title>
            <FaBuilding size={48} />
            <h1>Localizador de Empresas</h1>
          </Title>
          <Form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="CNPJ..."
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
          </Form>
        </header>
      </>
    );
  }
}
