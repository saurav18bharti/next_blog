import Image from "next/image";
import { Header } from "./component/Header";
import { ContentWrapper } from "./component/ContentWrapper";
import { Footer } from "./component/Footer";
import { Home } from "./(page)/Home";
import { Suspense } from "react";
import Loading from "./loading";
import { NextUiProviderCustom } from "./clientui/NextUiProviderCustom";

export default function Page() {
  return (
    <>
   
    <Suspense fallback={<Loading/>}>
    <NextUiProviderCustom>
        <Home />

    </NextUiProviderCustom>

    </Suspense>
 
        
    </>
   
  );
}
