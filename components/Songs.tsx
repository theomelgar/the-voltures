import { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../public/voltures-logo.png";
import Image from "next/image";

interface MusicProps {
  selected?: boolean;
}

export default function Songs() {
  const discos: any = {
    "Sunshine Girl":
      "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/17/02/ae/1702aeb3-25ce-9c25-e85c-c881955dca9c/artwork.jpg/1200x1200bb.jpg",
    "Love In That Way":
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ca/69/32/ca693234-33ec-ee4c-4e7f-cb9b00849eab/artwork.jpg/1200x1200bb.jpg",
    "Dont Waste Your Life Away":
      "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/7f/ce/a1/7fcea175-30a3-d171-4cc4-d9e9ca0e74a8/artwork.jpg/1200x1200bb.jpg",
    "One More Love In Vain":
      "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/95/71/5e/95715eb3-835c-741b-301c-2eafff00a102/artwork.jpg/1200x1200bb.jpg",
    "Blue And Grey":
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/8e/f9/7f/8ef97f3d-b0b4-b16c-3c8a-caf752115314/artwork.jpg/1200x1200bb.jpg",
  };

  const musicNames = Object.keys(discos);
  const [selectedImage, setSelectedImage] = useState(discos[musicNames[0]]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeBackgroundImage = () => {
    if (currentIndex === musicNames.length - 1) {
      setCurrentIndex(0); // Reset to the first music when it reaches the end
      setSelectedImage(discos[musicNames[0]]);
      return;
    } else {
      setCurrentIndex(currentIndex + 1);
    }
    setSelectedImage(discos[musicNames[currentIndex + 1]]);
  };

  const handleMusicClick = (index:number) => {
    setCurrentIndex(index);
    setSelectedImage(discos[musicNames[index]]);
  };

  useEffect(() => {
    const interval = setInterval(changeBackgroundImage, 5000); // Change background every 5 seconds (5000 milliseconds)
    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, [currentIndex]);

  return (
    <Container id="home">
      <Background src={selectedImage} />
      <Logo>
      <Image src={logo} alt="logo" width={300} height={0} />
      </Logo>
      <List>
        {musicNames.map((musicName, index) => (
          <Music
            key={musicName}
            onClick={() => handleMusicClick(index)}
            selected={index === currentIndex}
          >
            {musicName}
          </Music>
        ))}
      </List>
    </Container>
  );
}

const Container = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  position: relative;
  gap: 0.5em;
  font-size: 50px;
  font-weight: 500;
  background-color: #000000;
`;

const Background = styled.img`
  height: 80%;
  object-fit: contain;
  position: absolute;
  bottom: 1em;
  right: 1em;
  border-radius: 50%;
  filter: drop-shadow(-40px 10px 10px #0947a5);
  /* box-shadow: 2.1px 0px 2.2px rgba(0, 0, 0, 0.025),
    5.1px 0px 5.3px rgba(0, 0, 0, 0.036), 9.5px 0px 9.9px rgba(0, 0, 0, 0.045),
    17px 0px 17.6px rgba(0, 0, 0, 0.054), 31.8px 0px 33px rgba(0, 0, 0, 0.065),
    76px 0px 79px rgba(0, 0, 0, 0.09); */
  transition: transform 500ms ease-out, -webkit-transform 500ms ease-out;

  &:hover {
    transform: scale(1.04);
    box-shadow: -10px 10px 20px 2px rgba(0, 255, 255, 0.7);
  }
`;

const Logo = styled.div`
  padding: 150px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const List = styled.div`
  margin: 1em;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding: 10px;
  backdrop-filter: blur(5px);
`;

const Music  = styled.div<MusicProps>`
  cursor: pointer;
  opacity: ${(props) => (props.selected ? "1" : "0.6")};
  font-size: 60px;
  margin: 5px;
  text-shadow: 2px 2px 4px #000000;

  &:hover {
    opacity: 1;
  }
`;
