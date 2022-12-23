import React from "react";
import { WarningIcon } from "../../icons";
import { Wrapper, Failed, Test, Data, Span, Passed } from "./style";

const Error = ({ jsonData }) => {
  console.log(jsonData, 'json');
  let data = []
  jsonData?.stderr === null  && ( data = JSON.parse(jsonData.report))
  console.log(data, 'dddd');

  return (
    <Wrapper status={jsonData.failed || jsonData.stderr}>
      <Wrapper.Header>
        <span>Time: {jsonData.executionTime}ms</span>
        <Passed status={jsonData.passed}>Passed: {jsonData.passed}</Passed>
        <Failed>Failed: {jsonData.failed}</Failed>
      </Wrapper.Header>
      <Wrapper.Body>
        <Test>
          <Test.Icon>
            <WarningIcon />
          </Test.Icon>
          <Test.Text>Test results:</Test.Text>
        </Test>
        {data.length !== 0 ? (
          data.map((item, index) => {
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
          })
        ) : (
          <Span status={jsonData?.stderr}>
            {
              "Index:7\n  if (typeof actual !== typeof expected) { throw new Error(`Expected ${typeof expected}, but got ${typeof actual}`)};\n                                           ^\n\nError: Expected number, but got undefined\n    at TestC.assertEquals (index:7:50)\n    at Object.<anonymous> (/runtime/nodejs/3ys9ecptv_3ysqahgut/index:45:6)\n    at Module._compile (node:internal/modules/cjs/loader:1103:14)\n    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1157:10)\n    at Module.load (node:internal/modules/cjs/loader:981:32)\n    at Function.Module._load (node:internal/modules/cjs/loader:822:12)\n    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)\n    at node:internal/main/run_main_module:17:47\n"
            }
          </Span>
        )}
      </Wrapper.Body>
    </Wrapper>
  );
};

export default Error;
