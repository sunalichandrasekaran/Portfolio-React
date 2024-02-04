import React from "react";

//import motion framer
import { motion } from "framer-motion";

//global style
import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  BlueText,
  IconContainer,
} from "../styles/Global.styled";

//project details
import { projectdetails } from "../utils/Data";

//layout
import Project from "../components/layout/Project";

//variants
import { fadeInTopVariant } from "../utils/Variants";

const MyProjects = () => {
  return (
    <>
      <PaddingContainer
        id="Projects"
        top="5%"
        bottom="5%"
        responsiveTop="20%"
        responsiveLeft="1rem"
        responsiveRight="1rem"
      >
        <Heading
          as={motion.h2}
          variants={fadeInTopVariant}
          initial="hidden"
          whileInView="visible"
          size="h2"
        >
          MY <BlueText>PROJECTS</BlueText>
        </Heading>

        {projectdetails.map((proj) => {
          return (
            <PaddingContainer key={proj.id} top="5rem" bottom="5rem">
              <Project data={proj} />
            </PaddingContainer>
          );
        })}
      </PaddingContainer>
    </>
  );
};

export default MyProjects;
