import styled from 'styled-components';
import Curriculum from './Curriculum.pdf';

const ProjectComponent = styled.a`
    padding:15px;
    text-align:center;
    background-color:white;
    border:1px solid white;
    font-weight:600;
    transition: ease-in-out .5s;
    cursor:pointer;
    color: #002F52;

    &:hover {
      background-color:transparent;
      border:1px solid blue;
      color:white;
    }
` 

const CurriculumComponent = styled.a`
    padding:15px;
    text-align:center;
    background-color:transparent;
    border:1px solid blue;
    font-weight:600;
    cursor:pointer;
    transition: ease-in-out .5s;
    color:white;

    &:hover {
      background-color:white;
      border:1px solid white;
      color:#002f52;
    }
`

const ButtonComponent = styled.div`
  display:flex;
  flex-flow:row nowrap;
  gap:1rem;
  justify-content:center;
  align-items:center;


`

const textOptions = ["Veja meus projetos", "Baixe meu currículo"];
const tags = [ProjectComponent, CurriculumComponent];
const urls = ["*", Curriculum]


function Options() {
  return (
    <ButtonComponent>
      {textOptions.map((text, index) => {
        const Tag = tags[index];
        const downloadAttribute = index === 1 ? { download: "Curriculum.pdf" } : {}; // Adicione o atributo 'download' e ajuste o 'href' para o Curriculum.pdf

        return (
          <a key={index} href={urls[index]} {...downloadAttribute}>
            <Tag>{text}</Tag>
          </a>
        );
      })}
    </ButtonComponent>
  );
}

export default Options;
