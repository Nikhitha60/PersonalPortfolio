import { useColorMode, Button } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";


function ToggleModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          variant="ghost"
          size="md"
          colorScheme="purple"
          position="absolute"
          top="1rem"
          right="1rem"

          isRound
        />
      );
    // <Button onClick={toggleColorMode}>
    //   Switch to {colorMode === "light" ? "Dark" : "Light"} Mode
    // </Button>
  
}

export default ToggleModeButton;
