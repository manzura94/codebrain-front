import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Page } from "../../layout";
import { Wrapper, Button, ButtonWrap } from "./style";

const LibraryItem = ({ children }) => {
  const router = useRouter();
  const { id, title, instructions, code, difficulty } = router.query;

  return (
    <Page>
      <Wrapper>
        <Wrapper.Left>
          <ButtonWrap>
            <Button>Instructions</Button>
            <Button>Output</Button>
          </ButtonWrap>
          {children}
        </Wrapper.Left>
        <Wrapper.Right></Wrapper.Right>
      </Wrapper>
    </Page>
  );
};

export default LibraryItem;
