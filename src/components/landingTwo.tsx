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
        const newLine = Array.from({ length: 109 }, () =>
          Math.round(Math.random())
        ).join(" ");
        return [...prev.slice(-20), newLine]; 
      });
    }, 100); 

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      height="20vh"
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
      paddingX="1rem"
   
    >
      {lines.map((line, index) => (
        <Text key={index} fontSize="sm" width="100%" letterSpacing="wider" whiteSpace="nowrap" color={"#121212"}>
          {line}
        </Text>
      ))}
    </Box>
  );
}

export default LandingTwo;
