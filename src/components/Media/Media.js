import Github from "../../images/github.svg";
import Linkedin from "../../images/linkedin.svg";
import styled from "styled-components"

const MediaComponent = styled.img`
  width:30px;
  height:30px;
  margin-right:30px;
`

const socialMediaOptions = [Github, Linkedin]
const linksMediaOptions = ["https://github.com/LucasNOFC", 
"https://www.linkedin.com/in/lucas-nobre-fernandes-4b2408203/"]

function Media() {
    return (
          <ul className='SocialMedia'>
            { socialMediaOptions.map( (Media, Index) => (
              (
                <a href={linksMediaOptions[Index]} target="_blank" rel="noopener noreferrer">
                  <MediaComponent alt="social media logo" src={Media} className="MediaIcon"/>
                  </a>
              )
            ))}
          </ul>
    );
  }

export default Media;