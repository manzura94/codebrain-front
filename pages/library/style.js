import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
margin-left: 10px;
padding: 28px;
width: 100%;
height: 100%;
/* margin-left: 10px; */
`;

Wrapper.Left = styled.div`
/* background-color: yellow; */
width: 50%;
height: 100%;

`;

Wrapper.Right = styled.div`
/* background-color: gray; */
width: 50%;
height: 100%;

`;

const ButtonWrap = styled.div`
display: flex;
gap: 25px;
`

const Button = styled.div`
font-size: 16px;
padding: 10px 15px;
color: #fff;
cursor: pointer;
transition: all 0.4s ease;

:hover{
    color: #6FACFF;
}
`

export {Wrapper, Button, ButtonWrap}