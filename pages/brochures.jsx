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
      "https://doc-08-b0-docs.googleusercontent.com/docs/securesc/h7l6t7go7kuv93qkhv9rh8ibqroi6r0s/atbefk5ieuo7ltvkjs0neart9lsm74nj/1653810750000/04521726459573810037/00225363322336287081/1UbIZ9Wl_7Y1sW2euSfLR1xnUOBB9r2oF?e=download&ax=ACxEAsZ70F1u4ClTM0Joe2e-qBx9VuU5bSvsiuO7_oB9rMq58sCAiWdzKfBVbLQDIJnfc3o3j4Pe1s3JO3dy7lUZr4k83wuyveJ93zSEW2fNNWFl8zj6HUcBnkj-cULdMzfSwlCJa9vXiMNAwWXOPDojzkCINh1mQGLmM1WD_rreuL7shUOiHeHv193dyZXB2yfY8WFuBaBe6sZcLjprOwdFT_qZjDXlQ5qdePAqonsgMhw2ipXwXIV5_TqgtJY6on-Wpj4Yhmy1BmAYWFEOUGzYZvu6_ijd50R3oewyXfktBjBr4-h0ZhusyhB30d8L8wxjF4cQJmaYVjnMOFogkviHRhzNjowX_QFbxdgksjw1BuahuHIZekVc0XRLJSK4vb2VnmNS9LU94qjRgc6QIWQE2ikdnczT6by9McIGYmgv-5_INUB0aIxYG1qEGWy9RmCeWTph8imYtnA_aA8Wsm1l7fDKUB07sY12vfwK1o09H8QidQrdsMcfmh0n9vKa_HYPNbnVGZLxcykhCdX-pWYV3m5BriCzha4kNCzerT-xaLB1W0VxrQUFUxqVY4NpO7fj-mxFzG7kp-QSPiE3CMGMSo_g3r-lHdXTeZwbCIQbOVzCFMFk6KJGX1s5Z_95yDT8uMgixN3aJTYU71AL4hEeEI500SEQpyp0KremgOXT51VlVpuQ2an-KUV3yfIxWD35c3JOx1lss45KC4BiAZZWrrnDmk4OvXFzsVoghDuUH1-CoaD6aJlxk_MXN_J7pCj-wFkdZ5ozZIKWu4EGelyXYeMfyXmEcNJvUhihYAaF3Id-Hy858DoiC8-Ci2FnEh8nny9l3UtuJzdhK7sVl8Q4F6mkxNzpfulEReMRngElmJyZ5wEyYdZustvgoZ2zB8_9_CmN5hAumJdG-1UlLgZ0wm9ouMeKBvsIxrVJcRel_Qhqjl38i-qbgb6yQ5uRKq0QeJSaGnrhfdo&authuser=1&nonce=okrdt8tbvne7g&user=00225363322336287081&hash=f68jc5en5qusl2a594acubl9appfdv8n",
      "REACH Student Partner.pdf"
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
      </Box>
    </>
  );
};

export default Brochures;
