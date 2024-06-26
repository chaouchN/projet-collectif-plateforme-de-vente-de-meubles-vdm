import styled from "styled-components"

const Button = styled.button`
`

const Filters = ({ onClick, children }) => {
  return (
    <Button onClick={onClick}>
      {children}
      Afficher tous les produits
    </Button>
  )
}

export default Filters