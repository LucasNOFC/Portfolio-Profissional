import styled from "styled-components";

const StartComponent = styled.section`
background-image: linear-gradient(90deg, #002F52 35%, #326589);
color: #fff;
text-align:center;
padding:85px 0;
height:270px;
width:100%;
`

const TitleComponent = styled.h2`
    color: #fff;
    font-size: 36px;
    text-align:center;
    width: 100%;
`

const SubtitleComponent = styled.h3`
    font-size:16px;
    font-weight: 500;
    margin-bottom: 40px;
`

function Start() {
    return (
        <StartComponent>
            <TitleComponent>Bem vindo ao meu Portfólio!</TitleComponent>
            <SubtitleComponent>Me chamo Lucas Nobre, Desenvolvedor FullStack!</SubtitleComponent>
        </StartComponent>
    )
}

export default Start