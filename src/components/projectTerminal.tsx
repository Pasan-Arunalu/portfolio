import { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";

// All project lines flattened into one list
const projectDescriptions = [
  "> Discord YouTube Music & Chat Moderation Bot",
  "",
  "A full-featured Python-based Discord bot designed to enhance server engagement.",
  "It allows users to stream YouTube music directly into voice channels,",
  "while also monitoring chat activity to filter out scam, phishing links, and",
  "other unwanted content using keyword matching and pattern recognition.",
  "",
  "- Technologies: Python, discord.py, regex -",
  "",
  "> Mindful",
  "",
  "A mental wellbeing platform designed to help users reflect and unwind.",
  "I led the user interface design and frontend development, ensuring a calm,",
  "intuitive experience through thoughtful design choices, responsive layouts,",
  "and accessible interactions.",
  "",
  "- Technologies: HTML, CSS, Bootstrap, JavaScript, PHP -",
  "",
  "> Pasan's Portfolio",
  "",
  "A personal portfolio site built with React and TypeScript to highlight my",
  "skills, projects, and personality. Designed with a terminal-inspired theme,",
  "the interface is handcrafted for responsiveness, clarity, and creative flair.",
  "",
  "- Technologies: React, TypeScript, Vite, Chakra UI -",
  "",
  "> Trail Ceylon (Ongoing Group Project)",
  "",
  "An all-in-one travel assistant built to promote tourism in Sri Lanka.",
  "It provides complete travel guidance, highlights destinations, and shares",
  "authentic cultural experiences through both web and mobile platforms.",
  "",
  "- Technologies: React, JavaScript, Spring Boot, Flutter, MongoDB -",
  "",
  "> UI Designs",
  "",
  "Focused UI design work across multiple projects. Includes:",
  "- Mindful: calm, clean UX for a wellbeing app",
  "- Trail Ceylon: cultural richness and vibrant layouts",
  "- Podi Weda LK: a local job listing app with mobile-first approach",
  "",
  "- Tools: Figma, Adobe XD -",
];

export default function ProjectTerminal() {
  const [typedLines, setTypedLines] = useState<string[]>([""]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentLine = projectDescriptions[lineIndex % projectDescriptions.length] || "";

    const timeout = setTimeout(() => {
      setTypedLines((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] += currentLine[charIndex] || "";

        
        return updated.length > 25 ? updated.slice(-25) : updated;
      });

      if (charIndex < currentLine.length - 1) {
        setCharIndex((prev) => prev + 1);
      } else {
        // Move to next line
        setCharIndex(0);
        setLineIndex((prev) => prev + 1);
        setTypedLines((prev) => [...prev, ""]);
      }
    }, 12); 

    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex]);

  return (
    <Box
      p={3}
      fontFamily="monospace"
      fontSize="sm"
      color="green.300"
      height="100%"
      overflowY="auto"
      whiteSpace="pre-wrap"
    >
      {typedLines.map((line, i) => (
        <Text key={i}>{line}</Text>
      ))}
    </Box>
  );
}
