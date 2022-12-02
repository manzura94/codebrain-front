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
} from "./style";
import level from "../../../assets/icons/level.svg";
import count from "../../../assets/icons/count.svg";
import hand from "../../../assets/icons/hand.svg";
import master from "../../../assets/images/codemaster-img.png";
import Ratings from "./Ratings";

const Exercises = () => {
  return (
    <Main>
      <GridWrap>
        <div className="grid-child">
          <Title>Masalalar bo’limi</Title>
          <Text>
            Bizdagi sifati baland masalalar bilan o’z darajangizni oshiring!
          </Text>
          <MiniText>Tugallanmagan masala:</MiniText>
          <Score>
            <div className="score__blue">
              <h2 className="score__percent">75%</h2>
              <p className="score__text">tugallangan</p>
            </div>
          </Score>
        </div>
        <div className="grid-child">
          <Title>Janglar</Title>
          <Text>Qobilyatingizni do’stingiz bilan bellashuvda sinang!</Text>
        </div>
        <div className="grid-child">
          <Title>Intervyu</Title>
          <Text>Tez kunda</Text>
        </div>
      </GridWrap>
      <Exercise>
        <Title>Keyingi masalangiz:</Title>
        <BlueSection>
          <div className="blue-left">
            <div className="text">Tic-Tac-Toe</div>
            <div className="info">
              <span className="info-icon">
                <Image src={level} width={15} height={21} />
              </span>
              <span className="info-numbers">Oson</span>
            </div>
            <div className="info">
              <span className="info-icon">
                <Image src={count} height={21} width={21} />
              </span>
              <span className="info-numbers">225</span>
            </div>
            <div className="info">
              <span className="info-icon">
                <Image src={hand} height={21} width={21} />
              </span>
              <span className="info-numbers">2 brain</span>
            </div>
          </div>
          <div className="blue-right">
            <button className="start">Start</button>
          </div>
        </BlueSection>
        <CodeMasters>
          <Section>
            <div className="section-img">
              <Image src={master} width={84} height={84}/>
            </div>
            <div className="section-info">
              <h2 className="section-title">CodeMasters’ Journey</h2>
              <div className="section-content">
                <p>Boshlanadi: 3 soat ichida</p>
                <p>Qatnashadi: 150 odam</p>
              </div>
            </div>
          </Section>
          <Section>
          <div className="section-img">
              <Image src={master} width={84} height={84} />
            </div>
            <div className="section-info">
              <h2 className="section-title">CodeMasters’ Journey</h2>
              <div className="section-content">
                <p>Boshlanadi: 3 soat ichida</p>
                <p>Qatnashadi: 150 odam</p>
              </div>
            </div>
          </Section>
        </CodeMasters>
      </Exercise>
      <Ratings/>
    </Main>
  );
};

export default Exercises;
