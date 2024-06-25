import Image from "next/image";
import { Header } from "./component/Header";
import { NextUiProviderCustom } from "./clientui/NextUiProviderCustom";
import { Home } from "./page/Home";
import { ContentWrapper } from "./component/ContentWrapper";
import { Footer } from "./component/Footer";

export default function Page() {
  return (
    <>
      <ContentWrapper>
        <Header />
        <Home />
      </ContentWrapper>
        <Footer/>
    </>
   
  );
}
