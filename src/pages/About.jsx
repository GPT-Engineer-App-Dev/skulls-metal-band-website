import { Box, VStack, Heading, Text, Image, SimpleGrid, Link } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <Box bg="black" color="white" py={8}>
      <VStack spacing={8} align="center">
        <Heading size="2xl">About Skulls</Heading>
        <Image src="https://via.placeholder.com/800x400" alt="Skulls Band" />
        <VStack spacing={4} align="start" maxW="800px">
          <Text>Skulls is a heavy metal band from Los Angeles known for their intense live shows and hard-hitting songs. Formed in 2010, the band has released three critically acclaimed albums and toured extensively across the US and Europe.</Text>
          <Text>With a sound that combines the raw energy of thrash metal with the melodic sensibilities of classic heavy metal, Skulls has carved out a unique place in the metal landscape. The band's music is influenced by the likes of Metallica, Slayer, and Iron Maiden, but with a modern twist that keeps things fresh.</Text>
          <Text>Over the years, Skulls has released three full-length albums: "Bone Breaker" (2019), "Grave Robber" (2021), and "Skull Crusher" (2023). Each release has showcased the band's growth and evolution, while staying true to their heavy metal roots.</Text>
          <Text fontWeight="bold">Band Members:</Text>
          <Text>
            - John Doe (Vocals/Guitar)
            <br />
            - Jane Smith (Guitar)
            <br />
            - Mike Johnson (Bass)
            <br />- Sarah Lee (Drums)
          </Text>
        </VStack>
        <SimpleGrid columns={2} spacing={8}>
          <Link href="https://facebook.com/skullsband">
            <FaFacebook size={32} />
          </Link>
          <Link href="https://instagram.com/skullsband">
            <FaInstagram size={32} />
          </Link>
          <Link href="https://youtube.com/skullsband">
            <FaYoutube size={32} />
          </Link>
          <Link href="mailto:booking@skullsband.com">
            <FaEnvelope size={32} />
          </Link>
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default About;
