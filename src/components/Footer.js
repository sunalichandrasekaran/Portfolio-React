import React from "react";

//import framer motion
import { motion } from "framer-motion";

import { IoMdMail, IoLocationOutline } from "react-icons/io";
import { BsGithub, BsLinkedin, BsFillTelephoneFill } from "react-icons/bs";

//golbal style
import {
  PaddingContainer,
  FlexContainer,
  Heading,
  BlueText,
  Button,
  ParaText,
  IconContainer,
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
      <PaddingContainer id="Contact" top="5%" bottom="15%">
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
        <PaddingContainer top="4rem">
          <FlexContainer justify="center" gap="25px">
            <PaddingContainer>
              <a href="mailto:sunalichandrasekaran06@gmail.com">
                <Button padding="1.5rem 3rem">
                  <IconContainer size="1.5rem">
                    <h4>
                      <IoMdMail />: sunalichandrasekaran06@gmail.com
                    </h4>
                  </IconContainer>
                </Button>
              </a>
            </PaddingContainer>

            <PaddingContainer>
              <a
                href="https://www.linkedin.com/in/sunalichandrasekaran-ac/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button padding="1rem 3rem">
                  <ParaText as="h2" size="h2">
                    LinkedIn : <BsLinkedin />
                  </ParaText>
                </Button>
              </a>
            </PaddingContainer>

            <PaddingContainer>
              <a
                href="https://github.com/sunalichandrasekaran"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button padding="1rem 3rem">
                  <ParaText as="h2" size="h2">
                    GitHub : <BsGithub />
                  </ParaText>
                </Button>
              </a>
            </PaddingContainer>

            <PaddingContainer>
              <a href="tel:+918610844080">
                <Button padding="1rem 3rem">
                  <ParaText as="h2" size="h2">
                    <BsFillTelephoneFill /> : 8610844080
                  </ParaText>
                </Button>
              </a>
            </PaddingContainer>
          </FlexContainer>
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

// <FlexContainer
//           gap="180px"
//           bottom="5rem"
//           justify="center"
//           align="center"
//           direction="row"
//         >
//           <ParaText>
//             Email :
//             <a href="mailto:sunalichandrasekaran06@gmail.com">
//               <Button>
//                 <IoMdMail />
//               </Button>
//             </a>
//           </ParaText>

//           <ParaText margin-right="10px">
//             LinkedIn :
//             <a
//               href="https://www.linkedin.com/in/sunalichandrasekaran-ac/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Button>
//                 <BsLinkedin />
//               </Button>
//             </a>
//           </ParaText>
//           <Button>contact</Button>
//           <Button>location</Button>
//         </FlexContainer>
