import { Suspense } from "react";
import Loading from "../loading";
import { NextUiProviderCustom } from "../clientui/NextUiProviderCustom";
import { Home } from "./Home";

export default function Page() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <NextUiProviderCustom>
          <Home />
        </NextUiProviderCustom>
      </Suspense>
    </>
  );
}
