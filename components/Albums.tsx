import React from "react";
import styled from "styled-components";

const AlbumsSection = () => {
  return (
    <Container id="albums">
      <Title>Albums</Title>
      <AlbumList>
        <AlbumItem>
          <AlbumCover src="album1.jpg" alt="Album 1" />
          <AlbumTitle>Album 1</AlbumTitle>
        </AlbumItem>
        <AlbumItem>
          <AlbumCover src="album2.jpg" alt="Album 2" />
          <AlbumTitle>Album 2</AlbumTitle>
        </AlbumItem>
        <AlbumItem>
          <AlbumCover src="album3.jpg" alt="Album 3" />
          <AlbumTitle>Album 3</AlbumTitle>
        </AlbumItem>
      </AlbumList>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const AlbumList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const AlbumItem = styled.li`
  width: 200px;
`;

const AlbumCover = styled.img`
  max-width: 100%;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const AlbumTitle = styled.p`
  font-size: 18px;
  color: #444;
  margin-top: 10px;
`;

export default AlbumsSection;
