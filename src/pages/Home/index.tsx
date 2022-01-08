import { ISourceOptions } from 'react-tsparticles';
import {
  CreateAccountTitle, Container, Content, Texture,
} from './styles';
import textureImg from '../../assets/texture.png';
import Title from '../../components/Title';
import Login from '../../components/Login';
import Footer from '../../components/Footer';

export default function Home() {
  const particlesOptions: ISourceOptions = {
    fpsLimit: 0,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 100,
        },
        push: {
          quantity: 8,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#ffffff',
      },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 4,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: 'none',
        enable: true,
        outMode: 'bounce',
        random: false,
        speed: 3,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 500,
        },
        value: 60,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        random: true,
        value: 5,
      },
    },
    detectRetina: true,
  };
  return (
    <>
      <Container
        options={particlesOptions}
      />
      <Texture imageUrl={textureImg} />
      <Content>
        <Title />
        <Login />
        <CreateAccountTitle>don&lsquo;t have an account?</CreateAccountTitle>
        <Footer />
      </Content>

    </>
  );
}
