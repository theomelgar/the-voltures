import Image from "next/image";
import styled from "styled-components";

export default function About() {
  return (
    <Container id="about">
     <h1>
     Based in Rio de Janeiro and formed by João Gabriel (drums), João Amorim
      (guitar / vocals), Luca Meira (guitar / vocals) and José Fuks (keyboard/
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
     </h1>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display:flex;
  justify-content: center;
  align-items: center;

}
>h1{
  width: 50%;
  height: 400px;
  font-size:20px;
  font-weight: 700;
  color:white;
}
`;
