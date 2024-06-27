import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
`

const Title = styled.h1`
    margin-top: -50px;
    font-size: 60px;
    font-weight: 600;
    margin-bottom: -10px;
`

const Slogan = styled.p`
    text-align: center;
    font-size: 20px;
    color: #979797;
    margin-bottom: 40px;
`

const Button = styled.button`
    background-color: #FFFDF6;
    font-family: "Public Sans";
    font-size: 24px;
    font-weight: 500;
    color: #111111;
    border: 1px solid #111111;
    border-radius: 50px;
    padding: 15px 60px;
    position: relative;
    overflow: hidden;
    transition: color 0.4s;
    cursor: pointer;    
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #C1D9BC;
        transition: transform 0.4s;
        transform: scaleX(0);
        transform-origin: left;
        z-index: 0;
    }    
        &:hover::before {
        transform: scaleX(1);
    }    
        & > span {
        position: relative;
        z-index: 1;
    }
`

const Image = styled.img`
    width: 50%;
    margin-top: 40px;
`

const Hero = () => {
    return (
        <Container>
            <Title>Revendez vos meubles, sauvez la planète</Title>
            <Slogan>
                Explorez notre plateforme dédiée à la revente de meubles entre particuliers où chaque pièce trouve une seconde vie.<br />
                Réduisons ensemble notre empreinte écologique.
            </Slogan>
            <Link to="/catalog"><Button><span>Découvrez nos produits</span></Button></Link>
            <Image src="https://medias.gazette-drouot.com/prod/medias/mediatheque/100112.jpg" />
        </Container>
    );
}

export default Hero;