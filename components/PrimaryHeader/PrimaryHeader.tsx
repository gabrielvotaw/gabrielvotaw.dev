import { Button, Group, Space, Text } from '@mantine/core';
import ToggleThemeButton from '../ToggleThemeButton/ToggleThemeButton';

type PrimaryHeaderProps = {
  onButtonClick: () => void;
}

function PrimaryHeader({ onButtonClick }: PrimaryHeaderProps) {
  return (
    <Group justify='space-between' style={{ height: 'inherit' }}>
      <Group>
        <Space w='xs'></Space>
        <Text size='sm' ff='fantasy'>gabrielvotaw.dev</Text>
      </Group>
      <Group>
        <Button radius={9999} visibleFrom='xs' onClick={onButtonClick}>Let&apos;s chat</Button>
        <ToggleThemeButton />
        <Space w='xs'></Space>
      </Group>
    </Group>
  )
}

export default PrimaryHeader;