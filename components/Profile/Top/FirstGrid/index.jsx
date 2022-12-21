import Image from "next/image";
import React from "react";
import { avatar } from "../../../../assets";
import { Reputation, Solutions, ViewIcon } from "../../../icons";
import { Wrapper, UserInfo, EditButton, Status, HR, Wrap } from "./style";

const FirstGrid = () => {
  return (
    <Wrapper>
      <UserInfo>
        <div>
          <Image src={avatar} width={80} height={80} alt="avatar" />
        </div>
        <UserInfo.Wrapper>
          <span>{`Nurbek Sapayev`}</span>
          <span>{`nurbek_sapayev`}</span>
        </UserInfo.Wrapper>
      </UserInfo>
      <EditButton>Edit profile</EditButton>
      <HR />
      <Status>
        <span>Member Since : Feb 2022</span>
        <span>Last Seen: Dec 2022</span>
      </Status>
      <HR />
      <Status.Info>
        <Status.Title>Status</Status.Title>
        <Status.Wrapper>
          <span>
            <ViewIcon />
          </span>
          <span>Last try</span>
          <span> 0</span>
        </Status.Wrapper>
        <Status.Wrapper>
          <span>
            <Solutions />
          </span>
          <span>Total Completed Kata</span>
          <span> 0</span>
        </Status.Wrapper>
        <Status.Wrapper>
          <span>
          <Reputation/>
          </span>
          <span>Reputation</span>
          <span> 0</span>
        </Status.Wrapper>
      </Status.Info>
      <HR />
      <Status.Info>
        <Status.Title>Language</Status.Title>
        <Status.Wrapper>
          <Wrap>Javascript</Wrap>
        </Status.Wrapper>
      </Status.Info>
    </Wrapper>
  );
};

export default FirstGrid;
