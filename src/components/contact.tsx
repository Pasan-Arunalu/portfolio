import { Box, useMediaQuery, Button, Stack, Text, Image, HStack } from "@chakra-ui/react";
import ContactForm from "./contactForm";
import Header from "./header";
import ig from "../assets/Instagram_Glyph_White.png";
import gh from "../assets/github-mark-white.png";
import li from "../assets/InBug-White.png";

function Contact() {
    
      const [isMobile, isTablet, isDesktop] = useMediaQuery([
        "(max-width: 480px)",
        "(min-width: 481px) and (max-width: 1024px)",
        "(min-width: 1025px)",
      ]);

    return(
        <Box>
        {isDesktop && (
            <>
            <Box gap="10" height={"60vh"} 
                width={"40vw"} 
                display={"flex"} 
                flexDirection={"column"}
                marginTop={"10rem"} 
                marginBottom={"10rem"}         
                borderColor="whiteAlpha.500"
                borderWidth="1px"
                borderRadius="10px"
                
            >
                <Header title="contact"/>
                <Box display={"flex"}>
                    <Box h="100%" width={"60%"} alignContent={"center"} padding={10}> 
                        <ContactForm/>
                    </Box>
                    <Box h="100%" width={"40%"} padding={10} alignContent={"center"}> 
                        <Stack direction="column" width="100%">
                            <Text textAlign={"center"} fontSize={"2rem"} fontFamily="monospace" color="white.300">Contact me</Text>
                            <Button variant="outline" h={"3rem"} w={"10rem"} alignSelf={"center"} margin={2} display={"flex"} justifyContent={"left"}>
                                <Box w={"30%"} h={"100%"} display={"flex"} alignItems={"center"} justifyContent={"right"}>
                                    <Image src={ig} h={"50%"}></Image>
                                </Box>
                                <Box display={"flex"} alignItems={"center"} justifyContent={"left"}>
                                    <Text>Instagram</Text>
                                </Box>
                            </Button>
                            <Button variant="outline" h={"3rem"} w={"10rem"} alignSelf={"center"} margin={2} display={"flex"} justifyContent={"left"}>
                                <Box w={"30%"} h={"100%"} display={"flex"} alignItems={"center"} justifyContent={"right"}>
                                    <Image src={gh} h={"50%"}></Image>
                                </Box>
                                <Box display={"flex"} alignItems={"center"} justifyContent={"left"}>
                                    <Text>Github</Text>
                                </Box>
                            </Button>
                            <Button variant="outline" h={"3rem"} w={"10rem"} alignSelf={"center"} margin={2} display={"flex"} justifyContent={"left"}>
                                <Box w={"30%"} h={"100%"} display={"flex"} alignItems={"center"} justifyContent={"right"}>
                                    <Image src={li} h={"50%"}></Image>
                                </Box>
                                <Box display={"flex"} alignItems={"center"} justifyContent={"left"}>
                                    <Text>Linkedin</Text>
                                </Box>
                            </Button>
                        </Stack>
                    </Box>
                </Box>
            </Box>
            </>
        )}
  
        {isTablet && (
            <>
            
            </>
        )}
  
        {isMobile && (
            <>
            <Box 
                h={"100vh"}
                w={"100vw"}
                paddingTop={"5rem"}
                paddingBottom={"5rem"}
                paddingRight={"3rem"}
                paddingLeft={"3rem"}
                display={"flex"}
                alignItems={"center"}
            >
                <Box
                    h={"100%"}
                    w={"100%"}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    borderColor="whiteAlpha.500"
                    borderWidth="1px"
                    borderRadius="10px"
                >
                    <Box
                    h={"100%"}
                    w={"100%"}
                    display={"flex"}
                    alignItems={"center"}
                    textAlign={"center"}
                    justifyContent={"center"}
                    paddingTop={"2rem"}
                    >
                        <Text fontSize={"2rem"} fontFamily="monospace" color="white.300">Contact me</Text>
                    </Box>
                    <Box
                    h={"100%"}
                    w={"100%"}
                    display={"flex"}
                    alignItems={"center"}
                    >
                        <Box h="100%" width={"100%"} alignContent={"center"} padding={10}> 
                            <ContactForm/>
                        </Box>
                    </Box>
                    <Box
                    h={"100%"}
                    w={"100%"}
                    padding={"2rem"}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    >
                        <Button variant="outline" h={"3rem"} w={"10rem"} alignSelf={"center"} margin={2} display={"flex"} justifyContent={"left"}>
                            <Box w={"30%"} h={"100%"} display={"flex"} alignItems={"center"} justifyContent={"right"}>
                                <Image src={ig} h={"50%"}></Image>
                            </Box>
                            <Box display={"flex"} alignItems={"center"} justifyContent={"left"}>
                                <Text>Instagram</Text>
                            </Box>
                        </Button>
                        <Button variant="outline" h={"3rem"} w={"10rem"} alignSelf={"center"} margin={2} display={"flex"} justifyContent={"left"}>
                            <Box w={"30%"} h={"100%"} display={"flex"} alignItems={"center"} justifyContent={"right"}>
                                <Image src={gh} h={"50%"}></Image>
                            </Box>
                            <Box display={"flex"} alignItems={"center"} justifyContent={"left"}>
                                <Text>Github</Text>
                            </Box>
                        </Button>
                        <Button variant="outline" h={"3rem"} w={"10rem"} alignSelf={"center"} margin={2} display={"flex"} justifyContent={"left"}>
                            <Box w={"30%"} h={"100%"} display={"flex"} alignItems={"center"} justifyContent={"right"}>
                                <Image src={li} h={"50%"}></Image>
                            </Box>
                            <Box display={"flex"} alignItems={"center"} justifyContent={"left"}>
                                <Text>Linkedin</Text>
                            </Box>
                        </Button>
                    </Box>
                    
                </Box>
            </Box>
            </>
        )}
        </Box>
    );
}

export default Contact;