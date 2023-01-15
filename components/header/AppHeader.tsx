import React from 'react';
import { Image, Group, Anchor, Input, ActionIcon, Text } from '@mantine/core';
import {
  IconSearch,
  IconBell,
  IconMessage2,
  IconMoonStars,
} from '@tabler/icons';
import logo from '../../assets/images/logo-no-background.png';

const headerIcons = [
  { icon: IconBell },
  { icon: IconMessage2 },
  { icon: IconMoonStars },
];

const AppHeader: React.FC = () => {
  return (
    <Group position='apart' style={{ height: '100%', alignItems: 'center' }}>
      <Image
        src={logo.src}
        alt='Game account marketplace logo'
        width={125}
        height={25}
        fit='contain'
      />

      <Input
        style={{ width: '500px' }}
        icon={<IconSearch size={20} />}
        placeholder='Search..'
        size='md'
        radius='xl'
      />

      <Group>
        <Text>Account Type</Text>
        {headerIcons.map((header: any, idx) => (
          <Anchor key={idx}>
            <ActionIcon>{<header.icon />}</ActionIcon>
          </Anchor>
        ))}
      </Group>
    </Group>
  );
};

export default AppHeader;
