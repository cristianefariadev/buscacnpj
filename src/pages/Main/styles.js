import styled, { keyframes, css } from 'styled-components';

export const Title = styled.form`
  margin-top: 50px;
  font-size: 1.3rem;
  color: #3a8970;
  font-weight: normal;

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    padding-left: 10px;
  }
`;

export const Form = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  input {
    flex: 1;
    max-width: 300px;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;
export const MessageError = styled.form`
  position: absolute;
  left: 50%;
  bottom: -20px;
  font-size: 10px;
  color: red;
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disable: props.loading
}))`
  background: #3a8970;
  border: 0;
  padding: 10px 15px;
  margin-left: 10px;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const BgGradient = styled.form`
  margin-top: 60px;
  min-height: 300px;
  padding: 60px 0;
  background: #3a8970;
`;

export const Container = styled.form`
  max-width: 1200px;

  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
`;
