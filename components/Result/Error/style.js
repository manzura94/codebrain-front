import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border: ${({ status }) =>
    status ? "2px solid #c05c48" : "2px solid green"};
  color: ${({ status }) => (status  ? "#c05c48" : "#fff")};
  padding: 20px;
  height: 670px;
  border-radius: 10px;
  overflow-y: auto;
  overflow-x: auto;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #c05c48;
    border-radius: 5px;
  }
`;

Wrapper.Header = styled.div`
  display: flex;
  gap: 30px;
  font-size: 13px;
  padding-bottom: 10px;
  border-bottom: 1px solid #fff3;

`;

Wrapper.Body = styled.div`
  padding: 15px 0;
  font-size: 13px;
`;

const Data = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 15px;
  font-size: 14px;
  color: ${({ status }) => (status ? "green" : "#c05c48")};
`;

const Span = styled.div`
  color: ${({ status }) => (status && "#c05c48")};

`

const Test = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

Test.Icon = styled.div`
  width: 17px;
  height: 17px;
`;

Test.Text = styled.div`
  color: inherit;
`;

const Failed = styled.div`
  color: inherit;
`;

const Passed = styled.div`
  color: ${({ status }) => (status  ? "green" : "inherit")};

`

export { Wrapper, Failed, Test, Data, Span, Passed };
