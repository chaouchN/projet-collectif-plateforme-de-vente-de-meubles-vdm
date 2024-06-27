import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart.svg";
import AccountIcon from "../assets/account.svg";
import SearchIcon from "../assets/search.svg";
import LoginPopup from './LoginPopup'; // Assurez-vous que le chemin est correct

const Container = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 80px;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const Logo = styled.h1``;

const MenuItem = styled.div`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Input = styled.input`
  border: 1px solid #111111;
  border-radius: 50px;
  font-family: "Public Sans";
  color: #111111;
  font-weight: 700;
  padding: 5px 50px;
  text-align: center;
  outline: none;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const Cart = styled.div`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Account = styled.div`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Image = styled.img`
  width: 30px;
  margin-right: -30px;
  cursor: pointer;
`;

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/" style={{ textDecoration: "none", color: "#111111" }}><Logo>VDM</Logo></Link>
          <Link to="/" style={{ textDecoration: "none", color: "#111111" }}><MenuItem>Accueil</MenuItem></Link>
          <Link to="/catalog" style={{ textDecoration: "none", color: "#111111" }}><MenuItem>Catalogue</MenuItem></Link>
        </Left>

        <Center>
          <SearchContainer>
            <Input type="text" placeholder="Rechercher"/>
            <Image src={SearchIcon}/>
          </SearchContainer>
        </Center>

        <Right>
          <Image src={CartIcon}/>
          <Cart>Panier</Cart>
          <Image onClick={() => setShowLogin(true)} src={AccountIcon}/>
          <Account onClick={() => setShowLogin(true)}>Mon Compte</Account>
        </Right>
      </Wrapper>
      
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
    </Container>
  );
};

export default Navbar;
