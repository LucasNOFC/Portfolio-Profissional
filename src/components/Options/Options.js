import { Link } from 'react-router-dom';
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
const urlsOptions = ["/Sobre-mim", "/Projetos"]


function Options() {
    return (
          <OptionsComponent>
            { textOptions.map( (texto, Index) => (
              (
                <OptionComponent className="option" key={Index}><Link to={urlsOptions[Index]}>{texto}</Link></OptionComponent>
              )
            ))}
          </OptionsComponent>
    );
  }

export default Options;