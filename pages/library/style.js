import styled from "styled-components";
import { Button } from "@mui/material";

const Wrapper = styled.div`
  display: flex;
  margin-left: 10px;
  padding: 28px;
  height: 100%;
  gap: 20px;
`;

Wrapper.Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  
  .css-1h9z7r5-MuiButtonBase-root-MuiTab-root {
    color: #fff !important;
  }
  
  .css-1mc6bnb {
    margin-bottom: 30px;
  }
  
  .css-13xfq8m-MuiTabPanel-root {
    padding: 20px 0 !important;
  }
  `;

const Bottom = styled.div`
  margin-top: 30px;
  padding: 15px 0;
  display: flex;
  gap: 15px;
`;

const HR = styled.hr`
  display: block;
  height: 1px;
  background-image: linear-gradient(
    to left,
    transparent,
    rgba(255, 255, 255, 0.125) 20%,
    rgba(255, 255, 255, 0.125) 80%,
    transparent
  );
  background-position: center center;
  background-size: 100% 1px;
  border-color: transparent;
`;

Wrapper.Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .dBPzhH .cm-editor {
    /* height: 94%; */
  }

  .css-1e6y48t-MuiButtonBase-root-MuiButton-root {
    width: 10%;
    align-self: flex-end;
  }

`;

const InnerHtml = styled.div`
  color: #fff;
  margin-bottom: 30px;
`;

const Loading = styled.h4`
color: #fff;
`

const ButtonTry = styled(Button)`
  font-size: 16px;
  color: #2f7dff !important;
  background: transparent !important;
  border: 1px solid #2f7dff !important;
  cursor: pointer;
`;

const ButtonSubmit = styled(Button)`
  font-size: 16px;
  background-color: #2f7dff !important;
  color: #fff !important;
  cursor: pointer;
`;

const ButtonWrap = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

Bottom.Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  background: #acacac;
  border-radius: 7px;
  padding: 5px 10px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 45px;
  color: #fff;
  margin-bottom: 30px;
`;

Info.Level = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 7px;
  padding: 6px 10px;
  background: #626575;
  text-transform: capitalize;
`;

Info.Title = styled.div``;

export {
  Wrapper,
  ButtonTry,
  ButtonSubmit,
  InnerHtml,
  Info,
  Bottom,
  HR,
  ButtonWrap,
  Loading
};
