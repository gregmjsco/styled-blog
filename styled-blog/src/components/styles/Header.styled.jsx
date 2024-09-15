import styled from "styled-components";

export const StyledHeader = styled.header`
    //background-color: ${({ theme }) => theme.colors.violet};
    background: linear-gradient(86deg, #ae67ff, #fffc67);
    background-size: 400% 400%;
    padding: 40px 0;

    animation: AnimationName 17s ease infinite;

    @keyframes AnimationName {
    0%{background-position:22% 0%}
    50%{background-position:79% 100%}
    100%{background-position:22% 0%}
}
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    @media(max-width: ${({theme}) => theme.mobile}) {
        flex-direction: column;
    }
`

export const Logo = styled.img`
    @media(max-width: ${({theme}) => theme.mobile}) {
        margin-bottom: 40px;
    }
`

export const Image = styled.img`
    width: 375px;
    margin-left: 40px;

    @media(max-width: ${({theme}) => theme.mobile}) {
        margin: 40px 0 30px;
    }
`