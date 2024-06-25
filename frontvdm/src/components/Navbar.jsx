import styled from "styled-components"

const Container = styled.div``

const Wrapper = styled.div`
  display: flex;`

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap : 20px
  `

const Logo = styled.h1``

const MenuItem = styled.div``

const ToSell = styled.button``

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SearchContainer = styled.div``

const Input = styled.input``

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  `

const Cart = styled.div``

const Account = styled.div``

const Navbar = () => {
  return (
    <Container>
      <Wrapper>

        <Left>
          <Logo>VDM</Logo>
          <MenuItem>Catalogue</MenuItem>
          <MenuItem>À Propos</MenuItem>
          <ToSell>Vendre</ToSell>
        </Left>

        <Center>
          <SearchContainer>
            <Input placeholder="Rechercher"/>
          </SearchContainer>
        </Center>

        <Right>
          <Cart>Panier</Cart>
          <Account>Se Connecter</Account>
        </Right>


      </Wrapper>
    </Container>
  )
}

export default Navbar