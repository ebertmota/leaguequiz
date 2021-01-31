import styled from 'styled-components';

export const Widget = styled.div`
  position: relative;
  width: 100%;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: ${props => props.maxWidth || '400px'};
  background: #f5f5f5;
  color: #000;
  border-radius: 4px;
  overflow: hidden;

  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    font-size: 22px;
    text-align: center;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    form {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;

      > div {
        position: absolute;
        bottom: 10px;
        width: 100%;
        left: 0;
        padding: 0 20px;
      }
    }
  }
`;

export const WidgetHeader = styled.header`
  background: ${props => props.theme.colors.primary};
  color: #fff;
  padding: 0 20px;
  display: flex;
  width: 100%;

  h1 {
    font-size: 20px;
  }
`;

export const WidgetContent = styled.div`
  padding: 20px;
  position: relative;
  img {
    top: 20%;
    position: absolute;
  }
`;

export const WidgetCover = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  background-color: #c4c4c4;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: background 0.2s;
`;
