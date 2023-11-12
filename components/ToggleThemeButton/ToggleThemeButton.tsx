'use client';

import { ActionIcon, ActionIconProps, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';
import cx from 'clsx';
import classes from './ToggleThemeButton.module.css';

function ToggleThemeButton(props: ActionIconProps) {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <ActionIcon
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      variant="default"
      size="lg"
      aria-label="Toggle color scheme"
      {...props}
    >
      <IconSun className={cx(classes.icon, classes.light)} stroke='1.5px' />
      <IconMoon className={cx(classes.icon, classes.dark)} stroke='1.5px' />
    </ActionIcon>
  )
}

export default ToggleThemeButton;