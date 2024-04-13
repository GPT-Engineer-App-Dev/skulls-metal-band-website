import { Box, VStack, Heading, Text, Button, HStack, Link } from "@chakra-ui/react";

const TourDates = () => {
  const tourDates = [
    { date: "2024-06-15", venue: "The Rock Palace", city: "New York", ticketUrl: "https://example.com/tickets/newyork" },
    { date: "2024-06-20", venue: "Metal Arena", city: "Los Angeles", ticketUrl: "https://example.com/tickets/losangeles" },
    { date: "2024-07-01", venue: "Skullz Club", city: "Chicago", ticketUrl: "https://example.com/tickets/chicago" },
  ];

  return (
    <Box bg="black" color="white" py={8}>
      <VStack spacing={8} align="center">
        <Heading size="2xl">Catch Skulls on Their New Tour</Heading>
        <VStack spacing={4} align="stretch">
          {tourDates.map((date) => (
            <Box key={date.date} borderWidth={1} borderColor="gray.700" p={4}>
              <HStack justify="space-between">
                <Text>{date.date}</Text>
                <Text>{date.venue}</Text>
                <Text>{date.city}</Text>
                <Link href={date.ticketUrl}>
                  <Button colorScheme="red">Tickets</Button>
                </Link>
              </HStack>
            </Box>
          ))}
        </VStack>
        <Text>Don't miss your chance to experience Skulls live on their new tour! Get ready for an unforgettable night of heavy metal mayhem as Skulls unleashes their bone-crushing riffs and electrifying stage presence. Grab your tickets now and join the legion of Skulls fans for a wild ride you won't forget!</Text>
      </VStack>
    </Box>
  );
};

export default TourDates;
