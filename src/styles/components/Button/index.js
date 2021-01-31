import styled from 'styled-components';

const Button = styled.button`
  margin: 20px 0;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  border: 0;
  transition: background 0.2s;
  background: #d13639;
  color: #fff;
  border-radius: 5px;

  &:hover {
    /* background: ${({ theme }) => theme.colors.success}; */
  }

  &:disabled {
    cursor: not-allowed;
    background: #c3c3c3;
    color: #333;
  }
`;

export default Button;
