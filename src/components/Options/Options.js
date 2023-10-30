import './Options.css';

const textOptions = ["Sobre mim", "Projetos", "Stacks"]


function Options() {
    return (
          <ul className='options'>
            { textOptions.map( (texto) => (
              (
                <li className="option"><p>{texto}</p></li>
              )
            ))}
          </ul>
    );
  }

export default Options;