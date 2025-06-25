import close from "../assets/close.svg";
import { Box, Image } from "@chakra-ui/react";

type HeaderProps = {
    title: string;
};

function Header({title}: HeaderProps){
    return(
        <>
        <Box 
          width="100%"
          height={"10%"}
          borderBottomColor="whiteAlpha.500"
          borderWidth="1px"
          borderTopRadius="10px"
          background={"#121212"}
          display={"flex"}
          alignItems={"center"}
        >
          <Box width={"80%"} marginLeft={"1rem"} fontSize={"12px"}>
                {title}
          </Box>
          <Box width={"20%"} justifyItems={"right"} marginRight={"1rem"}>
            <Image src={close} boxSize={4}></Image>
          </Box>
        </Box>
        </>
    )
}

export default Header;