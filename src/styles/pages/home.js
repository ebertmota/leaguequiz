import styled from 'styled-components';

export const WidgetContainer = styled.div`
  width: 100%;
  padding-top: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }

  img {
    width: 250px;
  }
`;
