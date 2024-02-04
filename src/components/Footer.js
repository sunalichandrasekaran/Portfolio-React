import React from "react";

//import framer motion
import { motion } from "framer-motion";

//golbal style
import {
  PaddingContainer,
  FlexContainer,
  Heading,
  BlueText,
  Button,
} from "../../src/styles/Global.styled";

//footer style
import {
  ContactCard,
  ContactForm,
  FormInput,
  FormLabel,
} from "../styles/Footer.styled";

//variants
import { fadeInBottomVariant } from "../utils/Variants";

const Footer = () => {
  return (
    <>
      <PaddingContainer id="Contact" top="5%" bottom="10%">
        <Heading
          as={motion.h4}
          variants={fadeInBottomVariant}
          initial="hidden"
          whileInView="visible"
          size="h4"
          align="center"
        >
          MY CONTACT
        </Heading>

        <Heading
          as={motion.h2}
          variants={fadeInBottomVariant}
          initial="hidden"
          whileInView="visible"
          size="h2"
          align="center"
          top="0.5rem"
        >
          Contact <BlueText>Me Here</BlueText>
        </Heading>
        <PaddingContainer>
          <ContactCard></ContactCard>
          <ContactCard></ContactCard>
          <ContactCard></ContactCard>
        </PaddingContainer>

        {/* <PaddingContainer top="3rem">
          <FlexContainer justify="center">
            <ContactForm
              as={motion.form}
              variants={fadeInBottomVariant}
              initial="hidden"
              whileInView="visible"
            >
              <PaddingContainer bottom="2rem">
                <FormLabel>Name:</FormLabel>
                <FormInput
                  type="text"
                  placeholder="Enter your name"
                ></FormInput>
              </PaddingContainer>

              <PaddingContainer bottom="2rem">
                <FormLabel>Email:</FormLabel>
                <FormInput
                  type="text"
                  placeholder="Enter your email"
                ></FormInput>
              </PaddingContainer>

              <PaddingContainer bottom="2rem">
                <FormLabel>Message:</FormLabel>
                <FormInput
                  as="textarea"
                  placeholder="Enter your message"
                ></FormInput>
              </PaddingContainer>

              <FlexContainer justify="center" responsiveFlex>
                <Button>Send Message</Button>
              </FlexContainer>
            </ContactForm>
          </FlexContainer>
        </PaddingContainer> */}
      </PaddingContainer>
    </>
  );
};

export default Footer;
