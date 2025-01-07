import { Box, Flex, Image, Link } from "@chakra-ui/react";
import { HiMenuAlt2 } from "react-icons/hi";
import blackLogo from "../assets/blackLogo.svg";

// import React from "react";

function Header() {
  return (
    <>
      <Box>
        <Flex dir="row" w={{ sm: "100%" }}>
          <Box>
            <Link href="/">
            <Image height="100px" src={blackLogo} />
            </Link>
            
          </Box>

        
          <HiMenuAlt2 />
         
        </Flex>
      </Box>
    </>
  );
}

export default Header;
