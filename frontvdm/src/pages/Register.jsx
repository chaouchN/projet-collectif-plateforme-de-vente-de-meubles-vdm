import styled from "styled-components"

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #111111;
    padding-bottom: 100px;
`

const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    border-radius: 15px;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 700;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin : 20px 10px 0px 0px;
    padding: 10px;
    &:focus {
        outline: none;
    }
`

const Agreement = styled.span`
    font-size: 15px;
    margin: 20px 0px;
`


const Button = styled.button`
    width: 40%;
    font-family: "Public Sans"
    border: none;
    padding: 15px 20px;
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



const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Créer un compte</Title>
            <Form>
                <Input placeholder="Nom"/>
                <Input placeholder="Prénom"/>
                <Input placeholder="Nom d'utilisateur"/>
                <Input placeholder="Adresse email"/>
                <Input placeholder="Mot de passe"/>
                <Input placeholder="Confirmer mot de passe"/>
               <Agreement>En cliquant sur "Créer mon compte", je confirme avoir lu, compris et accepté <b>les conditions d'utilisation et 
                la politique de confidentialité.</b>
                </Agreement>
                
                <Button>Créer mon compte</Button>
            </Form>
        </Wrapper>
    </Container>
    
    
  )
}

export default Register