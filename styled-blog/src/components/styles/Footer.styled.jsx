import styled from "styled-components";

export const StyledFooter = styled.footer`
    //background-color: ${({theme}) => theme.colors.violet};
    color: #fff;
    padding: 100px 0 60px;

    background: linear-gradient(86deg, #ae67ff, #fffc67);
    background-size: 400% 400%;

    animation: AnimationName 17s ease infinite;

    @keyframes AnimationName {
    0%{background-position:22% 0%}
    50%{background-position:79% 100%}
    100%{background-position:22% 0%}
}

    ul {
        list-style-type: none;
    }

    ul li {
        margin-bottom: 20px;
    }

    p {
        text-align: right;
    }
`