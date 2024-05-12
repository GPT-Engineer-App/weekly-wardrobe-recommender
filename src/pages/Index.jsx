import { useState } from 'react';
import { Box, Button, Container, FormControl, FormLabel, Input, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { FaCalendarAlt, FaCloudSun, FaHeart, FaSave } from 'react-icons/fa';

const Index = () => {
  const [clothingItems, setClothingItems] = useState('');
  const [preferences, setPreferences] = useState('');

  const handleClothingChange = (event) => {
    setClothingItems(event.target.value);
  };

  const handlePreferencesChange = (event) => {
    setPreferences(event.target.value);
  };

  const generateOutfits = () => {
    console.log('Generating outfits based on:', clothingItems, preferences);
    // Placeholder for outfit generation logic
  };

  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={8} w="full">
        <Text fontSize="3xl" fontWeight="bold">Outfit Recommender for the Week</Text>
        <SimpleGrid columns={2} spacing={10} w="full">
          <Box>
            <FormControl>
              <FormLabel htmlFor='clothing-items'>Enter Your Clothing Items</FormLabel>
              <Input id='clothing-items' value={clothingItems} onChange={handleClothingChange} placeholder='List your items here' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel htmlFor='preferences'>Enter Your Preferences</FormLabel>
              <Input id='preferences' value={preferences} onChange={handlePreferencesChange} placeholder='Any specific preferences?' />
            </FormControl>
            <Button leftIcon={<FaCloudSun />} colorScheme="blue" mt={4} onClick={generateOutfits}>Generate Outfits</Button>
          </Box>
          <Box>
            <Text fontSize="xl" mb={2}><FaCalendarAlt /> This Week's Calendar</Text>
            {/* Placeholder for calendar view */}
            <Text>No data available</Text>
            <Button leftIcon={<FaSave />} colorScheme="green" mt={4}>Save Outfit</Button>
            <Button leftIcon={<FaHeart />} colorScheme="red" mt={4}>Favorite Outfit</Button>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;