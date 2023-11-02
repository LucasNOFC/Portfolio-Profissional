import styled from 'styled-components';

const CardElement = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin:auto;
  flex-flow: nowrap;
  width:500px;
  height:300px;
  background-color:white;
  padding:55px;
  border-radius:10px;
  box-shadow: 12px 10px 19px -3px rgba(0,0,0,0.44);
  -webkit-box-shadow: 12px 10px 19px -3px rgba(0,0,0,0.44);
  -moz-box-shadow: 12px 10px 19px -3px rgba(0,0,0,0.44);
  margin-bottom:35px;
  transition: .2s ease-in-out;

  &:hover{
    width:510px;
    height:310px;
  }

  @media (max-width:708px) {
    width:300px;
    height:150px;
  }

  @media (max-width:483px) {
    width:150px;
    height:100px;
  }
  `

const ProjectCardComponent = styled.div`
  display:flex;
  flex-flow:row nowrap;
  gap:2rem;
`
const InformationComponent = styled.div`
  display:flex;
  flex-flow:column nowrap;
  height:200px;
  width:250px

  @media (max-width:708px) {
    width:125px;
    height:100px;
  }

  @media (max-width:483px) {
    width:75px;
    height:50px;
  }
`

const ImageComponent = styled.img`
width:300px;
height:200px;

@media (max-width:708px) {
  width:150px;
  height:150px;
}

@media (max-width:483px) {
  width:100px;
  height:100px;
}
`

const TitleComponent = styled.h2`
font-size:30px;
color:black;
text-align:center;

@media (max-width:708px) {
  font-size:12px;
}

@media (max-width:483px) {
  font-size:10px;
}
`
const TextComponent = styled.p`
color:black;
font-size:18px;

@media (max-width:708px) {
  font-size:15px;
}

@media (max-width:708px) {
  font-size:9px;
}
`


function Card({ image, title, techs, description}) {
  return (
            <CardElement>
                <ProjectCardComponent>
                  <ImageComponent src={image} alt={title}/>
                    <InformationComponent>
                      <TitleComponent>{title}</TitleComponent>
                      <TextComponent>
                          Techs:<strong>{techs} </strong><br/>
                          {description}
                      </TextComponent>
                    </InformationComponent>
                </ProjectCardComponent>
            </CardElement>
  );
}

export default Card;