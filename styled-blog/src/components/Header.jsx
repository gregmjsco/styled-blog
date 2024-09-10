import React from 'react'
import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled'
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
                <p>Filler paragraph text for the blog. Will give an introductory message to what the blog talks about here.</p>

                <Button bg = '#ff0099' color='#fff'>Button placeholder</Button>
            </div>

            <Image src='../../public/images/vite.svg' alt=''></Image>
        </Flex>
    </StyledHeader>
  )
}
