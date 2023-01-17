import React from 'react';
import { Group, ThemeIcon, Tooltip } from '@mantine/core';
import { IconBell, IconMessage2, IconSettings } from '@tabler/icons';

const headerIcons = [
  { label: 'Notification', icon: IconBell },
  { label: 'Messages', icon: IconMessage2 },
  { label: 'Settings', icon: IconSettings },
];

const RightSection: React.FC = () => {
  return (
    <Group spacing='xs'>
      {headerIcons.map((data: any) => (
        <Tooltip
          key={data.label}
          label={data.label}
          color='gray'
          position='bottom'
          withArrow
        >
          <ThemeIcon variant='light' radius='lg' size='lg' color='gray'>
            {<data.icon size={20} />}
          </ThemeIcon>
        </Tooltip>
      ))}
    </Group>
  );
};

export default RightSection;
