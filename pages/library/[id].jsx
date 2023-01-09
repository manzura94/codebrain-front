import * as React from "react";
import { Page } from "../../layout";
import {
  Wrapper,
  InnerHtml,
  Info,
  Bottom,
  HR,
  ButtonWrap,
  ButtonTry,
  ButtonSubmit,
  ButtonSkip,
  Loading
} from "../../components/Styles/Library/style";
import { usePostRequest } from "../../hooks/request";
import CodeWrap from "../../components/Library/CodeWrap";
import { getKatasUrl, submissionSubmit, submissionTry } from "../../utils/urls";
import { authHost } from "../../utils/https";
import Image from "next/image";
import Error from "../../components/Result/Error";
import Default from "../../components/Result/Default";
import { card, level,next } from "../../assets";
import {
  Box,
  Tab,
  TabContext,
  TabList,
  TabPanel,
  javascript,
  CodeMirror,
  tokyoNight,
} from "../../components/MaterialUI";

const LibraryItem = ({ data: dataArr }) => {

  const [data] = dataArr;
  const [value, setValue] = React.useState("1");
  const [code, setCode] = React.useState(data?.code);
  const [jsonData, setJsonData] = React.useState(null);
  const [resultActive, setResultActive] = React.useState(false);

  const kataPostRequest = usePostRequest();

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const { loading } = kataPostRequest;

  const handleTryBtn = async () => {
    setValue("2");
    const postData = {
      code,
      kataId: data.id,
      language: "nodejs",
    };

    const { success, response } = await kataPostRequest.request({
      url: submissionTry,
      data: postData,
    });

    if (success) {
      if (response.data) {
        console.log("error");
        setJsonData(response);
        setResultActive(true);
      }
    }
  };

  const handleSubmitBtn = async () => {
    setValue("2");
    const postData = {
      code,
      kataId: data.id,
      language: "nodejs",
    };

    const { success, response } = await kataPostRequest.request({
      url: submissionSubmit,
      data: postData,
    });

    if (success) {
      if (response.data) {
        console.log("error");
        setJsonData(response);
        setResultActive(true);
      } 
    }
  };

  const Result = () => {
    if (resultActive) {
      return <Error jsonData={jsonData} />;
    } else {
      return <Default />;
    }
  };

  return (
    <Page>
      <Wrapper>
        <Wrapper.Left>
          <Info>
            <Info.Level>
              <span>
                <Image src={level} alt="level" width={15} height={21} />
              </span>
              <span>{data?.difficulty}</span>
            </Info.Level>
            <Info.Title>{data?.title}</Info.Title>
          </Info>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderColor: "divider" }}>
                <TabList onChange={handleChange}>
                  <Tab label="Instructions" value="1" />
                  <Tab label="Output" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <InnerHtml
                  dangerouslySetInnerHTML={{ __html: data?.instructions }}
                ></InnerHtml>
                <HR />
                <Bottom>
                  {data?.tags?.split(",").map((el, index) => {
                    return (
                      <Bottom.Wrapper key={index}>
                        <span>
                          <Image src={card} alt="card" width={15} height={15} />
                        </span>
                        <span>{el}</span>
                      </Bottom.Wrapper>
                    );
                  })}
                </Bottom>
              </TabPanel>
              <TabPanel value="2">
                {loading ? (
                  <Loading>Loading....</Loading>
                ) : (
                  <InnerHtml>
                    <Result />
                  </InnerHtml>
                )}
              </TabPanel>
            </TabContext>
          </Box>
        </Wrapper.Left>
        <Wrapper.Right>
          <CodeWrap headerTitle="Solutions">
            <CodeMirror
              value={code}
              theme={tokyoNight}
              extensions={[javascript({ jsx: true })]}
              onChange={(e) => setCode(e)}
            />
          </CodeWrap>
          <ButtonWrap>
            <ButtonSkip>
              {/* <span> */}
                <Image src={next} alt='next button' width={19} height={19}/>
              {/* </span> */}
              <span>Skip</span>
            </ButtonSkip>
            <ButtonTry onClick={handleTryBtn}> Try</ButtonTry>
            <ButtonSubmit onClick={handleSubmitBtn}> Submit</ButtonSubmit>
          </ButtonWrap>
        </Wrapper.Right>
      </Wrapper>
    </Page>
  );
};

export default LibraryItem;

export async function getServerSideProps({ query }) {
  const { id } = query;

  const res = await authHost.get(getKatasUrl(id));
  const res2 = await authHost.get("/submission");
  console.log(res2);

  return { props: { data: res.data.data } };
}
