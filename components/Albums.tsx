import React from "react";
import styled from "styled-components";
import album from "../public/soyouthinkyouknow.webp";
import Image from "next/image";
const AlbumsSection = () => {
  return (
    <Container id="albums">
      <Title>Albums</Title>
      <AlbumList>
        <AlbumItem>
          <Image src={album} alt="Album 1" />
          <AlbumTitle>
            <h1>So You Think You Know</h1>
            <h2>2019</h2>
          </AlbumTitle>
        </AlbumItem>
        <AlbumItem>
          <Image src={album} alt="Album 1" />
          <AlbumTitle>
            <h1>So You Think You Know</h1>
            <h2>2019</h2>
          </AlbumTitle>
        </AlbumItem>
        <AlbumItem>
          <Image src={album} alt="Album 1" />
          <AlbumTitle>
            <h1>So You Think You Know</h1>
            <h2>2019</h2>
          </AlbumTitle>
        </AlbumItem>
      </AlbumList>
      <Title>Singles & EPs</Title>
      <AlbumList>
        <AlbumItem>
          <Image src={album} alt="Album 1" />
          <AlbumTitle>
            <h1>So You Think You Know</h1>
            <h2>2019</h2>
          </AlbumTitle>
        </AlbumItem>
        <AlbumItem>
          <Image src={album} alt="Album 1" />
          <AlbumTitle>
            <h1>So You Think You Know</h1>
            <h2>2019</h2>
          </AlbumTitle>
        </AlbumItem>
        <AlbumItem>
          <Image src={album} alt="Album 1" />
          <AlbumTitle>
            <h1>So You Think You Know</h1>
            <h2>2019</h2>
          </AlbumTitle>
        </AlbumItem>
        <AlbumItem>
          <Image src={album} alt="Album 1" />
          <AlbumTitle>
            <h1>So You Think You Know</h1>
            <h2>2019</h2>
          </AlbumTitle>
        </AlbumItem>
        <AlbumItem>
          <Image src={album} alt="Album 1" />
          <AlbumTitle>
            <h1>So You Think You Know</h1>
            <h2>2019</h2>
          </AlbumTitle>
        </AlbumItem>
      </AlbumList>
    </Container>
  );
};

const Container = styled.div`
  background-color: #dad9d9;
  padding: 20px;
  height: 100vh;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const AlbumList = styled.ul`
  list-style: none;
  display: flex;
  justify-content:flex-start;
  align-items: center;
  height: 400px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  
    gap: 5em;
  border: 1px solid #7a7a7a;
`;

const AlbumItem = styled.li`
  flex: 0 0 auto;
  width: 300px;  
`;

const AlbumCover = styled.img`
  max-width: 100%;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const AlbumTitle = styled.p`
  color: #444;
  margin-top: 10px;
  h1 {
    font-size: 21px;
  }
  h2 {
    font-size: 15px;
  }
`;

export default AlbumsSection;
