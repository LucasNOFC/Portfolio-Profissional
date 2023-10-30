import "./Media.css";
import Github from "../../images/github.svg";
import Linkedin from "../../images/linkedin.svg";

const socialMediaOptions = [Github, Linkedin]
const linksMediaOptions = ["https://github.com/LucasNOFC", 
"https://www.linkedin.com/in/lucas-nobre-fernandes-4b2408203/"]

function Media() {
    return (
          <ul className='SocialMedia'>
            { socialMediaOptions.map( (Media, Index) => (
              (
                <a href={linksMediaOptions[Index]} target="_blank" rel="noopener noreferrer">
                  <img src={Media} className="MediaIcon"/>
                  </a>
              )
            ))}
          </ul>
    );
  }

export default Media;