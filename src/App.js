import Header from './components/Header/Header';
import styled from 'styled-components'
import Start from './components/Start/Start';
import Projects from './components/Projects/Projects';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Start/>
    </AppContainer>
  );
}

export default App;
