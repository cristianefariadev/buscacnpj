import React from 'react';

import { FaBuilding, FaSearch } from 'react-icons/fa';
import Card from '../../components/Card';
import { Title, Form, SubmitButton, BgGradient, Container } from './styles';
// import Container from '../../components/Container';

export default function Main() {
  return (
    <>
      <header>
        <Title>
          <FaBuilding size={48} />
          <h1>Localizador de Empresas</h1>
        </Title>
        <Form>
          <input type="text" placeholder="CNPJ..." />
          <SubmitButton>
            <FaSearch color="FFF" size={14} /> Localizar
          </SubmitButton>
        </Form>
      </header>

      <section>
        <BgGradient>
          <Container>
            <Card>
              <div>
                <strong>Razão Social</strong>
                <p>Bitup Soluções Para Internet</p>
              </div>
              <div>
                <strong>Endereço</strong>
                <p>Rua Aloar Mendonça</p>
              </div>
              <div>
                <strong>CNPJ</strong>
                <p>32.198.189/0001-32</p>
              </div>
            </Card>
            <Card>
              <div>
                <strong>Razão Social</strong>
                <p>Bitup Soluções Para Internet</p>
              </div>
              <div>
                <strong>Endereço</strong>
                <p>Rua Aloar Mendonça</p>
              </div>
              <div>
                <strong>CNPJ</strong>
                <p>32.198.189/0001-32</p>
              </div>
            </Card>
            <Card>
              <div>
                <strong>Razão Social</strong>
                <p>Bitup Soluções Para Internet</p>
              </div>
              <div>
                <strong>Endereço</strong>
                <p>Rua Aloar Mendonça</p>
              </div>
              <div>
                <strong>CNPJ</strong>
                <p>32.198.189/0001-32</p>
              </div>
            </Card>
            <Card>
              <div>
                <strong>Razão Social</strong>
                <p>Bitup Soluções Para Internet</p>
              </div>
              <div>
                <strong>Endereço</strong>
                <p>Rua Aloar Mendonça</p>
              </div>
              <div>
                <strong>CNPJ</strong>
                <p>32.198.189/0001-32</p>
              </div>
            </Card>
          </Container>
        </BgGradient>
      </section>
      <footer />
    </>
  );
}
