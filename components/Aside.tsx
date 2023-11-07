import styled from "styled-components";

export default function Aside() {
  return <Container>Aside</Container>;
}

const Container = styled.aside`
  transition: opacity 250ms ease, left 0ms 0ms ease;
  left: 0;
  opacity: 1;
  overflow-y: scroll;
  pointer-events: auto;
  box-shadow: 2.1px 0px 2.2px rgba(0, 0, 0, 0.025),
    5.1px 0px 5.3px rgba(0, 0, 0, 0.036), 9.5px 0px 9.9px rgba(0, 0, 0, 0.045),
    17px 0px 17.6px rgba(0, 0, 0, 0.054), 31.8px 0px 33px rgba(0, 0, 0, 0.065),
    76px 0px 79px rgba(0, 0, 0, 0.09);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: var(--mobile-menu-width);
  height: 100vh;
  font-family: "NB International Web", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  background-color: black;
  transition: opacity 250ms ease, left 0ms 250ms ease;
  z-index: 3;
  overflow: none;
  opacity: 0;
  left: calc(-1 * var(--mobile-menu-width) - 1px);
  pointer-events: none;
  scrollbar-color: black #444444;
  scrollbar-width: thin;
  display: block;
`;
