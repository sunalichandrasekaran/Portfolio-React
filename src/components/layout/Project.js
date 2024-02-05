import React from "react";

//framer motion
import { motion } from "framer-motion";

//global style
import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  IconContainer,
  Button,
} from "../../styles/Global.styled";

//icons
import { FaGithub } from "react-icons/fa6";
import {
  ProjectImageContainer,
  ProjectImage,
  TechStackCard,
} from "../../styles/MYprojects.styled";

//variants
import { fadeInLeftVariant, fadeInRightVariant } from "../../utils/Variants";

const Project = ({ data }) => {
  return (
    <FlexContainer
      direction={data.reverse ? "row-reverse" : false}
      gap="300px"
      justify-content="space-between"
    >
      {/* {left section} */}
      <motion.div
        variants={data.reverse ? fadeInRightVariant : fadeInLeftVariant}
        initial="hidden"
        whileInView="visible"
      >
        <FlexContainer align="start" gap="1rem">
          <Heading as="h3" size="h3" bottom="1rem">
            {data.project_name}
          </Heading>
          <IconContainer color="blue" size="2rem">
            <FaGithub />
          </IconContainer>
        </FlexContainer>

        <PaddingContainer top="1rem">
          <FlexContainer gap="1.5rem">
            {data.tech_stack.map((stack) => {
              return (
                <>
                  <TechStackCard>{stack}</TechStackCard>
                </>
              );
            })}
          </FlexContainer>
        </PaddingContainer>

        <ParaText top="1.5rem" bottom="1rem">
          {data.projects_detail}
        </ParaText>
        <a href={data.link}>
          <Button padding="1rem 2rem">View website</Button>
        </a>
      </motion.div>

      {/* {right section} */}
      <ProjectImageContainer
        as={motion.div}
        variants={data.reverse ? fadeInLeftVariant : fadeInRightVariant}
        initial="hidden"
        whileInView="visible"
        justify={data.reverse ? "flex-start" : "flex-end"}
      >
        <ProjectImage src={data.project_img} alt={data.project_name} />
      </ProjectImageContainer>
    </FlexContainer>
  );
};

export default Project;
