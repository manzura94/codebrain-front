import React from "react";
import { WarningIcon } from "../../icons";
import { Wrapper, Failed, Test, Data } from "./style";


const Error = ({ jsonData }) => {
  const data = JSON.parse(jsonData.report);
  
  return (
    <Wrapper  status={jsonData.failed}>
      <Wrapper.Header>
        <span>Time: {jsonData.executionTime}ms</span>
        <span>Passed: {jsonData.passed}</span>
        <Failed>Failed: {jsonData.failed}</Failed>
      </Wrapper.Header>
      <Wrapper.Body>
        <Test>
          <Test.Icon>
            <WarningIcon/>
          </Test.Icon >
          <Test.Text>Test results:</Test.Text>
        </Test>
        {data.map((item, index) => {
          return (
            <Data key={index} status={item.result}>
              {item?.actual ? (
                <span>actual: {item?.actual},</span>
              ) : (
                <span>result: {item?.result.toString()},</span>
              )}
              <span>expected: {item?.expected}</span>
            </Data>
          );
        })}
      </Wrapper.Body>
    </Wrapper>
  );
};

export default Error;
