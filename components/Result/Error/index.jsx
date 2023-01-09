import React from "react";
import { WarningIcon } from "../../icons";
import { Wrapper, Failed, Test, Data, Span, Passed } from "./style";

const Error = ({ jsonData }) => {

  let passData = []
  jsonData?.data?.stderr === null  && ( passData = jsonData.data.report)



  return (
    <Wrapper status={passData?.at(-1)?.failed || jsonData.data.stderr}>
      <Wrapper.Header>
        <span>Time: {jsonData.data.executionTime}ms</span>
        <Passed status={passData?.at(-1)?.passed}>Passed: {passData.at(-1).passed}</Passed>
        <Failed>Failed: {passData?.at(-1)?.failed}</Failed>
      </Wrapper.Header>
      <Wrapper.Body>
        <Test>
          <Test.Icon>
            <WarningIcon />
          </Test.Icon>
          <Test.Text>Test results:</Test.Text>
        </Test>
        {passData.length !== 0 ? (
          passData.slice(0,-1).map((item, index) => {
            return (
              <Data key={index} status={item.result}>
                {item?.actual ? (
                  <span>actual: {item?.actual},</span>
                ) : (
                  <span>result: {item?.result?.toString()},</span>
                )}
                <span>expected: {item?.expected}</span>
                {item?.console && <div>console log: {item?.console}</div>}
              </Data>
            );
          })
        ) : (
          <Span status={jsonData?.data?.stderr}>
            {jsonData?.data?.stderr}
          </Span>
        )}
      </Wrapper.Body>
    </Wrapper>
  );
};

export default Error;
