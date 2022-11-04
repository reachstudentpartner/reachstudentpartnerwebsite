import {
  Box,
  Button,
  Stack,
  Spacer,
  Text,
  useColorMode,
  VStack,
  UnorderedList,
  ListItem,
  Center,
  HStack,
  Image,
} from "@chakra-ui/react";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChalkboardTeacher, faGraduationCap, faHashtag } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import useMediaQuery from "../hooks/useMediaQuery";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

export default function Home() {
  const smallscreen = useMediaQuery("(max-width: 1080px)");
  const { colorMode, toggleColorMode } = useColorMode("light");

  if (colorMode == "dark") {
    toggleColorMode("light");
  }

  let flippedlist;

  if (smallscreen) {
    flippedlist = (
      <Stack direction={["column", "row"]} spacing="24px">
        <Box width={"100%"} fontSize={"1rem"} textAlign={"left"}>
          <UnorderedList spacing={2}>
            <ListItem>
              Option to work in different areas of expertise as a student
              partner (graphic design, UI/UX, marketing, content writing, HR,
              entepreneurship, and much more)
            </ListItem>
            <ListItem>
              Ability to grow as a student partner into various leadership roles
              (Manager, Vice President, President) within REACH Student
              Partnership Programme
            </ListItem>
            <ListItem>
              Wholesome mentorship and development of student partners
              (leadership, communication, entepreneurship, domain, etc.) by
              leaders of various domains
            </ListItem>
            <ListItem>Official REACH Merchandise</ListItem>
            <ListItem>
              Opportunity to participate and win in incentive programs launched
              by REACH
            </ListItem>
            <ListItem>Certificate and Letter of Recommendation</ListItem>
            <ListItem>
              Access to learn and connect with senior industry professionals and
              craft your own career under their guidance.
            </ListItem>
          </UnorderedList>
        </Box>
        <Box width={"100%"}>
          <Image  height={smallscreen?"15rem":"30rem"} width={smallscreen?"50rem":"60rem"} src="Illustration5.jpeg" alt="illustration" />
        </Box>
      </Stack>
    );
  } else {
    flippedlist = (
      <Stack direction={["column", "row"]} spacing="24px">
        <Box width={"40%"} marginLeft={"5rem"} marginRight={"3rem"}>
          <Image  height={smallscreen?"15rem":"30rem"} width={smallscreen?"50rem":"60rem"} src="Illustration5.jpeg"  alt="illustration" />
        </Box>
        <Box
          width={"50%"}
          fontSize={"1.5rem"}
          textAlign={"left"}
          marginTop={"1rem"}
        >
          <UnorderedList spacing={2}>
            <ListItem>
              Option to work in different areas of expertise as a student
              partner (graphic design, UI/UX, marketing, content writing, HR,
              entepreneurship, and much more)
            </ListItem>
            <ListItem>
              Ability to grow as a student partner into various leadership roles
              (Manager, Vice President, President) within REACH Student
              Partnership Programme
            </ListItem>
            <ListItem>
              Wholesome mentorship and development of student partners
              (leadership, communication, entepreneurship, domain, etc.) by
              leaders of various domains
            </ListItem>
            <ListItem>Official REACH Merchandise</ListItem>
            <ListItem>
              Opportunity to participate and win in incentive programs launched
              by REACH
            </ListItem>
            <ListItem>Certificate and Letter of Recommendation</ListItem>
            <ListItem>
              Access to learn and connect with senior industry professionals and
              craft your own career under their guidance.
            </ListItem>
          </UnorderedList>
        </Box>
      </Stack>
    );
  }

  return (
    <Box
      width={"100%"}
      minH={"100vh"}
      backgroundColor={"#ffffff"}
      overflowX={"hidden"}
    >
      <Head>
        <title>REACH Student Partner</title>
        <meta name="description" content="Reach Student Partner" />
      </Head>
      <Navbar smallscreen={smallscreen} />
      <hr />
      <br />
      <br />
      <Box textAlign={"center"} marginRight={"1rem"} marginLeft={"1rem"}>
        <Text
          fontSize={smallscreen ? "2rem" : "3.5rem"}
          fontWeight={"extrabold"}
        >
          REACH Student Partner Program
        </Text>
        <Text
          fontSize={smallscreen ? "1rem" : "1.5rem"}
          fontWeight={"normal"}
          opacity={"80%"}
        >
          Become a REACH Student Partner and network with peers, mentors and
          domain experts
        </Text>
        <br />
        <br />
        <Link href="/apply" passHref>
          <Button
            height={smallscreen ? "2rem" : "3rem"}
            backgroundColor={"red.300"}
          >
            Apply Now
          </Button>
        </Link>
        <br />
        <br />
        <VStack>
          <Spacer />
          <Box width={smallscreen ? "100%" : "50%"}>
            <Image layout="responsive"  height={smallscreen?"15rem":"40rem"} width={smallscreen?"50rem":"60rem"} src="Illustration1.jpg" alt="illustration" />
          </Box>
          <Spacer />
        </VStack>
        <br />
        <br />
        <Text
          fontSize={smallscreen ? "1.5rem" : "3rem"}
          fontWeight={"extrabold"}
        >
          What will you do as REACH Student Partner?
        </Text>
        <br />
        <br />
        <Stack direction={["column", "row"]} spacing="24px">
          <Box
            width={smallscreen ? "100%" : "50%"}
            fontSize={smallscreen ? "1rem" : "1.5rem"}
            marginLeft={smallscreen ? "0rem" : "5rem"}
            textAlign={"left"}
            marginTop={smallscreen ? "0rem" : "1rem"}
          >
            <UnorderedList spacing={2}>
              <ListItem>
                Represent and promote REACH on your own campus
              </ListItem>
              <ListItem>
                Identify and choose a field of work as student partner (graphic
                design, UI/UX, marketing, content writing, HR, entepreneurship,
                and much more)
              </ListItem>
              <ListItem>
                Complete tasks in alloted field on regular basis
              </ListItem>
              <ListItem>
                Identify competent students to join student partnership program
                and build your network
              </ListItem>
              <ListItem>
                Avail and make full use of training programs conducted by REACH
              </ListItem>
              <ListItem>
                Ideate promtional strategies and effective collaborations on
                campus for an event.
              </ListItem>
              <ListItem>
                Have good knowledge about products that REACH offers
              </ListItem>
            </UnorderedList>
          </Box>
          <Box width={smallscreen ? "100%" : "40%"}>
            <Image height={smallscreen?"15rem":"30rem"} width={smallscreen?"50rem":"60rem"} src="Illustration3.jpeg" alt="illustration" />
          </Box>
        </Stack>
        <br />
        <br />
        <Text
          fontSize={smallscreen ? "1.5rem" : "3rem"}
          fontWeight={"extrabold"}
        >
          What will you get as a REACH Student Partner?
        </Text>
        <br />
        <br />
        {flippedlist}
        <br />
        <br />
        <Text
          fontSize={smallscreen ? "1.5rem" : "3rem"}
          fontWeight={"extrabold"}
        >
          Who is eligible?
        </Text>
        <br />
        <br />
        <Stack
          direction={["column", "row"]}
          spacing="50px"
          marginLeft={smallscreen ? "2rem" : "8rem"}
        >
          <Box
            width={smallscreen ? "90%" : "30%"}
            height={"20rem"}
            backgroundColor={"green.300"}
            boxShadow={"2xl"}
            borderRadius={"1rem"}
          >
            <Text
              marginTop="15%"
              textAlign={"center"}
              fontSize="1.6rem"
              fontWeight={"extrabold"}
              marginRight={"2rem"}
              marginLeft={"2rem"}
            >
              You must be a current student of any institution
            </Text>
            <br />
            <FontAwesomeIcon fontSize="5rem" icon={faGraduationCap} />
          </Box>
          <Box
            width={smallscreen ? "90%" : "30%"}
            height={"20rem"}
            borderRadius={"1rem"}
            backgroundColor={"orange.300"}
            boxShadow={"2xl"}
          >
            <Text
              marginTop="15%"
              textAlign={"center"}
              fontSize="1.6rem"
              fontWeight={"extrabold"}
              marginRight={"2rem"}
              marginLeft={"2rem"}
            >
              You must be able to conduct seminars
            </Text>
            <br />
            <FontAwesomeIcon fontSize="5rem"  icon={faChalkboardTeacher}  />
          </Box>
          <Box
            width={smallscreen ? "90%" : "30%"}
            height={"20rem"}
            backgroundColor={"red.300"}
            borderRadius={"1rem"}
            boxShadow={"2xl"}
          >
            {" "}
            <Text
              marginTop="15%"
              textAlign={"center"}
              fontSize="1.6rem"
              fontWeight={"extrabold"}
              marginRight={"2rem"}
              marginLeft={"2rem"}
            >
              You must be active on social media and on-campus
            </Text>
            <br />
            <FontAwesomeIcon fontSize="5rem" icon={faHashtag} />
          </Box>
        </Stack>
        <br />
        <br />
      </Box>
      <br/>
      <br/>
      <br/>
      <br/>
      <hr />
      <br/>
      <br/>
      <br/>
      <Box>
      <Footer smallscreen={smallscreen}/>
      <br/>
      <br/>
      <br/>
      </Box>
    </Box>
  );
}
