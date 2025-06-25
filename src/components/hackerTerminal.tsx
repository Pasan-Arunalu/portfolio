import { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";

const terminalLines = [
    "> launch creative-engine",
    "[INFO] Loading modules: design, data, music, storytelling, visuals",
    "[ OK ] Modules loaded successfully",
    "",
    "> run bio.txt",
    "Name: Pasan",
    "Field: Data Science + UI/UX",
    "Special Powers: Python, React, Deep Curiosity",
    "Summary: Passionate about blending design and logic to craft meaningful digital experiences.",
    "",
    "> explore music/",
    "house.mp3        sinhala_hiphop.wav        chillwave.ogg",
    "",
    "> read vision.md",
    "I believe that technology isn't just code — it's a canvas.",
    "With each app, each interface, I aim to create tools that resonate,",
    "inspire, and empower people to do more, feel more, and connect deeper.",
    "",
    "> cat experience.log",
    "- Developed cross-platform apps with responsive, intuitive design",
    "- Integrated machine learning models for smarter user experiences",
    "- Explored creative coding projects that merge art + algorithms",
    "",
    "> run passion.exe",
    "[✓] Data with soul",
    "[✓] Design with purpose",
    "[✓] Code with character",
    "",
    "> status --interactive",
    "Running in terminal mode. Scroll to explore. Click to engage.",
    "Current Session: Artistic Mode Enabled",
  ];
  
  

export default function HackerTerminal() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedLines((prev) => {
        const next = [...prev, terminalLines[index % terminalLines.length]];
        return next.length > 15 ? next.slice(-15) : next; 
      });
      index++;
    }, 300); // speed of updates

    return () => clearInterval(interval);
  }, []);

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
      {displayedLines.map((line, i) => (
        <Text key={i}>{line}</Text>
      ))}
    </Box>
  );
}