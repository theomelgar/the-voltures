import styled from "styled-components";
import logo from "../public/voltures-logo.png";
import banda from "../public/voltures-boa.jpg";
import Image from "next/image";
export default function Info() {
  return (
    <Container id="contact">
      <h1>Contact</h1>
      <div>
        <Image src={banda} alt="banda" width={600} height={0}/>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #b8b7b7;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
