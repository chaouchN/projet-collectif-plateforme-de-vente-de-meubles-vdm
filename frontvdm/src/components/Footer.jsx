import styled from "styled-components"


const Container = styled.div`
  background-color: #111111;
  color: #f5f5f5;
  padding: 20px;
  text-align: center;
  position: absolute;
  width: 100vw;
  margin: 0;
`;

const Footer = () => {
  return (
    <Container> 
        2024 VDM. Tous droits réservés
    </Container>
  )
}

export default Footer