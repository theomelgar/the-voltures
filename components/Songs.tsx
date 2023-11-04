import { useState, useEffect } from "react";
import styled from "styled-components";

export default function Songs() {
  const discos = {
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

  const handleMusicClick = (index) => {
    setCurrentIndex(index);
    setSelectedImage(discos[musicNames[index]]);
  };

  useEffect(() => {
    const interval = setInterval(changeBackgroundImage, 5000); // Change background every 5 seconds (5000 milliseconds)
    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, [currentIndex]);

  return (
    <Container>
      <Background src={selectedImage} />
      <List>
        {musicNames.map((musicName, index) => (
          <Music
            key={musicName}
            onClick={() => handleMusicClick(index)}
            isSelected={index === currentIndex}
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
  
`;
const Background = styled.img`
  height: 80%;
  object-fit: contain;
  position: absolute;
  bottom: 1em;
  right: 1em;
`;

const List = styled.div`
  margin: 1em;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding: 10px;
  backdrop-filter: blur(5px);
`;

const Music = styled.div`
  cursor: pointer;
  font-size: 60px;
  margin: 5px;
  ${({ isSelected }) =>
    isSelected && "opacity: 0.6;"}// Apply a style if isSelected is true
`;
