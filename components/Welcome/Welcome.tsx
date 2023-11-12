import { openInNewTab } from '@/utils/utils';
import { Box, BoxComponentProps, Button, Stack, Text } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';


function Welcome(props: BoxComponentProps) {
  return (
    <Box {...props}>
      <Stack gap={15}>
        <Text size='md'>Welcome to my website</Text>
        <Text size='1.5rem' fw={700}>Hi I&apos;m Gabriel 👋</Text>
        <Text my={15} size='md'>
          I&apos;m a full stack developer, forward-thinker, and lifelong learner.
          I currently work as a contract developer primarily with&nbsp;
          <Button onClick={() => openInNewTab('https://www.parkzenapp.com/')} size='compact-xs' variant='light' rightSection={<IconExternalLink size={15} />}>
            ParkZen
          </Button>&nbsp;,
          where I develop user-first applications for clients nationwide.
        </Text>
      </Stack>
    </Box>
  )
}

export default Welcome;