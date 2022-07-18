import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../../styles/Global/global";
import { defaultTheme } from "../../../styles/Theme/theme";
import Footer from "../Footer/footer";
import { LayoutContainer, Wrapper } from "./styles";

interface Children {
  children: React.ReactNode;
}

const Layout: React.FC<Children> = ({ children }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Head>
        <title>Jefté Medeiros</title>
      </Head>
      <LayoutContainer>
        <Wrapper>{children}</Wrapper>
        <Footer />
      </LayoutContainer>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Layout;
