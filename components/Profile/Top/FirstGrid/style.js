import styled from "styled-components";

const Wrapper = styled.div`
 position: sticky;
 top: 120px;
    background-color: #202443;
    grid-row: span 4;
    height: fit-content;
    border-radius: 20px;
    padding: 20px;
`

const UserInfo = styled.div`
display: flex;
gap: 20px;
`

UserInfo.Wrapper = styled.div`
color: #fff;
display: flex;
margin: 5px 0;
flex-direction: column;
justify-content: space-between;
`

const EditButton = styled.button`
color: #2f7dff;
font-size: 16px;
background: transparent;
border: 2px solid #2f7dff;
border-radius: 8px;
padding: 10px;
margin: 20px 0;
width: 100%;
`
const HR = styled.div`
 border-bottom: 1px solid gray;
 margin-bottom: 20px;
`
const Status = styled.div`
display: flex;
flex-direction: column;
color: #fff;
gap: 10px;
margin-bottom: 20px;
`

Status.Info = styled.div`
color: #fff;
display: flex;
flex-direction: column;
gap: 10px;
margin-bottom: 20px;
`

Status.Wrapper = styled.div`
display: flex;
align-items: center;
gap: 10px;
`

Status.Title = styled.h3``

const Wrap = styled.div`
padding: 10px 20px;
color: gray;
background: hsla(0,0%,100%,.1);
border-radius: 20px;
`

export {Wrapper, UserInfo, EditButton, Status, HR, Wrap}