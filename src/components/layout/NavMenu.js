import React from "react";

//framer motion
import { motion } from "framer-motion";
//global styles
import { FlexContainer, PaddingContainer } from "../../styles/Global.styled";

//icons
import { AiOutlineClose } from "react-icons/ai";

//navbar style
import {
  MenuIcon,
  MenuItem,
  NavMenuContainer,
} from "../../styles/Navbar.styled";

//import navlinks for layout
import { navLinks } from "../../utils/Data";

//variants
import { sliderInLeft } from "../../utils/Variants";

const NavMenu = ({ setMenu }) => {
  return (
    <NavMenuContainer
      as={motion.div}
      variants={sliderInLeft}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* {X --> page close button} */}
      <PaddingContainer left="5%" right="5%" top="2rem">
        <FlexContainer justify="flex-end" responsiveFlex>
          <MenuIcon
            as={motion.a}
            whileHover={{ scale: 1.2 }}
            onClick={() => setMenu(false)}
          >
            <AiOutlineClose />
          </MenuIcon>
        </FlexContainer>
      </PaddingContainer>

      {/* {menu items} */}
      <PaddingContainer top="6%">
        <FlexContainer direction="column" align="center" responsiveFlex>
          {navLinks.map((link) => {
            return (
              <MenuItem
                as={motion.a}
                whileHover={{ scale: 1.2 }}
                key={link.id}
                href={`#${link.href}`}
                onClick={() => {
                  setMenu(false);
                }}
              >
                {link.name}
              </MenuItem>
            );
          })}
        </FlexContainer>
      </PaddingContainer>
    </NavMenuContainer>
  );
};

export default NavMenu;
