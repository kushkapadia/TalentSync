import React, { useContext } from "react"
import { Link } from "react-router-dom"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"
import styled from "styled-components"

// Styled components
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  margin-bottom: 0rem;
  
  @media (min-width: 768px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`
const StyledLink = styled(Link)`
  color: white;
  margin-right: 1rem;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`

const SignOutButton = styled.button`
  background-color: #6c757d;
  color: white;
  font-size: 0.875rem;
  padding: 0.375rem 0.75rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  
  &:hover {
    background-color: #5a6268;
  }
`

function HeaderLoggedIn(props) {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  function handleLogOut() {
    appDispatch({ type: "logout" }) // Dispatch logout action
  }

  return (
    <HeaderContainer>
      <StyledLink to="./internships">Internships</StyledLink>
      <StyledLink to="./applied-internships">Applied Internships</StyledLink>
      <SignOutButton onClick={handleLogOut}>Sign Out</SignOutButton>
    </HeaderContainer>
  )
}

export default HeaderLoggedIn
