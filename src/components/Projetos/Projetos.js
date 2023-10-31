import Header from '../Header/Header';
import styled from 'styled-components';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function Projetos() {
  return (
    <AppContainer>
      <Header/>
      <h1>Olá mundo! - Aba projetos</h1>
    </AppContainer>
  );
}

export default Projetos;