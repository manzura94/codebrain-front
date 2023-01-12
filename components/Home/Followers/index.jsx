import Image from "next/image";
import React from "react";
import { avatar, statistics, robot } from "../../../assets";
import { Wrapper, Account, Dots, Statistics,FriendsWrapper,AddImage, Text } from "./style";

const Followers = () => {
  return (
    <Wrapper>
      <Account>
        <Account.Info>
          <div>
            <Image src={avatar} alt='avatar-image'/>
          </div>
          <div >
            <Account.Name>Nurbek Sapayev</Account.Name>
            <Account.Username>nurbek_sapayev</Account.Username>
          </div>
        </Account.Info>
        <Dots>
          <Dots.Span ></Dots.Span>
          <Dots.Span ></Dots.Span>
          <Dots.Span ></Dots.Span>
        </Dots>
      </Account>
      <Statistics>
        <Statistics.Title>Statistika</Statistics.Title>
        <Statistics.Info>
          <div>
            <Image src={statistics} width={82} height={82} alt='avatar-img'/>
          </div>
          <div>
            <Statistics.Title >Progress</Statistics.Title>
            <Statistics.Text >
              Tarif: Premium 
            </Statistics.Text>
            <Statistics.Text>Ishlangan masalalar: 2 </Statistics.Text>
            <Statistics.Text>Janglar: 5</Statistics.Text>
          </div>
          <div>
            <Statistics.Btn >Hammasi</Statistics.Btn>
          </div>
        </Statistics.Info>
      </Statistics>
      <FriendsWrapper>
        <Statistics.Adds>
            <AddImage>
              <Image src={robot} alt='robot' width={'150'} height={'150'}/>
            </AddImage>
            <Statistics.AddText >Level up your programming with <Text>CodeBrain.uz</Text></Statistics.AddText>
        </Statistics.Adds>
      </FriendsWrapper>
    </Wrapper>
  );
};

export default Followers;
