import { Box, Flex } from '@mantine/core';
import { RefObject } from 'react';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import PhotoDisplay from '../PhotoDisplay/PhotoDisplay';
import Projects from '../Projects/Projects';
import SkillsBar from '../SkillsBar/SkillsBar';
import Welcome from '../Welcome/Welcome';

type MainContentProps = {
  scrollRefObject?: RefObject<HTMLDivElement>;
}

function MainContent({ scrollRefObject }: MainContentProps) {
  return (
    <Flex justify='center' w={'inherit'}>
      <Box w={750} p={25}>
        <Welcome mb={20} />
        <PhotoDisplay />
        <SkillsBar mt={20} style={{ justifyContent: 'center' }} />
        <Experience my={35} />
        <Projects />
        <Contact my={35} scrollRefObject={scrollRefObject} />
      </Box>
    </Flex>
  )
}

export default MainContent;