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


export default function Apply(){
    const smallscreen = useMediaQuery("(max-width: 1080px)");

    return(
        <>
            <Box
                width={"100%"}
                minH={"100vh"}
                backgroundColor={"#ffffff"}
                overflowX={"hidden"}
            >
                <Head>
                    <title>Apply</title>
                    <meta name="description" content="Apply for Reach Student Partner" />
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
                    How  to  apply to be a REACH Student Partner?
                    </Text>
                    <Box
                        width={smallscreen ? "100%" : "50%"}
                        fontSize={smallscreen ? "1rem" : "1.5rem"}
                        marginLeft={smallscreen ? "0rem" : "5rem"}
                        textAlign={"left"}
                        padding={"50px"}
                        display={"flex"}
                        flexDirection={"column"}
                        rowGap={"10px"}
                    >
                        <Text
                        fontSize={smallscreen ? "1rem" : "1.5rem"}
                        fontWeight={"normal"}
                        >
                        Please  email  your  CV along to {' '}
                        <Link href="rspp@reachstudentpartners.com" style={{color:'#fc8181'}}>rspp@reachstudentpartners.com
                        </Link> {' '}
                        with  the  following  information to apply as a REACH Student Partner.
                        <br/>
                        Please  use the following  format for  your  email subject :  "Your Name: RSPP Application "
                        </Text>
                        <UnorderedList
                            fontWeight={"500"}
                        >
                            <ListItem>Your Whatsapp Number</ListItem>
                            <ListItem>Your Mobile Number</ListItem>
                        </UnorderedList>
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
                    </Box>
                    <br/>
                    <br/>
                    <br/>
                </Box>


            </Box>
        </>
    )
}