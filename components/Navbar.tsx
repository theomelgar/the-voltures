"use client";

import styled from "styled-components";

export default function Navbar() {
  return (
    <>
      <Container>
        <Menu>
          <div>
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
          </div>
          <h3>MENU</h3>
        </Menu>
        <Title> The Voltures</Title>
        <Media>
          <a>Social</a>
        </Media>
      </Container>
    </>
  );
}

const Container = styled.nav`
  max-height: 100px;
  top: 0;
  left: 0;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  gap: 0.5em;
  h3 {
    font-weight: 400;
  }
  div {
    width: 30px;
  }
`;

const Title = styled.a`
  font-size: 40px;
`;

const Media = styled.a`
  display: flex;
  gap: 0.5em;
  justify-content: center;
  align-items: center;
`;
