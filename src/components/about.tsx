import close from "../assets/close.svg";
import me from "../assets/me.jpg"
import { Box, Text, useMediaQuery, Image, Collapsible } from "@chakra-ui/react";

function About() {

    const terminalLines = [
        "> ls about/",
        " ",
        "> bio.txt",
        "> education.txt",
        "> interests.txt",
        " ",
        " ",
        "> cat education.txt",
        ' ',
        '      Undergraduate in Data Science',
        '      Cardiff Metropolitan University',
        ' ',
        '      Higher Diploma in Software Engineering',
        '      Cardiff Metropolitan University',
        "",
        "> cat interests.txt",
        "Interest",
        "─────────────────────────────────────────────",
        "Data Engineering, Manipulation, Visualization",      
        "Machine Learning",
        "Creative Coding",
        "UI/UX Design & Development",
      ];
    
      const [isMobile, isTablet, isDesktop] = useMediaQuery([
        "(max-width: 480px)",
        "(min-width: 481px) and (max-width: 1024px)",
        "(min-width: 1025px)",
      ]);

    return(
        <Box>
        {isDesktop && (
          <>
          <Box               
            width="100%"
            height="80vh"
            borderColor="whiteAlpha.500"
            borderWidth="1px"
            borderRadius="10px"
            display={"flex"}
          >
            <Box
              width="30%"
              height="100%"
              padding={5}
              alignContent={"center"}
            >
              <Text fontFamily="monospace" whiteSpace="pre-line" color="green.200" fontSize="md">
                {terminalLines.join("\n")}
              </Text>
            </Box>

            <Box
              width="70%"
              height="100%"
              padding={5}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              borderRadius="10px"
            >
              <Box 
                width="80%"
                height={"35rem"}
                borderColor="whiteAlpha.500"
                borderWidth="1px"
                borderRadius="10px"
                display={"flex"}
                flexDirection={"column"}
              >
                <Box 
                  width="100%"
                  height={"10%"}
                  borderBottomColor="whiteAlpha.500"
                  borderWidth="1px"
                  borderTopRadius="10px"
                  background={"#121212"}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Box width={"80%"} marginLeft={"1rem"}>
                    <Text fontSize={"15px"} fontFamily="monospace">
                      bio.txt
                    </Text>
                  </Box>
                  <Box width={"20%"} justifyItems={"right"} marginRight={"1rem"}>
                    <Image src={close} boxSize={5}></Image>
                  </Box>
                </Box>
                
                <Box 
                  width="100%"
                  height={"90%"}
                  background={"#121212"}
                  borderBottomRadius={"10px"}
                  display={"flex"}
                >
                  <Box width={"80%"}>
                    <Text fontSize={"15px"} fontFamily="monospace" whiteSpace="pre-line" color="white.200" padding={"2rem"}>
                      {`Hi! I'm Pasan Arunalu, a Data Science undergraduate with a solid foundation in web and mobile application design and development. 
                        I'm passionate about creating meaningful, user-focused digital experiences that blend functionality with creativity. 

                        I'm skilled in Python, JavaScript, and React, and currently exploring Python libraries and frameworks such as Pandas, NumPy, Matplotlib, Scikit-learn, TensorFlow, and PyTorch 
                        applying them across data-driven projects, machine learning workflows, and backend development.

                        Outside of tech, I'm a huge fan of house music and Sinhala hip-hop. 
                        A reflection of how I merge analytical thinking with artistic expression to build innovative, impactful solutions.
                      `}
                    </Text>
                  </Box>
                  <Box width={"20%"} justifyItems={"center"} marginRight={"2rem"} marginTop={"2rem"}>
                    <Image src={me} width={"100%"} borderRadius={"50%"} objectFit={"contain"}></Image>
                  </Box>
                </Box>
              </Box>
            </Box>

          </Box>
          </>
        )}
  
        {isTablet && <></>}
  
        {isMobile && (
          <>
          <Box display={"flex"} flexDirection={"column"}>
            <Box
              width="100%"
              height="100%"
              padding={5}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              borderRadius="10px"
            >
              <Box 
                width="100%"
                height={"100%"}
                borderColor="whiteAlpha.500"
                borderWidth="1px"
                borderRadius="10px"
                display={"flex"}
                flexDirection={"column"}
              >
                <Box 
                  width="100%"
                  height={"50px"}
                  borderBottomColor="whiteAlpha.500"
                  borderWidth="1px"
                  borderTopRadius="10px"
                  background={"#121212"}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Box width={"80%"} marginLeft={"1rem"}>
                    <Text fontSize={"15px"} fontFamily="monospace">
                      bio.txt
                    </Text>
                  </Box>
                  <Box width={"20%"} justifyItems={"right"} marginRight={"1rem"}>
                    <Image src={close} boxSize={5}></Image>
                  </Box>
                </Box>
                
                <Box 
                  width="100%"
                  height={"90%"}
                  background={"#121212"}
                  borderBottomRadius={"10px"}
                  display={"flex"}
                  flexDirection={"column"}
                >
                  <Box width={"60%"} alignSelf={"center"} justifyItems={"center"} marginTop={"2rem"}>
                    <Image src={me} width={"100%"} borderRadius={"50%"} objectFit={"contain"}></Image>
                  </Box>
                  <Box width={"100%"}>
                    <Collapsible.Root>
                      <Collapsible.Trigger fontSize={"15px"} fontFamily="monospace" whiteSpace="pre-line" color="white.200" padding={"2rem"} textAlign={"center"} w={"100%"}>
                        {`Hi! I'm Pasan Arunalu, 
                          (show more)
                        `}
                      </Collapsible.Trigger>
                      <Collapsible.Content>
                        <Box fontSize={"15px"} fontFamily="monospace" whiteSpace="pre-line" color="white.200" padding={"2rem"}>
                          {`a Data Science undergraduate with a solid foundation in web and mobile application design and development. 
                            I'm passionate about creating meaningful, user-focused digital experiences that blend functionality with creativity. 

                            I'm skilled in Python, JavaScript, and React, and currently exploring Python libraries and frameworks such as Pandas, NumPy, Matplotlib, Scikit-learn, TensorFlow, and PyTorch 
                            applying them across data-driven projects, machine learning workflows, and backend development.

                            Outside of tech, I'm a huge fan of house music and Sinhala hip-hop. 
                            A reflection of how I merge analytical thinking with artistic expression to build innovative, impactful solutions.
                          `}
                        </Box>
                      </Collapsible.Content>
                    </Collapsible.Root>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              width="100%"
              height="100%"
              padding={5}
              alignContent={"center"}
            >
              <Text fontFamily="monospace" whiteSpace="pre-line" color="green.200" fontSize="md">
                {terminalLines.join("\n")}
              </Text>
            </Box>
            </Box>
          </>
        )}
      </Box>
    );
}

export default About;