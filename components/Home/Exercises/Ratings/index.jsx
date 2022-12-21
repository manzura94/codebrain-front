import React from "react";
import { Wrapper, General, Item } from "./style";
import Image from "next/image";
import { first, second, third } from "../../../../assets";


const Ratings = () => {
  return (
    <Wrapper>
      <Wrapper.Title>Umumiy reyting:</Wrapper.Title>
      <General>
        <General.Item>
          <Item.Img >
            <Image src={first} alt='first'/>
          </Item.Img>
          <Item.Info>
            <Item.Username >Polvonnazar</Item.Username>
            <Item.Rate></Item.Rate>
          </Item.Info>
        </General.Item>
        <General.Item>
          <Item.Img >
            <Image src={second} alt='second'/>
          </Item.Img>
          <Item.Info >
            <Item.Username >Jo’rabek</Item.Username>
            <Item.Rate></Item.Rate>
          </Item.Info>
        </General.Item>
        <General.Item>
          <Item.Img >
            <Image src={third} alt='third'/>
          </Item.Img>
          <Item.Info >
            <Item.Username >Umidjon</Item.Username>
            <Item.Rate></Item.Rate>
          </Item.Info>
        </General.Item>
        <General.Item>
          <Item.Img className="withnumber">
            <Item.Number>4</Item.Number>
          </Item.Img>
          <Item.Info>
            <Item.Username>Jur’atbek</Item.Username>
            <Item.Rate ></Item.Rate>
          </Item.Info>
        </General.Item>
        <General.Item>
          <Item.Img className="withnumber">
            <Item.Number>5</Item.Number>
          </Item.Img>
          <Item.Info>
            <Item.Username >Xudayberganov Qo’chqorbek</Item.Username>
            <Item.Rate></Item.Rate>
          </Item.Info>
        </General.Item>
      </General>
    </Wrapper>
  );
};

export default Ratings;
