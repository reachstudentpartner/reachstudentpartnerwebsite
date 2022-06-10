import { Box, Image, Spacer, Stack, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useMediaQuery from "../hooks/useMediaQuery";

const Images = () => {
  const smallscreen = useMediaQuery("(max-width: 1080px)");
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
            Images
          </Text>
          <br />
          <br />
          <VStack>
            <Stack direction={["column", "row"]}>
              <Image
                width="30rem"
                height="30rem"
                src="Food Of thought.png"
                alt="food for thought"
              />
              <Spacer />
              <Spacer />
              <Spacer />
              <Spacer />
              <Spacer />
              <Spacer />
              <Spacer />
              <Spacer />
              <Spacer />
              <Spacer />
              <Spacer />
              <Spacer />
              <Spacer />
              <Spacer />
              <Image
                width="30rem"
                height="30rem"
                src="Motivation.png"
                alt="motivation"
              ></Image>
              <Spacer />
              <Spacer />
              <Spacer />
              <Spacer />
              <Spacer />
              <Spacer />
              <Spacer />
              <Spacer />
              <Spacer />
              <Spacer />
              <Spacer />
              <Spacer />
              <Spacer />
              <Spacer />
              <Image
                width="30rem"
                height="30rem"
                src="Puzzle.png"
                alt="puzzle"
              ></Image>
            </Stack>
            {/* <Stack alignItems={"left"} direction={["column", "row"]}>
          <Image width={smallscreen?"100%":"40%"} src="https://reach-tech.com/reach_tech_assets/images/reach_technologies/2019-02-26-20-11-24-792__01.jpg" alt="intern image"></Image>
          </Stack> */}
          </VStack>
          <br />
          <br />
          <br />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <br />
        </Box>
        <Footer smallscreen={smallscreen} />
      </Box>
    </>
  );
};

export default Images;
