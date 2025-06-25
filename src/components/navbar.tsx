import { Box, Image, Text, useMediaQuery,  Menu, Button, Portal } from "@chakra-ui/react";
import dd from "../assets/dd2.svg";
import close from "../assets/close.svg";
import maxi from "../assets/maxi.svg";
import mini from "../assets/mini.svg";

function Navbar() {
  const [isMobile, isTablet, isDesktop] = useMediaQuery([
    "(max-width: 480px)",
    "(min-width: 481px) and (max-width: 1024px)",
    "(min-width: 1025px)",
  ]);

  return (
    <Box className="parentCont" background={"#121212"} height={"3.5rem"} roundedTop={"10px"} display={"flex"} borderColor={"white.500"} borderWidth={"2px"} borderBottom={"none"}>
      {isDesktop && (
        <>
          <Box
            background={"#121212"}
            width={"80%"}
            roundedTopLeft={"10px"}
            display={"flex"}
            alignItems={"end"}
            justifyContent={"left"}
            paddingLeft={4}
          >
            <Box
              background={"#0A0A0A"}
              width={"15%"}
              height={"70%"}
              roundedTop={"10px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"left"}
              paddingLeft={4}
              cursor={"pointer"}
            >
              <Box width={"80%"}>
                <Text fontSize={"12px"} fontFamily="monospace">
                  Home
                </Text>
              </Box>
              <Box width={"20%"}>
                <Image src={close} boxSize={5}></Image>
              </Box>
            </Box>

            <Box
              width={"15%"}
              height={"70%"}
              borderRightColor={"white.100"}
              borderRightWidth={"2px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"left"}
              paddingLeft={4}
              marginLeft={"1rem"}
              cursor={"pointer"}
            >
              <Box width={"70%"}>
                <Text fontSize={"12px"} fontFamily="monospace">
                  About
                </Text>
              </Box>
              <Box width={"30%"}>
                <Image src={close} boxSize={5}></Image>
              </Box>
            </Box>

            <Box
              width={"15%"}
              height={"70%"}
              borderRightColor={"white.100"}
              borderRightWidth={"2px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"left"}
              paddingLeft={4}
              marginLeft={"1rem"}
              cursor={"pointer"}
            >
              <Box width={"70%"}>
                <Text fontSize={"12px"} fontFamily="monospace">
                  Skills
                </Text>
              </Box>
              <Box width={"30%"}>
                <Image src={close} boxSize={5}></Image>
              </Box>
            </Box>

            <Box
              width={"15%"}
              height={"70%"}
              borderRightColor={"white.100"}
              borderRightWidth={"2px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"left"}
              paddingLeft={4}
              marginLeft={"1rem"}
              cursor={"pointer"}
            >
              <Box width={"70%"}>
                <Text fontSize={"12px"} fontFamily="monospace">
                  Projects
                </Text>
              </Box>
              <Box width={"30%"}>
                <Image src={close} boxSize={5}></Image>
              </Box>
            </Box>

            <Box
              width={"15%"}
              height={"70%"}
              borderRightColor={"white.100"}
              borderRightWidth={"2px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"left"}
              paddingLeft={4}
              marginLeft={"1rem"}
              cursor={"pointer"}
            >
              <Box width={"70%"}>
                <Text fontSize={"12px"} fontFamily="monospace">
                  Contact
                </Text>
              </Box>
              <Box width={"30%"}>
                <Image src={close} boxSize={5}></Image>
              </Box>
            </Box>
          </Box>

          <Box
            background={"#121212"}
            width={"20%"}
            roundedTopRight={"10px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"right"}
            paddingRight={4}
          >
            <Image src={mini} boxSize={5} margin={2} />
            <Image src={maxi} boxSize={4} margin={2} />
            <Image src={close} boxSize={5} margin={2} />
          </Box>
        </>
      )}

      {isTablet && <></>}

      {isMobile && (
        <>
          <Box background="#121212" height="100%" width="80%" roundedTopLeft="10px" display={"flex"} alignItems={"end"}justifyContent={"left"}>
            <Box
              background={"#121212"}
              width={"70%"}
              height={"100%"}
              roundedTopLeft={"10px"}
              display={"flex"}
              alignItems={"end"}
              justifyContent={"left"}
              paddingLeft={4}
            >
              <Box
                background={"#0A0A0A"}
                width={"100%"}
                height={"70%"}
                roundedTop={"10px"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"left"}
                paddingLeft={4}
                cursor={"pointer"}
              >
                <Box width={"80%"}>
                  <Text fontSize={"12px"} fontFamily="monospace">
                    Home
                  </Text>
                </Box>
                <Box width={"20%"}>
                  <Image src={close} boxSize={4}></Image>
                </Box>
              </Box>
            </Box>
            <Box
              height="70%"
              width="30%"
              display={"flex"}
              alignItems={"center"}
            >
              <Menu.Root>
                <Menu.Trigger asChild>
                  <Button variant="plain" size="sm">
                    <Image src={dd} boxSize={7} />
                  </Button>
                </Menu.Trigger>
                <Portal>
                  <Menu.Positioner>
                    <Menu.Content>
                      <Menu.Item value="new-txt">About</Menu.Item>
                      <Menu.Item value="new-file">Skills</Menu.Item>
                      <Menu.Item value="new-win">Projects</Menu.Item>
                      <Menu.Item value="open-file">Contact</Menu.Item>
                    </Menu.Content>
                  </Menu.Positioner>
                </Portal>
              </Menu.Root>
              
            </Box>
          </Box>

          <Box
            background={"#121212"}
            width={"40%"}
            roundedTopRight={"10px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"right"}
            paddingRight={4}
          >
            <Image src={mini} boxSize={5} margin={2} />
            <Image src={maxi} boxSize={4} margin={2} />
            <Image src={close} boxSize={5} margin={2} />
          </Box>
        </>
      )}
    </Box>
  );
}

export default Navbar;
