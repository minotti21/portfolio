import NameProvider from "@/context/NameContext";
import StyledComponentsRegistry from "@/lib/registry";
import dynamic from "next/dynamic";
import { Poppins } from "next/font/google";
import AppContainer from "../components/AppContainer";
import SkeletonLoading from "@/components/SkeletonLoading";
import WindowHeightProvider from "@/context/WindowHeightContext";
import ScrollbarProvider from "@/context/ScrollbarContext";
import IsMobileProvider from "@/context/IsMobileContext";
import { Metadata } from "next";

const DynamicUserThemeProvider = dynamic(
  () => import("../context/UserThemeContext"),
  { ssr: false, loading: () => <SkeletonLoading /> },
);

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "auto",
});

export const metadata: Metadata = {
  title: "minotti.dev",
  description: "Portfólio de Vinicius Minotti",
  applicationName: "portfolio-front",
  viewport: "width=device-width, initial-scale=1",
  keywords:
    "vinicius minotti, desenvolvimento web, desenvolvedor full-stack, next.js, node.js, react, styled-components, javascript, mongodb",
  category: "Portfólio Desenvolvedor Full-stack",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body style={{ overflowX: "hidden" }} className={poppins.className}>
        <StyledComponentsRegistry>
          <DynamicUserThemeProvider>
            <NameProvider>
              <WindowHeightProvider>
                <IsMobileProvider>
                  <ScrollbarProvider>
                    <AppContainer>{children}</AppContainer>
                  </ScrollbarProvider>
                </IsMobileProvider>
              </WindowHeightProvider>
            </NameProvider>
          </DynamicUserThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
