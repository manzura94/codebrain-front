import styled from "styled-components";

const Menu =  styled.div`
display: flex;
flex-direction: column;
gap: 28px;
min-height: calc(100vh - 100px);
padding: 150px 24px 0;
background:#202443;
position: fixed;
margin-top: 96px;
`

const IconWrap = styled.div`
padding: 16px;
border-radius: 7px;
`

export  {Menu, IconWrap}