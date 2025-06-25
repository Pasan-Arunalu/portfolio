import {
  Box,
  Text,
  useMediaQuery,
  Image,
  Grid,
  GridItem,
  Avatar,
  Button,
  Card,
  HStack,
  Stack,
  Collapsible,
} from "@chakra-ui/react";
import { useState } from "react";
import Header from "./header";
import ProjectTerminal from "./projectTerminal";
import dis from "../assets/Discord-Symbol-Blurple.png";
import gh from "../assets/github-mark-white.png";

function Projects() {
  const [isMobile, isTablet, isDesktop] = useMediaQuery([
    "(max-width: 480px)",
    "(min-width: 481px) and (max-width: 1024px)",
    "(min-width: 1025px)",
  ]);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Box>
      {isDesktop && (
        <>
          <Grid
            h="90vh"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(3, 1fr)"
            gap={4}
            padding={10}
            borderColor="whiteAlpha.500"
            borderWidth="1px"
            borderRadius="10px"
          >
            <GridItem rowSpan={2} colSpan={1} borderColor="whiteAlpha.500" borderWidth="1px" borderRadius="10px">
              <Header title="projects" />
              <ProjectTerminal />
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} borderColor="whiteAlpha.500" borderWidth="1px" borderRadius="10px">
              <Header title="discord bot" />
              <Card.Root width="100%" height={"90%"}>
                <Card.Body>
                  <HStack mb="1" gap="3">
                    <Avatar.Root>
                      <Avatar.Image src={dis} />
                      <Avatar.Fallback name="Nate Foss" />
                    </Avatar.Root>
                    <Stack gap="0">
                      <Text fontSize={"15px"} fontFamily="monospace" color="white.200">
                        {`
                                > Discord YouTube Music & Chat Moderation Bot
                            `}
                      </Text>
                    </Stack>
                  </HStack>
                  <Card.Description>
                    <Text fontSize={"15px"} fontFamily="monospace" whiteSpace="pre-line" color="white.500">
                      {`
                                A Python-based Discord bot that plays YouTube music in voice channels and 
                                automatically filters scam, phishing links, and harmful messages in text channels.
                                
                                - python - 
                            `}
                    </Text>
                  </Card.Description>
                </Card.Body>
                <Card.Footer w="5rem" h={"70px"} paddingBottom={3}>
                  <Button variant="subtle" flex="1" p={0} height="auto" bg="transparent">
                    <Image src={gh} h="2rem" w="2rem" objectFit="cover" />
                  </Button>
                </Card.Footer>
              </Card.Root>
            </GridItem>

            <GridItem rowSpan={1} colSpan={1} borderColor="whiteAlpha.500" borderWidth="1px" borderRadius="10px">
              <Header title="mindful" />
              <Card.Root width="100%" height={"90%"}>
                <Card.Body>
                  <HStack mb="1" gap="3">
                    <Avatar.Root>
                      <Avatar.Image />
                      <Avatar.Fallback name="M" />
                    </Avatar.Root>
                    <Stack gap="0">
                      <Text fontSize={"15px"} fontFamily="monospace" color="white.200">
                        {`
                            > Mindful
                        `}
                      </Text>
                    </Stack>
                  </HStack>
                  <Card.Description>
                    <Text fontSize={"15px"} fontFamily="monospace" whiteSpace="pre-line" color="white.500">
                      {`
                            A website focused on mental wellbeing, 
                            where I led the UI design and development to create a calming and user-friendly experience.

                            - html, css, bootstrap, php, javascript -
                        `}
                    </Text>
                  </Card.Description>
                </Card.Body>
                <Card.Footer w="5rem" h={"70px"} paddingBottom={3}>
                  <Button variant="subtle" flex="1" p={0} height="auto" bg="transparent">
                    <Image src={gh} h="2rem" w="2rem" objectFit="cover" />
                  </Button>
                </Card.Footer>
              </Card.Root>
            </GridItem>

            <GridItem rowSpan={1} colSpan={1} borderColor="whiteAlpha.500" borderWidth="1px" borderRadius="10px">
              <Header title="portfolio" />
              <Card.Root width="100%" height={"90%"}>
                <Card.Body>
                  <HStack mb="1" gap="3">
                    <Avatar.Root>
                      <Avatar.Image />
                      <Avatar.Fallback name="P" />
                    </Avatar.Root>
                    <Stack gap="0">
                      <Text fontSize={"15px"} fontFamily="monospace" color="white.200">
                        {`
                            > Pasan's Portfolio
                        `}
                      </Text>
                    </Stack>
                  </HStack>
                  <Card.Description>
                    <Text fontSize={"15px"} fontFamily="monospace" whiteSpace="pre-line" color="white.500">
                      {`
                            A personal portfolio website built with React and TypeScript. 
                            Designed and developed from scratch to showcase my skills, projects, and personality through a clean, interactive UI.

                            - React + Typescript -
                        `}
                    </Text>
                  </Card.Description>
                </Card.Body>
                <Card.Footer w="5rem" h={"70px"} paddingBottom={3}>
                  <Button variant="subtle" flex="1" p={0} height="auto" bg="transparent">
                    <Image src={gh} h="2rem" w="2rem" objectFit="cover" />
                  </Button>
                </Card.Footer>
              </Card.Root>
            </GridItem>

            <GridItem rowSpan={1} colSpan={1} borderColor="whiteAlpha.500" borderWidth="1px" borderRadius="10px">
              <Header title="other" />
              <Box width={"100%"} padding={"2rem"} paddingTop={0}>
                <Text fontSize={"15px"} fontFamily="monospace" whiteSpace="pre-line" color="white.200">
                  {`
                            > Trail Ceylon (Ongoing group project)
                            Creating a web and mobile app to improve tourism in Sri Lanka by 
                            providing travel guides, cultural highlights, and more.
                            - React, JavaScript, Spring Boot, Flutter, MongoDB -
                        `}
                </Text>
                <Text fontSize={"15px"} fontFamily="monospace" whiteSpace="pre-line" color="white.200">
                  {`
                            > UI Designs
                            UI design of the Mindful and the ongoing designs
                            - Mindful
                            - Trail Ceylon 
                            - Podi Weda LK
                        `}
                </Text>
              </Box>
            </GridItem>
          </Grid>
        </>
      )}

      {isTablet && <></>}

      {isMobile && (
        <>
          <Box
            h={"70vh"}
            w={"100%"}
            marginTop={"5rem"}
            marginBottom={"5rem"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Text fontSize={"20px"} fontFamily="monospace" color="green.200" textAlign={"center"} marginBottom={"2rem"}>{`projects`}</Text>
            <Collapsible.Root open={openIndex === 0} onOpenChange={(isOpen) => setOpenIndex(isOpen ? 0 : null)}>
              <Collapsible.Trigger paddingY="3" fontSize={"15px"} fontFamily="monospace" color="white.200">
                {`
                    > Discord Bot
                `}
              </Collapsible.Trigger>
              <Collapsible.Content>
                <Box borderColor="whiteAlpha.500" borderWidth="1px" borderRadius="10px" h={"60%"}>
                  <Card.Root width="100%" height={"90%"}>
                    <Card.Body>
                      <HStack mb="1" gap="3">
                        <Avatar.Root>
                          <Avatar.Image src={dis} />
                          <Avatar.Fallback name="Nate Foss" />
                        </Avatar.Root>
                        <Stack gap="0">
                          <Text fontSize={"15px"} fontFamily="monospace" color="white.200">
                            {`
                                        > Discord YouTube Music & Chat Moderation Bot
                                    `}
                          </Text>
                        </Stack>
                      </HStack>
                      <Card.Description>
                        <Text fontSize={"15px"} fontFamily="monospace" whiteSpace="pre-line" color="white.500">
                          {`
                                        A Python-based Discord bot that plays YouTube music in voice channels and 
                                        automatically filters scam, phishing links, and harmful messages in text channels.
                                        
                                        - python - 
                                    `}
                        </Text>
                      </Card.Description>
                    </Card.Body>
                    <Card.Footer w="5rem" h={"70px"} paddingBottom={3}>
                      <Button variant="subtle" flex="1" p={0} height="auto" bg="transparent">
                        <Image src={gh} h="2rem" w="2rem" objectFit="cover" />
                      </Button>
                    </Card.Footer>
                  </Card.Root>
                </Box>
              </Collapsible.Content>
            </Collapsible.Root>

            <Collapsible.Root open={openIndex === 1} onOpenChange={(isOpen) => setOpenIndex(isOpen ? 1 : null)}>
              <Collapsible.Trigger paddingY="3" fontSize={"15px"} fontFamily="monospace" color="white.200">
                {`
                            > Mindful
                        `}
              </Collapsible.Trigger>
              <Collapsible.Content>
                <Box borderColor="whiteAlpha.500" borderWidth="1px" borderRadius="10px" h={"60%"}>
                  <Card.Root width="100%" height={"90%"}>
                    <Card.Body>
                      <HStack mb="1" gap="3">
                        <Avatar.Root>
                          <Avatar.Image />
                          <Avatar.Fallback name="Mindful" />
                        </Avatar.Root>
                        <Stack gap="0">
                          <Text fontSize={"15px"} fontFamily="monospace" color="white.200">
                            {`
                            > Mindful
                        `}
                          </Text>
                        </Stack>
                      </HStack>
                      <Card.Description>
                        <Text fontSize={"15px"} fontFamily="monospace" whiteSpace="pre-line" color="white.500">
                          {`
                            A website focused on mental wellbeing, 
                            where I led the UI design and development to create a calming and user-friendly experience.

                            - html, css, bootstrap, php, javascript -
                        `}
                        </Text>
                      </Card.Description>
                    </Card.Body>
                    <Card.Footer w="5rem" h={"70px"} paddingBottom={3}>
                      <Button variant="subtle" flex="1" p={0} height="auto" bg="transparent">
                        <Image src={gh} h="2rem" w="2rem" objectFit="cover" />
                      </Button>
                    </Card.Footer>
                  </Card.Root>
                </Box>
              </Collapsible.Content>
            </Collapsible.Root>

            <Collapsible.Root open={openIndex === 2} onOpenChange={(isOpen) => setOpenIndex(isOpen ? 2 : null)}>
              <Collapsible.Trigger paddingY="3" fontSize={"15px"} fontFamily="monospace" color="white.200">
                {`
                            > Pasan's Portfolio
                        `}
              </Collapsible.Trigger>
              <Collapsible.Content>
                <Box borderColor="whiteAlpha.500" borderWidth="1px" borderRadius="10px" h={"60%"}>
                  <Card.Root width="100%" height={"90%"}>
                    <Card.Body>
                      <HStack mb="1" gap="3">
                        <Avatar.Root>
                          <Avatar.Image />
                          <Avatar.Fallback name="Portfolio" />
                        </Avatar.Root>
                        <Stack gap="0">
                          <Text fontSize={"15px"} fontFamily="monospace" color="white.200">
                            {`
                            > Pasan's Portfolio
                        `}
                          </Text>
                        </Stack>
                      </HStack>
                      <Card.Description>
                        <Text fontSize={"15px"} fontFamily="monospace" whiteSpace="pre-line" color="white.500">
                          {`
                            A personal portfolio website built with React and TypeScript. 
                            Designed and developed from scratch to showcase my skills, projects, and personality through a clean, interactive UI.

                            - React + Typescript -
                        `}
                        </Text>
                      </Card.Description>
                    </Card.Body>
                    <Card.Footer w="5rem" h={"70px"} paddingBottom={3}>
                      <Button variant="subtle" flex="1" p={0} height="auto" bg="transparent">
                        <Image src={gh} h="2rem" w="2rem" objectFit="cover" />
                      </Button>
                    </Card.Footer>
                  </Card.Root>
                </Box>
              </Collapsible.Content>
            </Collapsible.Root>

            <Collapsible.Root open={openIndex === 3} onOpenChange={(isOpen) => setOpenIndex(isOpen ? 3 : null)}>
              <Collapsible.Trigger paddingY="3" fontSize={"15px"} fontFamily="monospace" color="white.200">
                {`
                            > Other
                        `}
              </Collapsible.Trigger>
              <Collapsible.Content>
                <Box borderColor="whiteAlpha.500" borderWidth="1px" borderRadius="10px" h={"70%"}>
                  <Box width={"100%"} padding={"2rem"} paddingTop={0}>
                    <Text fontSize={"15px"} fontFamily="monospace" whiteSpace="pre-line" color="white.200">
                      {`
                            > Trail Ceylon (Ongoing group project)
                            Creating a web and mobile app to improve tourism in Sri Lanka by 
                            providing travel guides, cultural highlights, and more.
                            - React, JavaScript, Spring Boot, Flutter, MongoDB -
                        `}
                    </Text>
                    <Text fontSize={"15px"} fontFamily="monospace" whiteSpace="pre-line" color="white.200">
                      {`
                            > UI Designs
                            UI design of the Mindful and the ongoing designs
                            - Mindful
                            - Trail Ceylon 
                            - Podi Weda LK
                        `}
                    </Text>
                  </Box>
                </Box>
              </Collapsible.Content>
            </Collapsible.Root>
          </Box>
        </>
      )}
    </Box>
  );
}

export default Projects;
