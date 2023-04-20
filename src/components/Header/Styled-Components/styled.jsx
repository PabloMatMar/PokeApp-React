import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: #d50221;
  position: fixed;
  top: 0;
  //z-index: 5000;
  right: ${props => (props.open ? "0" : "-100%")};
  width: 100%;
  //height: 70vh;
  transition: right 0.3s linear;

  @media only screen and (min-width: 680px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: space-around;
    background: #d50221;
  }

  a {
    padding: 0.5rem 0.8rem;
    color: green;
    text-decoration: none;
  }
`;