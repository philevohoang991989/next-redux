"use client";
import "@/styles/globals.css";
import "antd/dist/reset.css";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { AppPropsWithLayout } from "@/models";
import { createEmotionCache } from "@/utils";
import { ConfigProvider, Spin } from "antd";
import { SWRConfig } from "swr";
import React, { useEffect, useState } from "react";
import { EmptyLayout } from "@/components/layout/empty";
import { CacheProvider } from "@emotion/react";
import axiosClient from "@/api-client/axios-client";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") {
    return <Spin />;
  } else {
    return (
      <Provider store={store}>
        <CacheProvider value={emotionCache}>
          <SWRConfig
            value={{
              fetcher: (url) => axiosClient.get(url),
              shouldRetryOnError: false,
            }}
          >
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#009fff",
                },
              }}
            >
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ConfigProvider>
          </SWRConfig>
        </CacheProvider>
      </Provider>
    );
  }
}
