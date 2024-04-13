import { Box, VStack, Heading, Text, Button, HStack, Image, Link, Divider } from "@chakra-ui/react";
import { FaShoppingCart, FaTicketAlt, FaPlay, FaPause, FaFacebook, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";
import { useState, useRef } from "react";

const tracks = [
  { name: "Skull Crusher", src: "https://www.mboxdrive.com/Skulls-SkullCrusher.mp3" },
  { name: "Bone Breaker", src: "https://www.mboxdrive.com/Skulls-BoneBreaker.mp3" },
  { name: "Grave Robber", src: "https://www.mboxdrive.com/Skulls-GraveRobber.mp3" },
];

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    setCurrentTrack((currentTrack + 1) % tracks.length);
    audioRef.current.src = tracks[(currentTrack + 1) % tracks.length].src;
    setIsPlaying(true);
    audioRef.current.play();
  };

  return (
    <Box bg="black" color="white">
      <VStack spacing={8} align="stretch">
        <Box h="70vh" bgImage="https://images.unsplash.com/photo-1598387993211-5c4c0fda4248?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWF2eSUyMG1ldGFsJTIwYmFuZCUyMHNrdWxscyUyMGxpdmUlMjBvbiUyMHN0YWdlfGVufDB8fHx8MTcxMzA1MTcyNHww&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" bgPosition="center">
          <VStack justify="center" align="center" h="100%" w="100%" bgGradient="linear(to-b, transparent, black)">
            <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxza3VsbHMlMjBtZXRhbCUyMGJhbmQlMjBsb2dvfGVufDB8fHx8MTcxMzA1MTcyNXww&ixlib=rb-4.0.3&q=80&w=1080" w="50%" />
            <Heading size="2xl">Welcome to the Skulls Official Site</Heading>
          </VStack>
        </Box>

        <Box px={8}>
          <VStack spacing={8} align="start">
            <Text fontSize="xl">Skulls is a heavy metal band from Los Angeles known for their intense live shows and hard-hitting songs. With face-melting guitar riffs, pounding drums, and fierce vocals, Skulls delivers pure adrenaline-fueled metal.</Text>

            <HStack>
              <Link href="/tour">
                <Button leftIcon={<FaTicketAlt />} size="lg" colorScheme="red">
                  Tour Dates
                </Button>
              </Link>
              <Link href="/store">
                <Button leftIcon={<FaShoppingCart />} size="lg" colorScheme="gray">
                  Merch Store
                </Button>
              </Link>
            </HStack>

            <Box>
              <Heading size="lg" mb={4}>
                Listen to Skulls
              </Heading>
              <HStack spacing={8} align="center">
                <VStack align="start">
                  {tracks.map((track, index) => (
                    <Text
                      key={track.name}
                      fontWeight={index === currentTrack ? "bold" : "normal"}
                      cursor="pointer"
                      onClick={() => {
                        setCurrentTrack(index);
                        audioRef.current.src = track.src;
                        setIsPlaying(true);
                        audioRef.current.play();
                      }}
                    >
                      {track.name}
                    </Text>
                  ))}
                </VStack>
                <HStack spacing={4}>
                  <Button leftIcon={isPlaying ? <FaPause /> : <FaPlay />} onClick={togglePlay} size="lg" colorScheme="red">
                    {isPlaying ? "Pause" : "Play"}
                  </Button>
                  <Button rightIcon={<FaPlay />} onClick={playNext} size="lg" variant="outline" colorScheme="red">
                    Next
                  </Button>
                </HStack>
              </HStack>
              <audio ref={audioRef} onEnded={playNext} />
            </Box>
          </VStack>
        </Box>

        <Divider borderColor="gray.700" />

        <HStack px={8} py={4} spacing={8} justify="space-between">
          <HStack spacing={4}>
            <Link href="https://facebook.com/skullsband">
              <FaFacebook size={32} />
            </Link>
            <Link href="https://instagram.com/skullsband">
              <FaInstagram size={32} />
            </Link>
            <Link href="https://youtube.com/skullsband">
              <FaYoutube size={32} />
            </Link>
          </HStack>
          <HStack>
            <Text>Join our mailing list</Text>
            <Link href="/signup">
              <FaEnvelope size={24} />
            </Link>
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Index;
