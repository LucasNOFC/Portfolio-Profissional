import styled from 'styled-components';

const OptionsComponent = styled.ul`
display:flex;
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

const textOptions = ["Sobre mim", "Projetos", "Stacks"]
const urlsOptions = ["Sobre-mim", "Projetos", "Stacks"]


function Options() {
    return (
          <OptionsComponent>
            { textOptions.map( (texto, index) => (
              (
                <OptionComponent className="option"><a href={urlsOptions[index]}>{texto}</a></OptionComponent>
              )
            ))}
          </OptionsComponent>
    );
  }

export default Options;