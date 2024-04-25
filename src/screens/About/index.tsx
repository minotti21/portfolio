"use client";

import SectionContainer from "@/components/Section";
import {
  AboutContainer,
  FlexContainer,
  IconsContainer,
  ResponsiveImage,
  StyledImage,
  StyledSkillsText,
  StyledText,
  TextAndImageContainer,
  TextContainer,
} from "./styles";
import Image from "next/image";
import Title from "@/components/Title";
import { useContext } from "react";
import { IsMobileContext } from "@/context/IsMobileContext";
import { JackInTheBox, Slide, Zoom } from "react-awesome-reveal";

export default function About() {
  const { isMobile } = useContext(IsMobileContext);

  return (
    <SectionContainer id="about">
      <AboutContainer>
        <JackInTheBox fraction={1} triggerOnce>
          <Title style={{ marginBottom: "0.4em" }}>Sobre mim</Title>
        </JackInTheBox>

        <FlexContainer>
          <TextAndImageContainer>
            <TextContainer>
              <Slide fraction={0.5} triggerOnce cascade damping={0.1}>
                <StyledText>
                  Entrei na empresa Lupo S/A aos 18 anos para trabalhar como
                  menor aprendiz de auxiliar administrativo! Fui efetivado após
                  seis meses e segui desenvolvendo minhas habilidades, então, a
                  pandemia chegou com tudo.
                </StyledText>
                <StyledSkillsText>
                  Soft Skills: Pensamento crítico; resolução de problemas;
                  atendimento aos lojistas e representantes
                </StyledSkillsText>
                <StyledSkillsText>
                  Hard Skills: SAP; Excel; Word
                </StyledSkillsText>
              </Slide>
            </TextContainer>

            <Slide fraction={0.5} triggerOnce direction="right">
              <StyledImage>
                <ResponsiveImage
                  src="/office.webp"
                  alt="escritório"
                  width={600}
                  height={337.5}
                  style={{ borderRadius: 12 }}
                />
                {!isMobile && (
                  <IconsContainer>
                    <Image src="/sap.svg" width={50} height={50} alt="icon" />
                    <Image src="/excel.svg" width={50} height={50} alt="icon" />
                    <Image src="/word.svg" width={50} height={50} alt="icon" />
                  </IconsContainer>
                )}
              </StyledImage>
            </Slide>
          </TextAndImageContainer>

          <TextAndImageContainer
            style={{ flexDirection: isMobile ? "column-reverse" : "row" }}
          >
            <Slide fraction={0.5} triggerOnce>
              <StyledImage>
                <ResponsiveImage
                  src="/league-of-legends.webp"
                  alt="escritório"
                  width={600}
                  height={337.5}
                  style={{ borderRadius: 12 }}
                />
              </StyledImage>
            </Slide>

            <TextContainer>
              <Slide fraction={0.5} direction="right" triggerOnce cascade damping={0.1}>
                <StyledText>
                  Depois de algum tempo em casa jogando, alcancei uma das
                  posições mais altas no jogo League of Legends e optei por
                  investir meu tempo em me tornar um jogador profissional. Mas
                  não aconteceu como eu esperava...
                </StyledText>
                <StyledSkillsText>
                  Soft Skills: Comunicação assertiva; tomada rápida de decisão
                </StyledSkillsText>
                <StyledSkillsText>
                  Hard Skills: Gestão de recursos; agilidade ao teclar
                </StyledSkillsText>
              </Slide>
            </TextContainer>
          </TextAndImageContainer>

          <TextAndImageContainer>
            <TextContainer>
              <Slide fraction={0.5} triggerOnce cascade damping={0.1}>
                <StyledText>
                  Após um ano tentando, decidi seguir outro caminho. A
                  programação sempre esteve comigo, apenas não havia enxergado.
                  Logo comecei a me dedicar aos estudos, tive um grande apoio de
                  amigos que já eram da área.
                </StyledText>
                <StyledSkillsText>
                  Soft Skills: Criatividade, adaptabilidade e melhoria nas
                  skills anteriores
                </StyledSkillsText>
                <StyledSkillsText>
                  Hard Skills: Você vai ver já 😄
                </StyledSkillsText>
              </Slide>

            </TextContainer>
            <Slide fraction={0.5} triggerOnce direction="right">
              <StyledImage>
                <ResponsiveImage
                  src="/programming.webp"
                  alt="escritório"
                  width={600}
                  height={337.5}
                  style={{ borderRadius: 12 }}
                />
                {!isMobile && (
                  <IconsContainer>
                    <Image src="/pc.svg" width={50} height={50} alt="icon" />
                    <Image
                      src="/monitor.svg"
                      width={50}
                      height={50}
                      alt="icon"
                    />
                    <Image
                      src="/server.svg"
                      width={50}
                      height={50}
                      alt="icon"
                    />
                  </IconsContainer>
                )}
              </StyledImage>
            </Slide>
          </TextAndImageContainer>
        </FlexContainer>
      </AboutContainer>
    </SectionContainer>
  );
}
