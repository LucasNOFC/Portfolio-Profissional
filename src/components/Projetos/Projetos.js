import Card from '../Card/Card';
import ProjetosJson from "../../data/Projetos.json"
import Header from '../Header/Header';
import styled from 'styled-components';

const StartComponent = styled.section`
background-image: linear-gradient(90deg, #002F52 35%, #326589);
color: #fff;
text-align:center;
padding:85px 0;
height:270px;
width:100%;
`

const TittleComponent = styled.h1`
  font-size:38px;
`

const AppContainer = styled.div`
    width: 100vw;
    height: 200vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function Projetos() {
  return (
    <AppContainer>
      <Header/>
        <StartComponent>
          <TittleComponent>Meus Projetos</TittleComponent>
            {ProjetosJson.map((project, index) => (
              <Card
                key={index}
                image={project.image}
                title={project.title}
                techs={project.techs}
                description={project.description}
              />
            ))}
        </StartComponent>
    </AppContainer>
  );
}

export default Projetos;