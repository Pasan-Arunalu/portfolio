import { useState } from "react";
import LandingOne from "./landingOne";
import LandingTwo from "./landingTwo";

function Landing() {
  const [isTypingDone, setIsTypingDone] = useState(false);

  return (
    <>
      <LandingOne onTypingComplete={() => setIsTypingDone(true)} />
      {isTypingDone && <LandingTwo />}
    </>
  );
}

export default Landing;
