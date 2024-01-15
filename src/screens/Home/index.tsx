"use client";

import InitialModal from "@/components/InitialModal";
import SectionContainer from "@/components/Section";
import { NameContext } from "@/context/NameContext";
import { useContext } from "react";
import {
  HomeContainer,
  StyledItemList,
  StyledList,
  StyledName,
  StyledText,
  StyledTitle,
  TextContainer,
  TitleContainer,
} from "./styles";
import Button from "@/components/Button";

export default function Home() {
  const { name } = useContext(NameContext);

  return (
    <SectionContainer>
      <HomeContainer>
        <TextContainer>
          <TitleContainer>
            <StyledTitle>
              Olá <StyledName>{name}</StyledName>!
            </StyledTitle>
            <StyledTitle>Seja muito bem-vindo(a)</StyledTitle>
            <StyledTitle>ao meu portfólio! 😄</StyledTitle>
          </TitleContainer>
          <StyledText>Aqui você vai encontrar:</StyledText>
          <StyledList>
            <StyledItemList>Um pouco sobre mim</StyledItemList>
            <StyledItemList>Hobbies e tecnologias</StyledItemList>
            <StyledItemList>Alguns projetos</StyledItemList>
            <StyledItemList>Formas de me contatar</StyledItemList>
          </StyledList>
          <Button text="Conhecer" />
        </TextContainer>
      </HomeContainer>
    </SectionContainer>
  );
}
