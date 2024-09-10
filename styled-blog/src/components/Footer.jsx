import Socialicons from "./Socialicons"
import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"
import { StyledFooter } from "./styles/Footer.styled"

export default function Footer() {
  return (
    <StyledFooter>
        <Container>
            <img src="../../public/images/logo.svg" alt="" />

            <Flex>
                <ul>
                    <li> Placeholder Footer copywrite text.</li>
                    <li>080-1234-5678</li>
                    <li>example@email.com</li>
                </ul>

                <Socialicons />
            </Flex>

            <p>&copy; Blog Copy Footer</p>
        </Container>
    </StyledFooter>
  )
}
