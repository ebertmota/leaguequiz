import { ContainerStyles } from './styles';

import Header from '../Header';

function TemplateContainer({ children, backgroundImage }) {
  return (
    <ContainerStyles backgroundImage={backgroundImage}>
      <Header />
      {children}
    </ContainerStyles>
  );
}

export default TemplateContainer;
