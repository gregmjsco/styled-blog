import {FaTwitter, FaFacebook, FaLinkedin} from 'react-icons/fa'
import { StyledSocialIcons } from './styles/Socialicons.styled'

export default function Socialicons() {
  return (
    <StyledSocialIcons>
        <li>
            <a href="https://x.com"><FaTwitter /> </a>
            
        </li>
        <li>
            <a href="https://facebook.com"><FaFacebook /> </a>
            
        </li>

        <li>
            <a href="https://linkedin.com"><FaLinkedin /> </a>
            
        </li>
    </StyledSocialIcons>
  )
}
