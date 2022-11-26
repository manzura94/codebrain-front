import Head from "next/head";
import HeaderPage from "../Header";
import SideBar from "../SideBar";
import {Wrapper} from "./style"

const Page = ({ children }) => {
  return (
    <div className="wrapper">
      <Head>
        <title>CodeBrain</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="./ico/logo.svg" /> */}
      </Head>
      <HeaderPage />
      <Wrapper>
        <SideBar />
        <main className="page container">{children}</main>
      </Wrapper>
    </div>
  );
};

export default Page;
