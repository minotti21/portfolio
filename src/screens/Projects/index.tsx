"use client";

import SectionContainer from "@/components/Section";
import { ProjectsContainer, ProjectsFlex, StyledText } from "./styles";
import SnakeGame from "@/components/SnakeGame";
import Paint from "@/components/Paint";
import QuoteOfTheday from "@/components/QuoteOfTheDay";
import Title from "@/components/Title";
import { useContext } from "react";
import { IsMobileContext } from "@/context/IsMobileContext";
import { JackInTheBox, Roll, Rotate, Zoom } from "react-awesome-reveal";

export default function Projects() {
  const { isMobile } = useContext(IsMobileContext);

  return (
    <SectionContainer id="projects">
      <ProjectsContainer>
        <Zoom triggerOnce fraction={0.5}>
          <Title style={{ marginBottom: "0.4em" }}>Projetos</Title>

          {isMobile ? (
            <StyledText>
              Não é possível visualizar todos os projetos em um dispositivo
              móvel, sugiro que você veja depois em um computador 😆
            </StyledText>
          ) : (
            <StyledText>
              Codei alguns projetos interativos, você não vai precisar sair do
              site pra ver 🤙
            </StyledText>
          )}
        </Zoom>
        <ProjectsFlex>
          {!isMobile && (
            <Roll triggerOnce fraction={0.5}>
              <SnakeGame />{" "}
            </Roll>
          )}

          {!isMobile && (
            <Rotate triggerOnce fraction={0.5}>
              <Paint />
            </Rotate>
          )}

          <JackInTheBox triggerOnce fraction={0.5}>
            <QuoteOfTheday />
          </JackInTheBox>
        </ProjectsFlex>
      </ProjectsContainer>
    </SectionContainer>
  );
}
