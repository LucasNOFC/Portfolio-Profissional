import styled from "styled-components"

const MediaComponent = styled.img`
  width:30px;
  height:30px;
  margin-right:30px;
`

const socialMediaOptions = [require("../../images/github.png"), require("../../images/linkedin.png")]
const linksMediaOptions = ["https://github.com/LucasNOFC", 
"https://www.linkedin.com/in/lucas-nobre-fernandes-4b2408203/"]

function Media() {
    return (
          <ul className='SocialMedia'>
            { socialMediaOptions.map( (Media, Index) => (
              (
                <a href={linksMediaOptions[Index]} key={Index} target="_blank" rel="noopener noreferrer">
                  <MediaComponent alt="social media logo" src={Media}/>
                  </a>
              )
            ))}
          </ul>
    );
  }

export default Media;