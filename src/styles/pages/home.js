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

export const Logo = styled.div`
  width: 120px;
  height: 120px;
  background: ${props => (props.disabled ? '#CCC' : '#d13639')};
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 60px;
  margin-bottom: 20px;
  transition: background 0.2s;
`;
