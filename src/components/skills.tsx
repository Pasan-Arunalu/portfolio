import { Box, Text, useMediaQuery, Image, Grid, GridItem, Accordion, Span } from "@chakra-ui/react";
import Header from "./header";
import HackerTerminal from "./hackerTerminal";

function Skills() {

    const terminalLines = [
        "> ls skills/",
        " ",
        "languages/",
        "frameworks/",
        "libraries/",
        "tools/",
        "miscellaneous/",
      ];

      const terminalLinesTwo = [
        "> cat languages/",
        "- Python",
        "- Javascript",
        "- SQL",
        "- R",
      ];

      const terminalLinesThree = [
        "> cat frameworks/",
        "- React",
        "- Django",
        "",
        "> cat libraries/",
        "- Pandas",
        "- NumPy",
        "- Matplotlib",
      ];

      const terminalLinesFour = [
        "> cat tools/",
        "- Github",
        "- Figma",
        "- Postman",
        "- Microsoft Power BI",
        "- R Studio",
        "- Microsoft Office Package",
        "",
        "> cat miscellaneous/",
        "- music", 
        "(beginner music producer, singer, lyricist)",
        "",
      ];
    
      const [isMobile, isTablet, isDesktop] = useMediaQuery([
        "(max-width: 480px)",
        "(min-width: 481px) and (max-width: 1024px)",
        "(min-width: 1025px)",
      ]);

      const items = [
        { value: "a", title: "> languages", text: ["- Python", "- JavaScript", "- SQL", "- R"] },
        { value: "b", title: "> frameworks", text: ["- React", "- Django"] },
        { value: "c", title: "> libraries", text: ["- Pandas", "- NumPy", "- Matplotlib"] },
        { value: "d", title: "> tools", text: ["- Github", "- Figma", "- Postman", "- Microsoft Power BI", "- R Studio", "- Microsoft Office Package"] },
        { value: "e", title: "> miscellaneous", text: ["- Music", "(beginner music producer, singer, lyricist)"] },
      ];
      

    return(
        <Box>
        {isDesktop && (
          <>
            <Grid
              h="90vh"
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(3, 1fr)"
              gap={4}
              padding={10}
              borderColor="whiteAlpha.500" borderWidth="1px" borderRadius="10px"
            >
              <GridItem rowSpan={1} colSpan={1} borderColor="whiteAlpha.500" borderWidth="1px" borderRadius="10px">
                <Header title="skills"/>
                <Box width={"100%"}>
                    <Text fontSize={"15px"} fontFamily="monospace" whiteSpace="pre-line" color="green.200" padding={"2rem"}>
                    {terminalLines.join("\n")}
                </Text>
                  </Box>
              </GridItem> 
              <GridItem rowSpan={1} colSpan={2} borderColor="whiteAlpha.500" borderWidth="1px" borderRadius="10px">
                <Header title="error 404"/>
                <HackerTerminal/>
              </GridItem>
              <GridItem rowSpan={1} colSpan={1} borderColor="whiteAlpha.500" borderWidth="1px" borderRadius="10px">
                <Header title="languages"/>
                <Text fontSize={"15px"} fontFamily="monospace" whiteSpace="pre-line" color="green.200" padding={"2rem"}>
                    {terminalLinesTwo.join("\n")}
                </Text>
              </GridItem> 
              <GridItem rowSpan={1} colSpan={1} borderColor="whiteAlpha.500" borderWidth="1px" borderRadius="10px">
                <Header title="frameworks & libraries"/>
                <Text fontSize={"15px"} fontFamily="monospace" whiteSpace="pre-line" color="green.200" padding={"2rem"}>
                    {terminalLinesThree.join("\n")}
                </Text>
              </GridItem>
              <GridItem rowSpan={1} colSpan={1} borderColor="whiteAlpha.500" borderWidth="1px" borderRadius="10px">
                <Header title="tools & miscellaneous"/>
                <Text fontSize={"15px"} fontFamily="monospace" whiteSpace="pre-line" color="green.200" padding={"2rem"}>
                    {terminalLinesFour.join("\n")}
                </Text>
              </GridItem>
              
            </Grid>

          </>
        )}
  
        {isTablet && <></>}
  
        {isMobile && (
          <>
            <Box display={"flex"} flexDirection={"column"} h={"80vh"}>
                <Box h={"10%"} w={"100%"}>
                    <Text fontFamily="monospace" whiteSpace="pre-line" color="green.300" flex="1" fontSize={"20px"}>
                        {`> skills
                        ────────────────────────────────`}
                        
                    </Text>
                </Box>
                <Box w={"100%"}>
                    <Accordion.Root collapsible defaultValue={["a"]}>
                        {items.map((item, index) => (
                          <Accordion.Item key={index} value={item.value}>
                            <Accordion.ItemTrigger>
                              <Span fontFamily="monospace" whiteSpace="pre-line" color="green.200" flex="1" fontSize={"18px"}>{item.title}</Span>
                              <Accordion.ItemIndicator />
                            </Accordion.ItemTrigger>
                            <Accordion.ItemContent>
                                <Accordion.ItemBody fontFamily="monospace" whiteSpace="pre-line" color="green.100" fontSize={"15px"}>
                                  {Array.isArray(item.text) ? (
                                    item.text.map((line, i) => <Text key={i}>{line}</Text>)
                                  ) : (
                                    <Text>{item.text}</Text>
                                  )}
                                </Accordion.ItemBody>

                            </Accordion.ItemContent>
                          </Accordion.Item>
                        ))}
                    </Accordion.Root>
                </Box>
                <Box h={"40%"} marginTop={"2rem"} borderColor="whiteAlpha.500" borderWidth="1px" borderRadius="10px" overflow={"hidden"}>
                    <HackerTerminal/>
                </Box>
            </Box>
          </>
        )}
      </Box>
    );
}

export default Skills;