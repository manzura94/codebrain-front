import React from "react";
import { useLoad } from "../../../../../hooks/request";
import { submission } from "../../../../../utils/urls";
import CodeWrap from "./CodeWrap";
import { Wrapper,NullRes } from "./style";
import { CodeMirror, javascript } from "../../../../MaterialUI";
import Link from "next/link";
import Image from "next/image";
import { nullResult } from "../../../../../assets";


const BasicSetupOptions = {
  lineNumbers: false,
  foldGutter: false,
};

const Solutions = () => {
  const getSolvedKatas = useLoad({ url: submission });
  const passCodes = getSolvedKatas?.response?.data?.filter(
    (item) => item.status === "solved"
  );

  return (
    <Wrapper>
      {passCodes ? passCodes?.map((item) => (
        <CodeWrap
          key={item.id}
          headerTitle={
            <Link href={`/library/${item.id}`}>{item.kata.title}</Link>
          }
          level={item.kata.difficulty}
        >
          <CodeMirror
            value={item.passedCode}
            extensions={[javascript({ jsx: true })]}
            editable={false}
            theme="dark"
            readOnly={true}
            basicSetup={BasicSetupOptions}
          />
        </CodeWrap>
      )) : (
        <NullRes>
          <Image src={nullResult} alt='null-result' width={400} height={400}/>
        </NullRes>
      )}
    </Wrapper>
  );
};

export default Solutions;
