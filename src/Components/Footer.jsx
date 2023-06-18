import { Avatar, Box, Stack, VStack, Text } from "@chakra-ui/react";
import React from "react";

const avatarSrc = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Fpremium-vector%2Fsocial-avatar-stories-gradient-frame_41737-3.jpg&tbnid=Ru3uzETyQAqt2M&vet=12ahUKEwjjsLbBpsD_AhUoK7cAHQ_dCi4QMyg1egQIARBt..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fprofile-avatar&docid=T4TpZnpvbGGx7M&w=626&h=626&q=avatar%20photo&ved=2ahUKEwjjsLbBpsD_AhUoK7cAHQ_dCi4QMyg1egQIARBt"

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>ABOUT US</Text>

          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
            textTransform={'capitalize'}
          >
            We are the best crypto trading app in India
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};


export default Footer