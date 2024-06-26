import styled, { keyframes } from "styled-components";


const scroll = keyframes`
  0% { transform: translateX(0%);
  } 100% {
    transform: translateX(-100%);
  }
`
const Container = styled.div`
  background-color: #C1D9BC;
  color: #111111;
  display: flex;
  align-items: center;
  overflow: hidden;
  font-size: 15px;
  font-weight: 700;
  height: 30px;
  border-bottom: 1px solid #111111;
  
  @media (max-width: 428px) {
    font-size: 10px;
  }
`

const MessageWrapper = styled.div`
  display: flex;
  white-space: nowrap;
  animation: ${scroll} 20s linear infinite;
`

const Message = styled.div`
  display: inline-block;
  padding-right: 100%;
`

const Announcement = () => {
  return (
    <Container>
      <MessageWrapper>
        <Message>FRAIS DE LIVRAISON OFFERTS À PARTIR DE 300€ D’ACHATS.</Message>
        <Message>FRAIS DE LIVRAISON OFFERTS À PARTIR DE 300€ D’ACHATS.</Message>
      </MessageWrapper>
    </Container>
  );
};export default Announcement;