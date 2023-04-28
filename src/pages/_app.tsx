"use client";
import "@/styles/globals.css";
import "antd/dist/reset.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { ConfigProvider } from "antd";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#009fff",
          },
        }}
      >
        <Component {...pageProps} />
      </ConfigProvider>
    </Provider>
  );
}
