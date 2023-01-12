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
  GridChild,
  Info,
  Section,
  InnerHtml,
  Tags,
} from "./style";
import { level, card, search } from "../../../assets";
import Ratings from "./Ratings";
import { GrowIcon, Js } from "../../icons";
import { getKatasUrl, katas, submission } from "../../../utils/urls";
import { useLoad } from "../../../hooks/request";
import Link from "next/link";

const Exercises = () => {

  const randomKata = useLoad({ url: getKatasUrl(1) });
  const submittedKata = useLoad({ url: submission });
  console.log(submittedKata, "exercises");
  const allKatas = useLoad({ url: katas });
  const filtered = submittedKata?.response?.data?.filter(
    (item) => item.status === "solved"
  );
  const kata = randomKata?.response?.data[0];
  const tags = kata?.tags?.split(",");

  const totalKatas = allKatas?.response?.data?.count;
  const percentKata = (filtered?.length * 100) / totalKatas;

  return (
    <Main>
      <GridWrap>
        <GridChild>
          <Link href={"/library"}>
            <Title>Masalalar bo’limi</Title>
            <Text>
              Bizdagi sifati baland masalalar bilan o’z darajangizni oshiring!
            </Text>
            <MiniText>Tugallangan masalalar:</MiniText>
            <Score>
              <Score.Wrapper status={percentKata}>
                <Score.Percent>
                  {percentKata ? `${percentKata.toFixed(1)}%` : "100%"}
                </Score.Percent>
              </Score.Wrapper>
            </Score>
          </Link>
        </GridChild>
        <GridChild>
          <Title>Janglar</Title>
          <Text>Qobilyatingizni do’stingiz bilan bellashuvda sinang!</Text>
        </GridChild>
        <GridChild>
          <Title>Intervyu</Title>
          <Text>Tez kunda</Text>
        </GridChild>
      </GridWrap>
      <Exercise>
        <BlueSection.Left>
          <BlueSection>
            <BlueSection.Block>
              <BlueSection.Title>Your Next Challenge</BlueSection.Title>
              <BlueSection.Icon>
                <GrowIcon />
              </BlueSection.Icon>
            </BlueSection.Block>
            <Info>
              <Info.Icon>
                <Js />
              </Info.Icon>
              <Info.Text>Javascript</Info.Text>
            </Info>
            <Info.Wrap>
              <Link href={`/library/${kata?.id}`}>
                <Info.Button>Start</Info.Button>
              </Link>
              <Info.Button>Next</Info.Button>
            </Info.Wrap>
            <Link href={"/library"}>
              <Info.Search>
                <div>
                  <Image src={search} alt="search" width={22} height={22} />
                </div>
                <div>Search</div>
              </Info.Search>
            </Link>
          </BlueSection>
        </BlueSection.Left>
        <BlueSection.Right>
          <Section.Top>
            <Section.Info>
              <span>
                <Image src={level} alt="level" width={20} height={20} />
              </span>
              <span>{kata?.difficulty}</span>
            </Section.Info>
            <div>
              {kata?.title ? `${kata?.title?.slice(0, 20)}...` : "Loading..."}
            </div>
          </Section.Top>
          <InnerHtml
            dangerouslySetInnerHTML={{ __html: kata?.instructions }}
          ></InnerHtml>
          <Tags>
            {tags?.slice(0, 3).map((item, index) => (
              <Tags.Item key={index}>
                <span>
                  <Image src={card} alt="card" width={14} height={14} />
                </span>
                <span>{item}</span>
              </Tags.Item>
            ))}
          </Tags>
        </BlueSection.Right>
      </Exercise>
      <Ratings />
    </Main>
  );
};

export default Exercises;
