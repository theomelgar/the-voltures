import React from 'react'
import styled from 'styled-components'

export default function Songs() {
  return (
    <Container>
      <ul>
        <li>Song 1</li>
        <li>Song 2</li>
        <li>Song 3</li>
        <li>Song 4</li>
        <li>Song 5</li>

      </ul>
    </Container>
  )
}

const Container = styled.div`
  color: #ffffff;
`