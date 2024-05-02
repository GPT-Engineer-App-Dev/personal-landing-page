import { Box, Flex, Heading, Text, HStack, Link, IconButton } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex as="header" justifyContent="space-between" alignItems="center" p={4} bg="gray.100" wrap="wrap">
        <Heading size="lg">GPT Engineer</Heading>
        <HStack as="nav" spacing={4} align="stretch" direction="row">
          <Link href="#about" p={2}>About</Link>
          <Link href="#projects" p={2}>Projects</Link>
          <Link href="#contact" p={2}>Contact</Link>
        </HStack>
      </Flex>
      <Flex direction="column" align="center" justify="center" minHeight="100vh" p={10} bg="gray.50">
        <Heading mb={4}>Welcome to GPT Engineer</Heading>
        <Text fontSize="xl" mb={6}>Creating web solutions with AI</Text>
      </Flex>
      <Box id="about" p={10} bg="white">
        <Heading size="lg" textAlign="center" mb={4}>About Me</Heading>
        <Text fontSize="md">I am a web developer specializing in modern, responsive web applications. My expertise includes AI-driven solutions.</Text>
      </Box>
      <Box id="projects" p={10} bg="gray.100">
        <Heading size="lg" textAlign="center" mb={4}>Projects</Heading>
        <Text fontSize="md">Here are some of the projects I've worked on. They range from small personal tools to large-scale enterprise applications.</Text>
      </Box>
      <Box id="contact" p={10} bg="white">
        <Heading size="lg" textAlign="center" mb={4}>Contact</Heading>
        <Flex justify="center" gap="20px">
          <IconButton aria-label="GitHub" icon={<FaGithub />} />
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} />
          <IconButton aria-label="Email" icon={<FaEnvelope />} />
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;