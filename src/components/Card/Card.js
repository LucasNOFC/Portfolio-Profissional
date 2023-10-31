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
  padding:50px;
  border-radius:10px;
  box-shadow: 12px 10px 19px -3px rgba(0,0,0,0.44);
  -webkit-box-shadow: 12px 10px 19px -3px rgba(0,0,0,0.44);
  -moz-box-shadow: 12px 10px 19px -3px rgba(0,0,0,0.44);
  margin-bottom:35px;
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
`

const ImageComponent = styled.img`
width:300px;
height:200px;
`

const TitleComponent = styled.h2`
font-size:36px;
color:black;
text-align:center;
`
const TextComponent = styled.p`
color:black;
text-align:center;
font-size:18px;
`

function Card({ image, title, techs, description}) {
  return (
            <CardElement>
                    <ProjectCardComponent>
                      <ImageComponent src={image} alt={title}/>
                      <InformationComponent>
                        <TitleComponent>{title}</TitleComponent>
                        <TextComponent>Techs:{techs}</TextComponent>
                        <TextComponent>{description}</TextComponent>
                      </InformationComponent>
                    </ProjectCardComponent>
            </CardElement>
  );
}

export default Card;