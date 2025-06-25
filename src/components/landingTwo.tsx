import { useEffect, useState } from "react";
import { Box, Text, useMediaQuery } from "@chakra-ui/react";

function LandingTwo() {
  const [isMobile, isTablet, isDesktop] = useMediaQuery([
    "(max-width: 480px)",
    "(min-width: 481px) and (max-width: 1024px)",
    "(min-width: 1025px)",
  ]);

  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLines((prev) => {
        const newLine = Array.from({ length: 110 }, () =>
          Math.round(Math.random())
        ).join(" ");
        return [...prev.slice(-20), newLine]; 
      });
    }, 100); 

    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
    {isDesktop && (
      <>
      <Box
        height="15vh"
        width="100%"
        mt="2rem"
        borderTop="1px solid #121212"
        borderBottom="1px solid #121212"
        overflow="hidden"
        fontFamily="monospace"
        color="white"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
      
      >
        {lines.map((line, index) => (
          <Text key={index} fontSize="sm" width="100%" letterSpacing="wider" whiteSpace="nowrap" color={"#121212"}>
            {line}
          </Text>
        ))}
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
        height="10vh"
        width="100%"
        mt="2rem"
        borderTop="1px solid #121212"
        borderBottom="1px solid #121212"
        overflow="hidden"
        fontFamily="monospace"
        color="white"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        paddingX="0.5rem"
      
      >
        {lines.map((line, index) => (
          <Text key={index} fontSize="sm" width="100%" letterSpacing="wider" whiteSpace="nowrap" color={"#121212"}>
            {line}
          </Text>
        ))}
      </Box>
    </>
    )}
    </Box>
  );
}

export default LandingTwo;
