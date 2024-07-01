// import styled from "styled-components"


// const Container = styled.div`
//   background-color: #111111;
//   color: #f5f5f5;
//   padding: 20px;
//   text-align: center;
//   position: relative;
//   width: 100%;
//   margin: 0;
//   box-sizing: border-box;
// `;

// const Footer = () => {
//   return (
//     <Container> 
//         2024 VDM. Tous droits réservés
//     </Container>
//   )
// }

// export default Footer

import styled from "styled-components"

const Container = styled.div`
    display: flex;
    background-color: #C1D9BC;
    color: white;
    border-top: 1px solid #111111;
    color: #111111;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Logo = styled.h1`
    flex: 1;
`;

const Desc = styled.p`
    margin: 20px 0px;
    
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap; 
`;

const ListItem = styled.li`
        width: 50%;
        margin-bottom: 10px;
        cursor: pointer;
        font-weight: 200;
        &:hover {
            text-decoration: underline;
        }
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>VDM</Logo>
            <Desc>Explorez notre plateforme dédiée à la revente de meubles entre particuliers où chaque pièce trouve une seconde vie.<br />
            Réduisons ensemble notre empreinte écologique.
            </Desc>
        </Left>
        <Center>

            <Title>Plan du site</Title>
            <List>
                <ListItem>Accueil</ListItem>
                <ListItem>Panier</ListItem>
                <ListItem>Categorie 1</ListItem>
                <ListItem>Categorie 2</ListItem>
                <ListItem>Mon compte</ListItem>
                <ListItem>Suivre ma commande</ListItem>
                <ListItem>Ma wishlist</ListItem>
                <ListItem>Conditions générales</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
                <ContactItem>17 rue Bruneau, 37912 Gilbertville</ContactItem>
                <ContactItem>07 63 72 56 22</ContactItem>
                <ContactItem>vdm@gmail.com</ContactItem>
                {/* <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" /> */}
        </Right>
    </Container>
  )
}

export default Footer