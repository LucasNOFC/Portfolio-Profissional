import styled from "styled-components";
import Botao from "../Botao/Botao"

const StartComponent = styled.section`
background-image: linear-gradient(90deg, #002F52 35%, #326589);
color: #fff;
text-align:center;
padding:85px 0;
height:270px;
width:100%;
`

const TitleComponent = styled.h2`
font-size:16px;
font-weight: 500;
margin-bottom: 10px;
`

const SubtitleComponent = styled.h3`
    color: #fff;
    font-size: 36px;
    text-align:center;
    width: 100%;
`

const ApresentationTittleComponent = styled.p`
    font-size:28px;
    text-align:center;
    width:100%;
`

function Start() {
    return (
        <StartComponent>
            <TitleComponent>Olá! Como vai? Me Chamo</TitleComponent>
            <SubtitleComponent>Lucas Nobre Fernandes</SubtitleComponent>
            <ApresentationTittleComponent>Desenvolvedor Full-Stack</ApresentationTittleComponent>
            <Botao/>
        </StartComponent>
    )
}

export default Start