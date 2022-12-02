import React from "react";
import { Wrapper, General } from "./style";
import Image from "next/image";
import first from "../../../../assets/icons/first.svg";
import second from "../../../../assets/icons/second.svg";
import third from "../../../../assets/icons/third.svg";

const Ratings = () => {
  return (
    <Wrapper>
      <Wrapper.Title>Umumiy reyting:</Wrapper.Title>
      <General>
        <General.Item>
          <div className="item-img">
            <Image src={first} />
          </div>
          <div className="item-info">
            <p className="username">Polvonnazar</p>
            <div className="item-rate"></div>
          </div>
        </General.Item>
        <General.Item>
          <div className="item-img">
            <Image src={second} />
          </div>
          <div className="item-info">
            <p className="username">Jo’rabek</p>
            <div className="item-rate"></div>
          </div>
        </General.Item>
        <General.Item>
          <div className="item-img">
            <Image src={third} />
          </div>
          <div className="item-info">
            <p className="username">Umidjon</p>
            <div className="item-rate"></div>
          </div>
        </General.Item>
        <General.Item>
          <div className="item-img withnumber">
            <span className="item-number">4</span>
          </div>
          <div className="item-info">
            <p className="username">Jur’atbek</p>
            <div className="item-rate"></div>
          </div>
        </General.Item>
        <General.Item>
          <div className="item-img withnumber">
            <span className="item-number">5</span>
          </div>
          <div className="item-info">
            <p className="username">Xudayberganov Qo’chqorbek</p>
            <div className="item-rate"></div>
          </div>
        </General.Item>
      </General>
    </Wrapper>
  );
};

export default Ratings;
