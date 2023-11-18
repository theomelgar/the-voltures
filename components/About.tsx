import Image from "next/image";
import styled from "styled-components";
import who from "../public/who.jpg";
export default function About() {
  return (
    <Container id="about">
      <Box>
      <Title>Who are we</Title>
      <TitleTransparent>Who are wɘ</TitleTransparent>
      </Box>
      {/* <h1>
     Based in Rio de Janeiro and formed by João Gabriel (drums), João Amorim
      (guitar / vocals), Luca Meira (guitar / vocals), Luis Fuks(keyboard) and José Fuks (keyboard/
      bass). The group mixes classic rock sounds with blues-rock and alternative
      rock, taking elements from R&B and straight blues music. The band was
      formed in 2016 uniting four friends who went to school together and shared
      the same musical taste. Making their live debut in school soirees, and
      evolving to bars and small venues up to festivals. In 2019 the time had
      come for them to release their first single Don&apos;t Waste Your Life Away /
      Waiting on a Love to Come. Soon after, they released two more singles
      Mind Rules and Sunshine Girl. And finally, in November/2019 their debut
      album “So You Think You Know” was released independently, with all songs
      composed, produced and recorded exclusively by the group. - intertwines
      bluesy rock with R&B and catchy rock ballads. The album release show was
      held in December 2019 on the stage of Cine jóia, a venue at the forefront
      of the underground music scene in Rio. In 2021 they return with their
      tremolo guitar infused Single “One More Love In Vain” and “Cabalistic
      Girl”. They promise more music is on the way…
     </h1> */}
      <Photos>
        <CroppedImage src={who} alt="who" />  <Description>Based in Rio de Janeiro, the group mixes classic rock sounds with blues-rock and alternative
      rock, taking elements from R&B and straight blues music. The band was
      formed in 2016 uniting four friends who went to school together and shared
      the same musical taste. </Description> 
      </Photos>
      
    </Container>
  );
}
const CroppedImage = styled(Image)`
  width: 50vw;
  height: 590px;
  object-fit: cover; // or object-fit: contain; depending on your preference
  background-size: cover;
`;

const Description = styled.h1`
  max-width: 400px;
  font-size: 20px;
`

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const Box = styled.div`
  width: 80%;
  height: 200px;
  position: absolute;
  top: -2rem;
  left: 0;
`

const Title = styled.div`
  font-size: 90px;
  font-weight: 700;
  width: 100%;
  color: #ffffff;
  position: absolute;
  top: 1em;
  left: 1.1em;
  text-shadow: #FC0 1px 0 10px;

  z-index: 1;
`;
const TitleTransparent = styled.div`
  font-size: 110px;
  font-weight: 700;
  color: #000000;
  position: absolute;
  opacity: 0.5;
  filter: blur(2px);
  top: 0.5em;
  left: 0.5em;
`;
const Photos = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #70ace0;
`;

const Instrument = styled.div`

`;
