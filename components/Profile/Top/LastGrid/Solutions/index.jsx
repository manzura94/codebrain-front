import React from "react";
import { useLoad } from "../../../../../hooks/request";
import { submission } from "../../../../../utils/urls";
import CodeWrap from "./CodeWrap";
import { Wrapper } from "./style";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import Link from "next/link";


const BasicSetupOptions = {
  lineNumbers: false,
  foldGutter: false,
};

const Solutions = () => {
  const getSolvedKatas = useLoad({ url: submission });
  const passCodes = getSolvedKatas?.response?.filter(
    (item) => item.status === "solved"
  );

  return (
    <Wrapper>
        {passCodes?.map((item) => (
      <CodeWrap  key={item.id} headerTitle={<Link href={`/library/${item.id}`}>{item.kata.title}</Link>} level={item.kata.difficulty}>
          <CodeMirror
            value={item.passedCode}
            extensions={[javascript({ jsx: true })]}
            editable={false}
            theme='dark'
            readOnly={true}
            basicSetup={BasicSetupOptions}
          />
      </CodeWrap>
        ))}
    </Wrapper>
  );
};

export default Solutions;
