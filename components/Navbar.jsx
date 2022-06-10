import { Box, Button, HStack, Image, Spacer} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

const Navbar = (props) => {
  const smallscreen = props.smallscreen;
  return (
    <HStack
      width={"100%"}
      height={"6rem"}
      backgroundColor={"#ffffff"}
    >
      <Box  width={smallscreen?"0.5rem":"1rem"}/>
      <Box>
      <Link href="/" passHref>
        {/* <Image width="80%" height="80%" src={Logo} alt="logo"/> */}
        <Image width="6rem" height="6rem" src="logo.png" alt="logo"></Image>
        </Link>
      </Box>
      <Spacer/>
      <Button variant="ghost" colorScheme={"blue"}></Button>
      <Link href="/" passHref>
      <Button height={smallscreen?"2rem":"3rem"} backgroundColor={"blue.300"}>Apply Now</Button></Link>
      <Box width={smallscreen? "0.2rem":"1rem"}/>
      <Box  width={smallscreen?"0.5rem":"1rem"}/>
    </HStack>
  );
};

export default Navbar;
