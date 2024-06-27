import styled from "styled-components"

const Caca = styled.div`
width: 10vw;
height: 10vh;
right: 0;
top: 0;
`

const Pipi = styled.div``

const LoginPopup = ({setShowLogin}) => {
  return (
    <>
    <Caca>dddededdede</Caca>
    <Pipi onClick={() => setShowLogin(false)}>Fermer</Pipi>
    </>
  )
}

export default LoginPopup