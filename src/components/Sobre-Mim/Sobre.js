import Header from '../Header/Header';
import styled from 'styled-components';

const StartComponent = styled.section`
background-image: linear-gradient(90deg, #002F52 35%, #326589);
margin:auto;
color: #fff;
height:100vh;
width:100%;
display:flex;
flex-flow:row nowrap;
align-items:center;
`

const ContainerComponent = styled.section`
  width:50%;
  margin:auto;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-flow:column nowrap;
`

const ContactComponent = styled.div`
  display:flex;
  flex-flow:column nowrap;
  margin-right:80px;
`

const AppContainer = styled.div`
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

const TittleComponent = styled.h1`
  font-size:38px;
`

const SubtittleComponent = styled.h2`
  font-size:22px;
`

const TextComponent = styled.p`
  font-size:16px;
  text-align:justify;
`

const LinkComponent = styled.a`
`


function Projetos() {
  return (
    <AppContainer>
      <Header/>
        <StartComponent>

          <ContainerComponent>
            <TittleComponent>Sobre Mim</TittleComponent>
            <SubtittleComponent>Sou Lucas, um desenvolvedor Full-Stack</SubtittleComponent>
            <TextComponent>Atualmente formado em Análise e desenvolvimento de sistemas, busco uma
              oportunidade de trabalho como júnior na área de desenvolvimento.
            </TextComponent>
            <TextComponent>
              Utilizo .NET, React, SQLServer como minhas principais ferramentas, porém
              tenho projetos em NodeJS, Python, Java com MySQL. Atualmente estudo o Entity Framework, com o
              objetivo de aprofundar os estudos em Full-Stack.
            </TextComponent>
            <TextComponent>
              Apesar de não possuir experiência profissional, possuo alguns projetos como freelancer realizados. Sempre procuro
              novos desafios e novos aprendizados e inserir novas implementações em meus projetos.
            </TextComponent>
            </ContainerComponent>
            <ContactComponent>
              <SubtittleComponent>Entre em contato</SubtittleComponent>
              <TextComponent>Fortaleza - CE , Brasil</TextComponent>
              <TextComponent><strong>Linkedin</strong>: <LinkComponent href='https://www.linkedin.com/in/lucas-nobre-fernandes-4b2408203/' target='_blank'
              >Lucas Nobre Fernandes</LinkComponent></TextComponent>
              <TextComponent><strong>Email</strong>: lucasnoobreoficial@gmail.com</TextComponent>
            </ContactComponent>
        </StartComponent>
    </AppContainer>
  );
}

export default Projetos;