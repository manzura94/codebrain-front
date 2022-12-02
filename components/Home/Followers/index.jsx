import Image from "next/image";
import React from "react";
import { Wrapper, Account, Dots, Statistics,FriendsWrapper } from "./style";
import avatar from "../../../assets/images/avatar.png";
import statistics from "../../../assets/images/statistics.png";

const Followers = () => {
  return (
    <Wrapper>
      <Account>
        <Account.Info>
          <div>
            <Image src={avatar} />
          </div>
          <div className="account-info">
            <p className="account-name">Nurbek Sapayev</p>
            <span className="account-username">nurbek_sapayev</span>
          </div>
        </Account.Info>
        <Dots>
          <span className="threedots"></span>
          <span className="threedots"></span>
          <span className="threedots"></span>
        </Dots>
      </Account>
      <Statistics>
        <Statistics.Title>Statistika</Statistics.Title>
        <Statistics.Info>
          <div className="info-item">
            <Image src={statistics} width={82} height={82}/>
          </div>
          <div className="info-item">
            <h3 className="info-title">Progress</h3>
            <p className="info-text">
              Tarif: Premium 
            </p>
            <p className="info-text">Ishlangan masalalar: 2 </p>
            <p className="info-text">Janglar: 5</p>
          </div>
          <div className="info-item">
            <button className="info-btn">Hammasi</button>
          </div>
        </Statistics.Info>
      </Statistics>
      <FriendsWrapper>
        <Statistics.Title>Do’stlar</Statistics.Title>
        <Statistics.Info>
            
        </Statistics.Info>
      </FriendsWrapper>
    </Wrapper>
  );
};

export default Followers;
