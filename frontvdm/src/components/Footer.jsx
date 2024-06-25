import styled from "styled-components"


const Container = styled.div`
  background-color: #111111;
  color: #f5f5f5;
  padding: 20px;
  text-align: center;
  position: relative;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
`;

const Footer = () => {
  return (
    <Container> 
        2024 VDM. Tous droits réservés
    </Container>
  )
}

export default Footer