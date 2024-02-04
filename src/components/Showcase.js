import React from "react";
import { motion } from "framer-motion";

//global styles
import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  BlueText,
  IconContainer,
} from "../styles/Global.styled";

//react icons
import { IoMdMail } from "react-icons/io";
import { BsGithub, BsLinkedin } from "react-icons/bs";

//import from varients
import { fadeInLeftVariant } from "../utils/Variants";

const Showcase = () => {
  return (
    <>
      <PaddingContainer
        id="Home"
        left="5%"
        right="10%"
        top="16%"
        bottom="5%"
        gap="20px"
        responsiveLeft="1rem"
        responsiveRight="1rem"
        responsiveTop="8rem"
      >
        <FlexContainer align="start" fullWidthChild>
          {/* {left content} */}
          <motion.div
            variants={fadeInLeftVariant}
            initial="hidden"
            whileInView="visible"
          >
            <Heading as="h4" size="h4">
              Hello!
            </Heading>

            <Heading as="h1" size="h1" top="0.5rem" bottom="1rem">
              I'm <BlueText>Sunali</BlueText>
            </Heading>

            <Heading as="h3" size="h3">
              I'm a <BlueText>Frontend Developer</BlueText>
            </Heading>

            <ParaText as="p" top="2rem" bottom="3rem">
              Hello there! 👋 I'm Sunali, a passionate and aspiring front-end
              developer with a keen eye for creating visually appealing and
              user-friendly websites. As a recent graduate in 2023, I am excited
              to embark on my journey in the dynamic world of web development.
            </ParaText>

            {/* {social icons} */}

            <FlexContainer gap="20px" responsiveFlex>
              {/* mail */}
              <IconContainer color="white" size="1.5rem">
                <IoMdMail />
              </IconContainer>
              {/* linkedin */}
              <IconContainer color="white" size="1.5rem">
                <BsLinkedin />
              </IconContainer>
              {/* //github */}
              <IconContainer color="white" size="1.5rem">
                <BsGithub />
              </IconContainer>
            </FlexContainer>
          </motion.div>
        </FlexContainer>
      </PaddingContainer>
    </>
  );
};

export default Showcase;

// href = "https://www.linkedin.com/in/sunalichandrasekaran-ac/";
//https://github.com/sunalichandrasekaran
// sunalichandrasekaran06@gmail.com
