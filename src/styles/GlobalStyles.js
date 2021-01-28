import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  box-sizing: border-box;
  outline: 0;
}

body {
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.colors.contrastText};
} 

button {
  cursor: pointer;
}

html, body {
  min-height: 100vh;
}

#__next {
  flex: 1;
  display: flex;
  flex-direction: column;
}
`;
