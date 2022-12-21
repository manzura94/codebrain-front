import styled from "styled-components";

const Main = styled.div`
  width: 70%;
  padding: 28px;
`;

const GridChild = styled.div`
  background: linear-gradient(
    40.99deg,
    #448aff -3.18%,
    #bb0db2 50.11%,
    #d80069 103.4%
  );
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
  background: #fff;
  border-radius: 14px;
  margin-top: 10px;
  margin-bottom: 30px;
`;

Score.Wrapper = styled.div`
  width: 75%;
  background: #448aff;
  border-radius: 14px;
  display: flex;
  align-items: center;
  padding: 10px 28px;
`;

Score.Percent = styled.h2`
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  margin-right: 5px;
`;

Score.Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`;

const Exercise = styled.div`
  color: #fff;
  margin: 28px 0;
`;

const BlueSection = styled.div`
  background: #448aff;
  border-radius: 7px;
  margin: 14px 0;
  width: 100%;
  padding: 24px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;

 
`;
BlueSection.Right = styled.div`
`

BlueSection.Left = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`;

const Start = styled.button`
 padding: 10px 36px;
    background: rgba(0, 82, 220, 0.55);
    backdrop-filter: blur(4px);
    border-radius: 7px;
    border: none;
    color: #fff;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
`

BlueSection.Text = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

Info.Icon = styled.span``;

Info.Numbers = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

const CodeMasters = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
`;

const Section = styled.div`
  width: 50%;
  background: linear-gradient(
    40.99deg,
    #448aff -3.18%,
    #bb0db2 50.11%,
    #d80069 103.4%
  );
  border-radius: 7px;
  padding: 14px;
  display: flex;
  gap: 14px;
`;

Section.Img = styled.div`
    border-radius: 50%;
`;

Section.Title = styled.h2`
  font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 14px;
`;

Section.Content = styled.div`
 background: #cfe3ff;
    border-radius: 7px;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #000000;
    padding: 4px 7px;
`;

export {
  Main,
  GridWrap,
  Title,
  Text,
  MiniText,
  Score,
  Exercise,
  BlueSection,
  CodeMasters,
  Section,
  GridChild,
  Info,
  Start
};
