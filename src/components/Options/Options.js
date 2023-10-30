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
`

const textOptions = ["Sobre mim", "Projetos", "Stacks"]


function Options() {
    return (
          <OptionsComponent>
            { textOptions.map( (texto) => (
              (
                <OptionComponent className="option"><p>{texto}</p></OptionComponent>
              )
            ))}
          </OptionsComponent>
    );
  }

export default Options;