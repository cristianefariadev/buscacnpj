import styled from 'styled-components';

const Card = styled.div`
  max-width: 260px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;

  display: flex;
  flex-direction: column;
  justify-content: baseline;

  li {
    list-style: none;
  }

  h2 {
    font-size: 20px;
    svg {
      margin-right: 10px;
    }
  }
  p {
    margin: 6px 0 16px;
  }
  span {
    margin: 0 4px;
  }
`;

export default Card;
