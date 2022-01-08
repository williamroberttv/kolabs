import { Container } from './styles';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Container>
      <p>
        Kolabs@
        {year}
        - All rights reserved
      </p>
    </Container>
  );
}

export default Footer;
