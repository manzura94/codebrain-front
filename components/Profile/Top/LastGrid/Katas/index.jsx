import React from "react";
import { Wrapper, Icon, Level, Tags } from "./style";
import { submission } from "../../../../../utils/urls";
import { useLoad } from "../../../../../hooks/request";
import Image from "next/image";
import { card, level } from "../../../../../assets";
import { Js } from "../../../../icons";

const Katas = () => {

  const katas = useLoad({ url: submission });
  const getKatas = katas?.response;
  const failed = getKatas?.filter((item) => item.status === "failed");
  const solved = getKatas?.filter((item) => item.status === "solved");

  return (
    <Wrapper>
      <Wrapper.Left>
        <span>{`Completed (${solved?.length || 0})`}</span>
        <span>{`Unfinished (${failed?.length || 0})`}</span>
      </Wrapper.Left>
      <Wrapper.Right>
        {getKatas?.map((item) => {
          const tags = item.kata.tags.split(",");
          return (
            <Wrapper.Katas key={item.id}>
              <Wrapper.Top>
                <Level>
                  <Level.Icon>
                    <Image src={level} alt="level" width={15} height={21} />
                  </Level.Icon>
                  <span>{item.kata.difficulty}</span>
                </Level>
                <span>{item.kata.title}</span>
                <Tags.Parent>
                  {tags?.map((el, index) => (
                    <Tags key={index}>
                      <Level.Icon >
                        <Image src={card} alt="card" width={15} height={15} />
                      </Level.Icon>
                      <span>{el}</span>
                    </Tags>
                  ))}
                </Tags.Parent>
              </Wrapper.Top>
              <div>
                <Icon>
                  <Js/>
                </Icon>
              </div>
            </Wrapper.Katas>
          );
        })}
      </Wrapper.Right>
    </Wrapper>
  );
};

export default Katas;
