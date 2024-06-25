import styled from "styled-components"

const Container = styled.div`
    background-color: #c1d9bc;
    color: #111111;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 700;
    height : 30px;
    border-bottom: 1px solid #111111;

    @media (max-width: 428px) {font-size: 10px}
`

const Annoucement = () => {
  return (
    <Container>
        FRAIS DE LIVRAISON OFFERTS À PARTIR DE 300€ D’ACHATS. 
    </Container>
  )
}

export default Annoucement