import React from "react";
import styled from "styled-components";

function CodeWrap({ children, headerTitle, level }) {
  return (
    <Wrapper>
      <Header>
        <Level>{level}</Level>
        <HeaderTitle>{headerTitle}</HeaderTitle>
      </Header>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  height: 100%;

  .ͼo{
    background: none;
  }

  .ͼ1 .cm-content {
    padding: 15px !important;
  }

  .ͼ1 .cm-scroller {
    background: #00000061;
    border-radius: 20px;
    border-top: none;
  }

  .ͼo .cm-activeLine {
    background: transparent !important;
  }
`;

const Level = styled.span`
  padding: 3px;
  background: #626575;
  color: #fff;
  font-size: 13px;
  border-radius: 3px;
`;

const Header = styled.div`
  padding: 8px;
  background: #202443;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const HeaderTitle = styled.p`
  font-size: 0.875rem !important;
  line-height: 1.25rem !important;
  color: #fff;
  :hover{
    color: #2f7dff;
  }
`;

export default CodeWrap;
