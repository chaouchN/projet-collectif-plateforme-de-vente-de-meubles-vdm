import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color : #111111;
    padding-bottom: 100px;
`

const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    border-radius: 15px;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 700;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin : 10px 0;
    padding: 10px;
    &:focus {
        outline: none;
    };
`

const Button = styled.button`
    width:40%;
    font-family: "Public Sans"
    border: none;
    padding: 15px 20px;
    margin-bottom: 10px;
    background-color: #111111;
    color: white;
    font-weight: 500;
    font-size: 16px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: #C1D9BC;
        color: #111111;
    };
`
const A = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`


const LoginSignUp = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Content de te revoir</Title>
            <Form>
                <Input placeholder="Nom d'utilisateur"/>
                <Input placeholder="Mot de passe"/>
                <Button>Se connecter</Button>
                <A>J'ai oublié mon mot de passe</A>
                <Link to="/register" style={{ textDecoration: "none", color: "#111111" }}><A>Créer un compte</A></Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default LoginSignUp