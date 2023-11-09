import styled from "styled-components";

export default function Aside(){
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container className="aside">
      <Menu>
        <Albums onClick={() => scrollToSection("albums")}>Albums</Albums>
        {/* <About onClick(() => scrollToSection("about"))>About us</About>
        <Contact onClick(() => scrollToSection("contact"))>Contact</Contact> */}
      </Menu>
    </Container>
  );
};

const Container = styled.aside`
  position: fixed;
  top: 0;
  right: -300px; // Initially hidden
  width: 300px;
  height: 100vh;
  background: #333; // Background color for the aside
  transition: left 0.3s ease-in-out;
  overflow-y: scroll;
  pointer-events: auto;
  box-shadow: 2.1px 0px 2.2px rgba(0, 0, 0, 0.025),
    5.1px 0px 5.3px rgba(0, 0, 0, 0.036), 9.5px 0px 9.9px rgba(0, 0, 0, 0.045),
    17px 0px 17.6px rgba(0, 0, 0, 0.054), 31.8px 0px 33px rgba(0, 0, 0, 0.065),
    76px 0px 79px rgba(0, 0, 0, 0.09);
`;

const Menu = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 50% 0px;
  background-color: #9e9d9d;
  font-size: 74px;
  line-height: 0.92;
  letter-spacing: -0.04em;
  text-decoration: none;
  list-style-type: none;
`;

const About = styled.li``;

const Albums = styled.li``;

const Contact = styled.li``;
