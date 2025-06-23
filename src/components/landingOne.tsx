import { useState, useEffect } from "react";
import { Box, Text, AspectRatio, useMediaQuery } from "@chakra-ui/react";

type LandingOneProps = {
    onTypingComplete: () => void;
  };
  
  function LandingOne({ onTypingComplete }: LandingOneProps) {
  
  const terminalLines = [
    "> boot --user-profile",
    "[ OK ] Terminal initialized...",
    "[ OK ] System check... passed",
    "[INFO] Loading user info..",
    "",
    "> whoami",
    "pasan",
    "",
    "> cat bio.txt",
    "Hey, I'm Pasan — a Data Science undergraduate passionate about building creative tools and visual experiences.",
    " ",
    " ",
    " ",
    ">",
    ">",
    "> ls about/",
    "> ls skills/",
    "> ls projects/",
    "> ls contact/",
    ">",
    ">",
    "> click a section or scroll down to view",
  ];

  const [isMobile, isTablet, isDesktop] = useMediaQuery([
    "(max-width: 480px)",
    "(min-width: 481px) and (max-width: 1024px)",
    "(min-width: 1025px)",
  ]);

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [typedLines, setTypedLines] = useState<string[]>([""]);
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Typing effect
  useEffect(() => {
    if (isTypingDone) return;

    const line = terminalLines[currentLineIndex] ?? "";

    if (currentCharIndex < line.length) {
      const timeout = setTimeout(() => {
        const updatedLines = [...typedLines];
        updatedLines[currentLineIndex] = (updatedLines[currentLineIndex] || "") + line[currentCharIndex];

        setTypedLines(updatedLines);
        setCurrentCharIndex((prev) => prev + 1);
      }, 10); // typing speed

      return () => clearTimeout(timeout);
    } else if (currentLineIndex < terminalLines.length - 1) {
      const timeout = setTimeout(() => {
        setTypedLines((prev) => [...prev, ""]);
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, 200); // delay between lines

      return () => clearTimeout(timeout);
    } else {
      setIsTypingDone(true);
      onTypingComplete();
    }
  }, [currentCharIndex, currentLineIndex, terminalLines, typedLines, isTypingDone]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorBlink);
  }, []);

  const renderLines = typedLines.map((line, i) => {
    const isLastLine = i === typedLines.length - 1;
    const withCursor = isLastLine && !isTypingDone && cursorVisible ? line + "▌" : line;
    return withCursor;
  });

  return (
    <Box>
      {isDesktop && (
        <>
          <Box
            width="100%"
            height="100%"
            borderColor="whiteAlpha.500"
            borderWidth="1px"
            borderBottomRadius="10px"
            padding={5}
            position={"relative"}
            zIndex={"1"}
          >
            <Text fontFamily="monospace" whiteSpace="pre-line" color="green.200" fontSize="md">
              {renderLines.join("\n")}
            </Text>
          </Box>

          <Box
            position={"absolute"}
            bottom={"40"}
            right={"40"}
            marginBottom={"8rem"}
            height={"50vh"}
            width={"30vw"}
            zIndex={"0"}
          >
            <AspectRatio maxW="100%" height={"100%"} ratio={1}>
              <img
                src="/ascii_edited.gif"
                alt="Animated Cat"
                style={{
                  width: "100%",
                  borderBottomRightRadius: "10px",
                  borderBottomLeftRadius: "10px",
                  objectFit: "cover",
                }}
              />
            </AspectRatio>
          </Box>
        </>
      )}

      {isTablet && <></>}

      {isMobile && (
        <>
          <Box
            width="100%"
            height="100%"
            borderColor="whiteAlpha.500"
            borderWidth="1px"
            borderBottomRadius="10px"
            padding={5}
            position={"relative"}
            zIndex={"1"}
          >
            <Text fontFamily="monospace" whiteSpace="pre-line" color="green.200" fontSize="md">
              {renderLines.join("\n")}
            </Text>
          </Box>

          <Box
            position={"absolute"}
            bottom={"20"}
            right={"10"}
            marginBottom={"10rem"}
            height={"28vh"}
            width={"48vw"}
            zIndex={"0"}
          >
            <AspectRatio maxW="100%" height={"100%"} ratio={1}>
              <img
                src="/assets/ascii_edited.gif"
                alt="Animated Cat"
                style={{
                  width: "100%",
                  borderBottomRightRadius: "10px",
                  borderBottomLeftRadius: "10px",
                  objectFit: "cover",
                }}
              />
            </AspectRatio>
          </Box>
        </>
      )}
    </Box>
  );
}

export default LandingOne;
