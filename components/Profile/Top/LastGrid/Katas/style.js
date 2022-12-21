import styled from "styled-components";

const Wrapper = styled.div`
width: 100%;
border-radius: 20px;
background: #202443;
padding: 20px;
display: flex;
`

Wrapper.Left = styled.div`
width: 20%;
display: flex;
flex-direction: column;
color: #fff;
gap: 10px;
border-right: 1px solid gray;
`;

Wrapper.Right = styled.div`
width: 80%;
padding-left: 20px;
display: flex;
flex-direction: column;
gap: 30px;
`

Wrapper.Katas = styled.div`
display: flex;
gap: 5px;
/* rgba(217, 217, 217, 0.309) */
border: 1px solid rgba(217, 217, 217, 0.05);
padding: 20px;
`

Wrapper.Top = styled.div`
width: 90%;
display: flex;
flex-direction: column;
gap: 10px;
color: #d9d9d9;
`

const Icon = styled.span`
display: flex;
justify-content: center;
align-items: center;
padding: 5px;
`

const Level = styled.div`
background: #626575;
padding:0px 5px;
justify-self: flex-start;
align-self: flex-start;
display: flex;
align-items: center;
border-radius: 10px;
gap: 4px;
`

const Tags = styled.span`
background: #acacac;
color: #000;
padding: 2px;
border-radius: 10px;
font-size: 14px;
`

Tags.Parent = styled.div`
display: flex;
gap: 10px;
`

export {Wrapper, Icon, Level, Tags}