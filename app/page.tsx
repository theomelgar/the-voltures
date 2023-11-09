'use client'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Songs from '../components/Songs'
import AlbumsSection from '@/components/Albums'
import About from '@/components/About'
import Info from '@/components/Info'
export default function Home() {
  return (
    <main>
      <Container >
        <Navbar></Navbar>
        <Songs></Songs>
        <AlbumsSection></AlbumsSection>
        <About></About>
        <Info></Info>
      </Container>
    </main>
  )
}

const Container = styled.div`
  background-color: rgb(0, 70, 102);
  position: relative;
`