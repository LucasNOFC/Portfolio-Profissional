import styled from 'styled-components';

const OptionsComponent = styled.ul`
display:flex;
align-items:center;
justify-content:center;

@media (max-width: 786px) {
  flex-flow: column nowrap;
  gap:20px;
}
` 

const OptionComponent = styled.li`
display: flex;
min-width: 120px;
font-size:18px;
justify-content: center;
align-items: center;
text-align: center;
height: 100%;
padding: 0 5px;
cursor: pointer;
transition: ease-in-out .1s;

&:hover{
  font-weight:600;
}
`

const LinkComponent = styled.a`
  font-size:20px;
`

const textOptions = ["Sobre mim", "Projetos"]
const urlsOptions = ["/Portfolio-Profissional/Sobre-mim", "/Portfolio-Profissional/Projetos"]


function Options() {
    return (
          <OptionsComponent>
            { textOptions.map( (texto, index) => (
              (
                <OptionComponent className="option"><LinkComponent href={urlsOptions[index]}>{texto}</LinkComponent></OptionComponent>
              )
            ))}
          </OptionsComponent>
    );
  }

export default Options;