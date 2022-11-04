import React from "react";
import { saveAs } from "file-saver";
import { Box, Button, HStack, Image, Spacer, Text } from "@chakra-ui/react";
import Head from "next/head";
import useMediaQuery from "../hooks/useMediaQuery";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Brochures = () => {
  const smallscreen = useMediaQuery("(max-width: 1080px)");
  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/1GLoxTRBnIccvYYwmhehjrd16Qj0Ye4vC/view?usp=sharing"
    );
  };
  return (
    <>
      <Head>
        <title>Reach Intern Images</title>
        <meta name="description" content="Reach Tech Intern Images" />
      </Head>
      <Box
        width={"100%"}
        minH={"100vh"}
        backgroundColor={"#ffffff"}
        overflowX={"hidden"}
      >
        <Navbar smallscreen={smallscreen} />
        <hr />
        <br />
        <br />
        <br />
        <Box
          textAlign={"center"}
          marginRight={smallscreen ? "1rem" : "5rem"}
          marginLeft={smallscreen ? "1rem" : "5rem"}
        >
          <Text
            fontSize={smallscreen ? "2rem" : "3.5rem"}
            fontWeight={"extrabold"}
          >
            Brochure
          </Text>
          <br/>
          <br/>
          <HStack>
          <Spacer/>
          <Image width="23rem" height="30rem" src="brochure.png" alt="brochure_thumbnail"/>
          <Spacer/>
          </HStack>
            <br/>
          <Button height={smallscreen?"2rem":"3rem"} backgroundColor={"blue.300"} onClick={saveFile}>View</Button>
          &nbsp;
          <Button height={smallscreen?"2rem":"3rem"} backgroundColor={"red.300"} onClick={saveFile}>Download</Button>
        </Box>
        <br />
        <br />
        <br />
        <hr />
        <br />
        <br />
        <br />
        <Footer smallscreen={smallscreen} />
        <br />
        <br />
        <br />
      </Box>
    </>
  );
};

export default Brochures;
