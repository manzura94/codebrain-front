import styled from "styled-components";


const Main = styled.div`
  width: 70%;
  padding: 28px;
`;

const GridChild = styled.div`
  /* background: linear-gradient(
    40.99deg,
    #448aff -3.18%,
    #bb0db2 50.11%,
    #d80069 103.4%
  ); */
  /* background: linear-gradient(to right, #38bdf8, #7c3aed); */
  /* background: linear-gradient(to right,#38bff83d, #7c3aed6c); */
  background: linear-gradient(to right,#0f86d385, #2172f959, #7c3aed6c);
  /* background-image: radial-gradient(circle at 0% 2%, rgb(0, 117, 255), rgb(31, 64, 106) 100%); */




  border-radius: 7px;
  padding: 28px;
  color: #ffffff;
  grid-row: span 3;

  :first-child {
    grid-row: span 6;
  }
`;

const GridWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 31px;
  line-height: 38px;
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  margin: 38px 0 0;
`;

const MiniText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  margin-top: 68px;
`;

const Score = styled.div`
  width: 302px;
  height: 40px;
  background: #fff;
  border-radius: 14px;
  margin-top: 10px;
  margin-bottom: 30px;
`;

Score.Wrapper = styled.div`
  /* width: 75%; */
  width:${({ status }) => (status ? `${status}%` : '100%')};
  height: 100%;
  background: #448aff;
  border-radius: 14px;
  display: flex;
  align-items: center;
  padding: 10px 28px;
`;

Score.Percent = styled.span`
  font-weight: 600;
  font-size: 15px;
  line-height: 30px;
  margin-left: -14px;
`;

Score.Text = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`;

const Exercise = styled.div`
   background: linear-gradient(to right, #38bdf8, #7c3aed);
    padding: 3px;
  margin: 28px 0;
  border-radius: 7px; 
  display: flex;
`;

const BlueSection = styled.div`
width: 100%;
height: 100%;

background: linear-gradient(to right,#0f86d385, #2172f959);
padding: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

BlueSection.Right = styled.div`
width: 60%;
background: #202443;
padding: 20px;
border-top-right-radius: 7px;
border-bottom-right-radius: 7px;
color: #fff;
`

BlueSection.Left = styled.div`
width: 40%;

background: #222327;
border-top-left-radius: 7px;
border-bottom-left-radius: 7px;
`;

BlueSection.Block = styled.div`
display: flex;
width: 100%;
height: 100%;

justify-content: space-between;
align-items: center;
color: #fff;
`

BlueSection.Icon = styled.div`
width: 25px;
height: 25px;
`

BlueSection.Title = styled.p``

const Info = styled.div`
width: 100%;
 display: flex;
 margin: 15px auto;
 justify-content: center;
align-items: center;
gap: 15px;
padding: 10px;
border:2px solid #67dbf81c;
border-radius: 3px;
background: linear-gradient(to right,#0f86d33d,#2172f90d);
`;

Info.Icon = styled.span``;

Info.Text = styled.p`
color: #fff;
`

Info.Wrap = styled.div`
display: flex;
gap: 20px;
margin: 15px auto;
`

Info.Search = styled.div`
display: flex;
align-items: center;
cursor: pointer;
gap: 5px;
color: #fff;
`

Info.Button = styled.button`
padding: 10px 25px;
text-transform: uppercase;
background: linear-gradient(to right,#0f86d33d,#2172f90d);
color: #fff;
border:2px solid #67dbf81c;
border-radius: 3px;
:hover{
  background: linear-gradient(to right,#e8ecee3d,#95aed90d);
}
`

const InnerHtml = styled.div`
max-height: 130px;
overflow-y: auto;
font-size: 14px;

::-webkit-scrollbar {
  background: transparent;
  width: 5px;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 3px;
}
`

const Section = styled.div``

Section.Top = styled.div`
display: flex;
text-transform: capitalize;
align-items: center;
gap: 30px;
margin-bottom: 20px;
`

Section.Info = styled.div`
display: flex;
align-items: center;
padding: 0 3px;
border-radius: 5px;
background: #626575;
`

const Tags = styled.div`
display: flex;
align-items: center;
gap: 10px;
margin-top: 20px;
font-size: 13px;
`

Tags.Item = styled.span`
display: flex;
align-items: center;
padding: 3px;
background: #acacac;
border-radius: 5px;
color: black;
`





export {
  Main,
  GridWrap,
  Title,
  Text,
  MiniText,
  Score,
  Exercise,
  BlueSection,
  GridChild,
  Info,
  Section,
  InnerHtml,
  Tags
};

