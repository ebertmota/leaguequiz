import Image from 'next/image';

import { Container } from './styles';

import logoImg from '../../assets/rangernation.png';

function Footer() {
  return (
    <Container>
      <Image src={logoImg} alt="ranger nation" width={115} height={55} />
    </Container>
  );
}

export default Footer;
