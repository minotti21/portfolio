import {
  HeartIcon,
  Info,
  MediaText,
  SocialMediaContainer,
  StyledFooter,
  StyledText,
} from "./styles";

import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { FaFileDownload } from "react-icons/fa";
import { Slide, Zoom } from "react-awesome-reveal";

export default function Footer() {
  return (
    <StyledFooter>
      <Info>
        <div>
          <Zoom triggerOnce fraction={0.5} damping={0.2} cascade>
            <SocialMediaContainer
              target="_blank"
              rel="noopener"
              href="https://wa.me/5516982255305"
            >
              <FaWhatsapp size={36} />
              <MediaText>+55 (16) 98225-5305</MediaText>
            </SocialMediaContainer>
            <SocialMediaContainer
              target="_blank"
              rel="noopener"
              href="https://www.instagram.com/_minotti2/"
            >
              <FaInstagram size={36} />
              <MediaText>@_minotti2</MediaText>
            </SocialMediaContainer>
            <SocialMediaContainer
              target="_blank"
              rel="noopener"
              href="https://www.linkedin.com/in/viniciusminotti/"
            >
              <FaLinkedin size={36} />
              <MediaText>Vinicius Minotti</MediaText>
            </SocialMediaContainer>
          </Zoom>
        </div>
        <div>
          <Zoom triggerOnce fraction={0.5} damping={0.2} cascade>
            <SocialMediaContainer
              target="_blank"
              rel="noopener"
              href="https://github.com/minotti21"
            >
              <FaGithub size={36} />
              <MediaText>minotti21</MediaText>
            </SocialMediaContainer>
            <SocialMediaContainer
              target="_blank"
              rel="noopener"
              href="mailto:vinicius.minotti21@gmail.com"
            >
              <LuMail size={36} />
              <MediaText>vinicius.minotti21@gmail.com</MediaText>
            </SocialMediaContainer>
            <SocialMediaContainer
              target="_blank"
              rel="noopener"
              href="/curriculo-vinicius.pdf"
              download
            >
              <FaFileDownload size={36} />
              <MediaText>Baixar currículo</MediaText>
            </SocialMediaContainer>
          </Zoom>
        </div>
      </Info>

      <Slide triggerOnce direction="up">
        <StyledText>
          Desenvolvido com <HeartIcon size={24} /> por Vinicius Minotti
        </StyledText>
      </Slide>
    </StyledFooter>
  );
}
