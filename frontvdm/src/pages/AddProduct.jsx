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
    width:70%;
    font-family: "Public Sans"
    border: none;
    padding: 15px 30px;
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
const Label= styled.label`
   flex: 1;
    min-width: 40%;
    margin : 20px 0;
    padding: 30px;
    height : 50px;
    font-size: 16px;
    &:focus {
        outline: none;
    };
`
const Select= styled.select`
   flex: 1;
    min-width: 40%;
    margin : 20px 0;
    padding: 30px;
    height : 50px;
    font-size: 16px;
    &:focus {
        outline: none;
    };
    align-items: right;
`

const A = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`


const AddYourProduct = () => {
  return (
    <Container>
        <Wrapper>
            <Title>J'ajoute mon produit</Title>
            <Form>
            <Input placeholder="Nom du meuble" name="name"/>
                <label> Choisissez une catégorie: 
                <select name="category">
                    <option value="canapé">canapé</option>
                    <option value="table">table</option>
                    <option selected value="chaise">chaise</option>
                </select>
                </label>
                <Input placeholder="prix" name="price"/>
                <Input placeholder="couleur" name="color"/>
                <Input placeholder="matière" name="material"/>
                <Input placeholder="longueur" name="length"/>
                <Input placeholder="hauteur" name="height"/>
                <Input placeholder="largeur" name="width"/>
                <Input placeholder="profondeur" name="depth"/>
                <Input placeholder="description" name="description"/>
                <Input type="file" placeholder="image" name="picture"/>
                <Button>Mettre en vente</Button>
                
            </Form>
        </Wrapper>
    </Container>
  )
}

export default AddYourProduct