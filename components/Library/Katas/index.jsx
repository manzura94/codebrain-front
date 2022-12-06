import Image from "next/image";
import React, { useState } from "react";
import { useLoad } from "../../../hooks/request";
import { katas } from "../../../utils/urls";
import { Wrapper, Title, Container } from "./style";
import level from "../../../assets/icons/level.svg";
import card from "../../../assets/icons/card.svg";
import lock from "../../../assets/icons/lock.svg";
import { removeEmpty } from "../../../utils/helpers";
import Link from "next/link";

const Katas = ({ data }) => {
  // const link = data.difficulty || data.tags;
  // const difficulties = data.difficulty ? `difficulty=${data.difficulty}` : "";
  // const tegs = data.tags ? `&tags=${data.tags}` : "";
  // const getRequest = useLoad(
  //   { url: `${katas}${link && `?${difficulties}${tegs}`}` },
  //   [data]
  // );
  const getRequest = useLoad({
    url: katas,
    params: {...removeEmpty(data)}
    
  }, [data])  
  const result = getRequest?.response?.data?.result;

  return (
    <Wrapper>
      <Title>Masalalar to’plami</Title>
      <Container>
        {result?.map((item) => {
          const tags = item.tags.split(",");
          return (
            <Link href={`/library/${item.id}`}>
            <Container.Item key={item.id}>
              <Container.Left>
                <h3 className="title">{item.title}</h3>
                <div className="level">
                  <span>
                    <Image src={level} alt="level" width={15} height={21} />
                  </span>
                  <span className="difficulty">{item.difficulty}</span>
                </div>
                <div className="tags-wrapper">
                  {tags.map((el, index) => (
                    <div className="tags" key={index}>
                      <span className="tags-icon">
                        <Image src={card} alt="card" width={15} height={15} />
                      </span>
                      <span className="tags-name">{el}</span>
                    </div>
                  ))}
                </div>
              </Container.Left>
              <Container.Right>
                <div className="lock-wrapper">
                  <span className="lock-icon">
                    <Image src={lock} alt="lock" width={24} height={24} />
                  </span>
                  <span className="lock-open">Open</span>
                </div>
              </Container.Right>
            </Container.Item>
            </Link>
          );
        })}
      </Container>
    </Wrapper>
  );
};

export default Katas;
