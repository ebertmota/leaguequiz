import { ContainerStyles } from './styles';
import backgroundImg from '../../assets/background.png';

import Footer from '../Footer';

function TemplateContainer({ children }) {
  return (
    <ContainerStyles backgroundImage={backgroundImg}>
      {children}
      <Footer />
    </ContainerStyles>
  );
}

export default TemplateContainer;
