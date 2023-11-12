import { openInNewTab } from '@/utils/utils';
import { Box, BoxComponentProps, Button, Text } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

function Experience(props: BoxComponentProps) {
  return (
    <Box {...props}>
      <Text>
        I have a bachelor&apos;s degree in computer science from&nbsp;
          <Button onClick={() => openInNewTab('https://www.lsu.edu/')} size='compact-xs' variant='light' color='grape' rightSection={<IconExternalLink size={15} />}>
            Louisiana State University
          </Button>&nbsp;.
        Over the last few years, I&apos;ve gained experience creating large-scale systems with technologies such as Express, React and Next.js, Flutter, Google Cloud, and more.
      </Text>
    </Box>
  )
}

export default Experience;