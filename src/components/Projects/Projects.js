import { ProjectsRealized } from "./MakedProjects"
import styled from "styled-components"

const ProjectContainer = styled.section`
background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const Titulo = styled.section`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: #002F52;
    font-size: 36px;
    text-align: center;
    margin: 0;
`
const ProjectsMaked = styled.div`
margin-top: 30px;
display: flex;
width: 100%;
justify-content: center;
cursor: pointer;
gap:2rem;
`

function Projects() {
    return (
        <ProjectContainer>
            <Titulo>PROJETOS FEITOS</Titulo>
            <ProjectsMaked>
                {ProjectsRealized.map( project => (
                    <img src={project.src}></img>
                ))}
            </ProjectsMaked>
        </ProjectContainer>
    )
}

export default Projects;