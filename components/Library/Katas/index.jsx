import * as React from "react";
import Image from "next/image";
import { useLoad } from "../../../hooks/request";
import { katas } from "../../../utils/urls";
import { Wrapper, Container, TabName } from "./style";
import { removeEmpty } from "../../../utils/helpers";
import Link from "next/link";
import { card, level, lock } from "../../../assets";
import {Tabs, TabPanel, Box, TabContext} from '../../MaterialUI'

const Katas = ({ data }) => {
  const [value, setValue] = React.useState("1");

  const getRequest = useLoad(
    {
      url: katas,
      params: { ...removeEmpty(data) },
    },
    [data]
  );

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const result = getRequest?.response?.data?.result;

  return (
    <Wrapper>
      <Box sx={{ width: "100%" }}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <TabName label="Masalalar to’plami" value="1" />
          </Tabs>
        </Box>
        <TabContext value={value}>
          <TabPanel value={"1"}>
            <Container>
              {result?.map((item) => {
                const tags = item.tags.split(",");
                return (
                  <Link href={`/library/${item.id}`} key={item.id}>
                    <Container.Item>
                      <Container.Left>
                        <h3 className="title">{item.title}</h3>
                        <div className="level">
                          <span>
                            <Image
                              src={level}
                              alt="level"
                              width={15}
                              height={21}
                            />
                          </span>
                          <span className="difficulty">{item.difficulty}</span>
                        </div>
                        <div className="tags-wrapper">
                          {tags.map((el, index) => (
                            <div className="tags" key={index}>
                              <span className="tags-icon">
                                <Image
                                  src={card}
                                  alt="card"
                                  width={15}
                                  height={15}
                                />
                              </span>
                              <span className="tags-name">{el}</span>
                            </div>
                          ))}
                        </div>
                      </Container.Left>
                      <Container.Right>
                        <div className="lock-wrapper">
                          <span className="lock-icon">
                            <Image
                              src={lock}
                              alt="lock"
                              width={24}
                              height={24}
                            />
                          </span>
                          <span className="lock-open">Open</span>
                        </div>
                      </Container.Right>
                    </Container.Item>
                  </Link>
                );
              })}
            </Container>
          </TabPanel>
          {/* <TabPanel value={"2"}>Item Two</TabPanel> */}
        </TabContext>
      </Box>
    </Wrapper>
  );
};

export default Katas;
