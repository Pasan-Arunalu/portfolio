import { useState } from "react";
import LandingOne from "./landingOne";
import LandingTwo from "./landingTwo";

function Landing() {
  const [, setIsTypingDone] = useState(false);

  return (
    <>
      <LandingOne onTypingComplete={() => setIsTypingDone(true)} />
      <LandingTwo />
    </>
  );
}

export default Landing;
