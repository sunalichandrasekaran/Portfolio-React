import React, { useState, useEffect } from "react";

//animation
import { AnimatePresence } from "framer-motion";

//global style
import {
  FlexContainer,
  PaddingContainer,
  Container,
} from "../styles/Global.styled";

//icons
import { GiHamburgerMenu } from "react-icons/gi";
import { theme } from "../utils/Theme";

//import navbar style
import { NavbarContainer, MenuIcon } from "../styles/Navbar.styled";

//import navMenu page from layout
import NavMenu from "./layout/NavMenu";

const Navbar = () => {
  //usestate for menu
  const [openMenu, setMenu] = useState(false);
  const [Sticky, setSticky] = useState(false);

  //useEffect
  useEffect(() => {
    //onscroll function
    const onScroll = () => {
      window.pageYOffset > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener("scroll", onScroll);
    //cleanup
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <NavbarContainer bgColor={Sticky ? theme.colors.primary : "transparent"}>
        <PaddingContainer
          top="1.2rem"
          bottom="1.2rem"
          responsiveLeft="1rem"
          responsiveRight="1rem"
        >
          <Container>
            <FlexContainer justify="flex-end" responsiveFlex>
              {/* {right sides} */}
              <MenuIcon
                onClick={() => {
                  setMenu(true);
                }}
              >
                <GiHamburgerMenu />
              </MenuIcon>
            </FlexContainer>
          </Container>
          <AnimatePresence>
            {openMenu && <NavMenu setMenu={setMenu} />}
          </AnimatePresence>
        </PaddingContainer>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
