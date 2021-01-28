import styled from 'styled-components';

const Button = styled.button`
  margin: 20px 0;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid;
  transition: background 0.2s;
  background: ${({ theme }) => theme.colors.secondary};
  color: #222;
  border-radius: 5px;

  &:hover {
    background: #e8a30a;
  }

  &:disabled {
    cursor: not-allowed;
    background: #666;
  }
`;

export default Button;
