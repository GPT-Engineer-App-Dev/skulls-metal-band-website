import { Box, VStack, Heading, Text, Image, SimpleGrid, Link, List, ListItem } from "@chakra-ui/react";

const Discography = () => {
  const albums = [
    {
      title: "Skull Crusher",
      year: 2023,
      coverArt: "https://via.placeholder.com/300x300",
      tracks: ["Track 1", "Track 2", "Track 3"],
    },
    {
      title: "Bone Breaker",
      year: 2021,
      coverArt: "https://via.placeholder.com/300x300",
      tracks: ["Track 1", "Track 2", "Track 3"],
    },
    {
      title: "Grave Robber",
      year: 2019,
      coverArt: "https://via.placeholder.com/300x300",
      tracks: ["Track 1", "Track 2", "Track 3"],
    },
  ];

  return (
    <Box bg="black" color="white" py={8}>
      <VStack spacing={8} align="center">
        <Heading size="2xl">Skulls - Album Discography</Heading>
        <Text>Over the years, Skulls has released {albums.length} bone-crushing albums of pure heavy metal mayhem. Check out our discography below:</Text>
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {albums.map((album) => (
            <Box key={album.title} borderWidth={1} borderColor="gray.700" p={4}>
              <VStack spacing={4} align="center">
                <Image src={album.coverArt} alt={album.title} />
                <Heading size="lg">{album.title}</Heading>
                <Text>Released: {album.year}</Text>
                <List spacing={2}>
                  {album.tracks.map((track) => (
                    <ListItem key={track}>{track}</ListItem>
                  ))}
                </List>
                <Link href="#">
                  <Text textDecoration="underline">Stream/Purchase</Text>
                </Link>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Discography;
