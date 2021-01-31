import styled from 'styled-components';

export const ContainerStyles = styled.div`
  background-image: url(${props => props.backgroundImage});
  height: 100vh;
  flex: 1;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
