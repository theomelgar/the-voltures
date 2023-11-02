"use client";

import styled from "styled-components";

export default function Navbar() {
  return (
    <>
      <Container>
        <Menu>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </Menu>
        <Title> The Voltures</Title>
        <Media>Home Songs Social</Media>
      </Container>
    </>
  );
}

const Container = styled.nav`
  max-height: 100px;
  width: 100vw;
  position: relative;
  top: 0;
  left: 0;
  color: #ffffff;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.a`
  color: #ffffff;
  width: 5%;
`;

const Title = styled.a``;
const Media = styled.a`
  display: flex;
`;
