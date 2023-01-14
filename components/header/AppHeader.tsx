import React from 'react';
import { Image, Group, Anchor, Input, ActionIcon, Text } from '@mantine/core';
import {
  IconSearch,
  IconBell,
  IconMessage2,
  IconMoonStars,
} from '@tabler/icons';
import logo from '../../assets/images/logo-no-background.png';

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
        <Anchor>
          <ActionIcon radius='xl' variant='transparent'>
            <IconBell />
          </ActionIcon>
        </Anchor>
        <Anchor>
          <ActionIcon radius='xl' variant='transparent'>
            <IconMessage2 />
          </ActionIcon>
        </Anchor>
        <Anchor>
          <ActionIcon radius='xl' variant='transparent'>
            <IconMoonStars />
          </ActionIcon>
        </Anchor>
      </Group>
    </Group>
  );
};

export default AppHeader;
