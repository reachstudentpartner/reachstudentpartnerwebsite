import { Box, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useMediaQuery from "../hooks/useMediaQuery";

const Aboutus = () => {
  const smallscreen = useMediaQuery("(max-width: 1080px)");
  return (
    <>
      <Box
        width={"100%"}
        minH={"100vh"}
        backgroundColor={"#ffffff"}
        overflowX={"hidden"}
      >
        <Head>
          <title>REACH Student Partner About page</title>
          <meta name="description" content="Reach Student Partner" />
        </Head>
        <Navbar smallscreen={smallscreen} />
        <hr />
        <br />
        <br />
        <Box textAlign={"center"} marginRight={smallscreen?"1rem":"5rem"} marginLeft={smallscreen?"1rem":"5rem"}>
          <Text
            fontSize={smallscreen ? "2rem" : "3.5rem"}
            fontWeight={"extrabold"}
          >
            About Us
          </Text>
          <br/>
          <br/>
          <Text fontSize={smallscreen ? "1rem" : "1.5rem"}>
            REACH Student Partner Program (RSPP) is a multi-tiered network that
            offers a multi-year, graded, progression path that will enable your
            personal and professional growth through a set of activities, access
            to peer-to-peer network, mentorship and  access to a range of
            economic,learning and social opportunities. <br/><br/> While many activities of
            RSPP are built around creating awareness about the benefits of REACH
            products, the majority of these activities do not have any direct or
            immediate benefit to REACH. For eg., through RSPP you will get to
            connect with other students and mentors who could help you acquire a
            new skill or improve a skill you already have, discover new
            opportunities or gain visibility in your chosen domain.
          </Text>
        </Box>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <hr/>
        <br/>
        <br/>
        <br/>
        <Footer smallscreen={smallscreen}/>
        <br />
        <br />
        <br />
      </Box>
    </>
  );
};

export default Aboutus;
