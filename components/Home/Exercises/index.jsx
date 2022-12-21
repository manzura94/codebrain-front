import Image from "next/image";
import React from "react";
import {
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
} from "./style";
import {count, level, hand, codemaster} from '../../../assets';
import Ratings from "./Ratings";

const Exercises = () => {

  return (

    <Main>
      <GridWrap>
        <GridChild >
          <Title>Masalalar bo’limi</Title>
          <Text>
            Bizdagi sifati baland masalalar bilan o’z darajangizni oshiring!
          </Text>
          <MiniText>Tugallanmagan masala:</MiniText>
          <Score>
            <Score.Wrapper >
              <Score.Percent >75%</Score.Percent>
              <Score.Text>tugallangan</Score.Text>
            </Score.Wrapper>
          </Score>
        </GridChild>
        <GridChild>
          <Title>Janglar</Title>
          <Text>Qobilyatingizni do’stingiz bilan bellashuvda sinang!</Text>
        </GridChild>
        <GridChild >
          <Title>Intervyu</Title>
          <Text>Tez kunda</Text>
        </GridChild>
      </GridWrap>
      <Exercise>
        <Title>Keyingi masalangiz:</Title>
        <BlueSection>
          <BlueSection.Left >
            <BlueSection.Text >Tic-Tac-Toe</BlueSection.Text>
            <Info >
              <Info.Icon >
                <Image src={level} width={15} height={21} alt='level'/>
              </Info.Icon>
              <Info.Numbers >Oson</Info.Numbers>
            </Info>
            <Info >
              <Info.Icon >
                <Image src={count} height={21} width={21} alt='counting'/>
              </Info.Icon>
              <Info.Numbers >225</Info.Numbers>
            </Info>
            <Info >
              <Info.Icon >
                <Image src={hand} height={21} width={21} alt='handing'/>
              </Info.Icon>
              <Info.Numbers >2 brain</Info.Numbers>
            </Info>
          </BlueSection.Left>
          <BlueSection.Right >
            <Start >Start</Start>
          </BlueSection.Right>
        </BlueSection>
        <CodeMasters>
          <Section>
            <Section.Img>
              <Image src={codemaster} width={84} height={84} alt='master'/>
            </Section.Img>
            <div >
              <Section.Title>CodeMasters’ Journey</Section.Title>
              <Section.Content >
                <p>Boshlanadi: 3 soat ichida</p>
                <p>Qatnashadi: 150 odam</p>
              </Section.Content>
            </div>
          </Section>
          <Section>
          <Section.Img>
              <Image src={codemaster} width={84} height={84} alt='journey'/>
            </Section.Img>
            <div >
              <Section.Title>CodeMasters’ Journey</Section.Title>
              <Section.Content>
                <p>Boshlanadi: 3 soat ichida</p>
                <p>Qatnashadi: 150 odam</p>
              </Section.Content>
            </div>
          </Section>
        </CodeMasters>
      </Exercise>
      <Ratings/>
    </Main>
  );
};

export default Exercises;
