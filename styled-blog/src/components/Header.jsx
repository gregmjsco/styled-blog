import React from 'react'
import { StyledHeader, Nav, Logo } from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import { Button } from './styles/Button.styled'
import { Flex } from './styles/Flex.styled'

export default function Header() {
  return (
    <StyledHeader>
        <Container>
            <Nav>
                <Logo src='./images/logo.svg' />
                <Button> Posts</Button>
            </Nav>
            <h1>Blog</h1>
        </Container>

        <Flex>
            <div>
                <h1>
                    Blog landing hero section header
                </h1>
            </div>
        </Flex>
    </StyledHeader>
  )
}
