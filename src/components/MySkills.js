import React from "react";
//import motion from framer motion
import { motion } from "framer-motion";
import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  BlueText,
  IconContainer,
} from "../styles/Global.styled";

// my skills style
import { SkillsCardContainer, SkillsCard } from "../styles/MySkills.styled";

//data
import { Skills } from "../utils/Data";

//import from variant
import { fadeInRightVariant, fadeInLeftVariant } from "../utils/Variants";

const MySkills = () => {
  return (
    <PaddingContainer
      id="Skills"
      top="10%"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
    >
      <FlexContainer
        responsiveFlex
        responsiveDirection="column-reverse"
        fullWidthChild
      >
        {/* {left section} */}
        <SkillsCardContainer
          as={motion.div}
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
          {Skills.map((skill) => {
            return (
              <SkillsCard>
                <IconContainer size="4rem" color="blue">
                  {skill.icon}
                </IconContainer>

                <Heading as="h4" size="h4">
                  {skill.tech}
                </Heading>
              </SkillsCard>
            );
          })}
        </SkillsCardContainer>
        {/* {right section} */}
        <motion.div
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
        >
          <Heading as="h2" size="h2">
            MY <BlueText>SKILLS</BlueText>
          </Heading>
          <ParaText top="1rem" bottom="1rem">
            I discovered my love for crafting seamless and interactive user
            experiences. I immersed myself in learning the latest front-end
            technologies and frameworks, including HTML, CSS, JavaScript, and
            React.Proficient in HTML5, CSS3, and JavaScript and also have
            hands-on experience with React for building modern and responsive
            user interfaces. Strong understanding of web accessibility and best
            practices. Familiarity with version control systems like Git.
          </ParaText>
          <ParaText top="2rem" bottom="2rem">
            My technical skills but also honed my ability to solve problems and
            think creatively. Enthusiastic learner with a passion for staying
            updated on the latest industry trends.
          </ParaText>
        </motion.div>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default MySkills;
