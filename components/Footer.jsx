import { Box, Button, HStack, Link, Spacer, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = (props) => {
    const smallscreen = props.smallscreen;
  return <Box>
       <Stack color={"grey.500"} direction={['column', 'row']} >
       <Spacer/>
        <VStack>
          <Link href="/aboutus"><Button  fontSize={smallscreen?"1rem":"1.5rem"} variant={"link"}>About Us</Button></Link> 
          <Button  fontSize={smallscreen?"1rem":"1.5rem"} variant={"link"}>Hear RSPs</Button>
          <Button  fontSize={smallscreen?"1rem":"1.5rem"} variant={"link"}>Gallery</Button>
          <Button  fontSize={smallscreen?"1rem":"1.5rem"} variant={"link"}>FAQs</Button>
          <Button  fontSize={smallscreen?"1rem":"1.5rem"} variant={"link"}>Refer a friend</Button>
        </VStack>
        <Spacer/>
        <br/>
        <br/>
        <VStack>
          <Link href="/brochures"><Button  fontSize={smallscreen?"1rem":"1.5rem"} variant={"link"}>Brochures</Button></Link>
          <Button  fontSize={smallscreen?"1rem":"1.5rem"} variant={"link"}>Presentations</Button>
          <Link href="/images"><Button  fontSize={smallscreen?"1rem":"1.5rem"} variant={"link"}>Images</Button></Link>
          <Button  fontSize={smallscreen?"1rem":"1.5rem"} variant={"link"}>Newsletter</Button>
        </VStack>
        <Spacer/>
        <br/>
        <br/>
        <VStack>
          <Button  fontSize={smallscreen?"1rem":"1.5rem"} variant={"link"}>Featured RSPs</Button>
          {/* <Button  fontSize={smallscreen?"1rem":"1.5rem"} variant={"link"}>Featured Mentors</Button> */}
          <Button  fontSize={smallscreen?"1rem":"1.5rem"} variant={"link"}>Featured Events</Button>
          {/* <Button  fontSize={smallscreen?"1rem":"1.5rem"} variant={"link"}>Featured Institutions</Button> */}
        </VStack>
        <Spacer/>
        <br/>
        <br/>
        {/* <VStack>
          <Button  fontSize={smallscreen?"1rem":"1.5rem"} variant={"link"}>Build your CV</Button>
          <Button  fontSize={smallscreen?"1rem":"1.5rem"} variant={"link"}>Improve Communication Skills</Button>
          <Button  fontSize={smallscreen?"1rem":"1.5rem"} variant={"link"}>Learn a language</Button>
          <Button  fontSize={smallscreen?"1rem":"1.5rem"} variant={"link"}>Get help from peers</Button>
        </VStack>
        <Spacer/> */}
        <br/>
        <br/>
      </Stack>
  </Box>;
};

export default Footer;
