'use client'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Songs from '../components/Songs'
export default function Home() {
  return (
    <main>
      <Container >
        <Navbar></Navbar>
        <Songs></Songs>
      </Container>
    </main>
  )
}

const Container = styled.div`
  background-color: rgb(0, 70, 102);
  position: relative;
`