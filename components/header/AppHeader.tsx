import React from 'react';
import { Image, Group, Anchor, Input, ActionIcon, Text } from '@mantine/core';
import {
  IconSearch,
  IconBell,
  IconMessage2,
  IconMoonStars,
} from '@tabler/icons';
import logo from '../../assets/images/logo-no-background.png';
import appHeaderstyle from './appheader.module.css';
import { useDeviceSize, isDeviceMD } from '../../hooks/useDeviceSize';

const headerIcons = [
  { icon: IconBell },
  { icon: IconMessage2 },
  { icon: IconMoonStars },
];

const AppHeader: React.FC = () => {
  const [width] = useDeviceSize();
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
        className={appHeaderstyle.searchInput}
        icon={<IconSearch size={20} />}
        placeholder='Search..'
        size={isDeviceMD(width) ? 'xs' : 'md'}
        radius='xl'
      />

      <Group>
        <Text>Account Type</Text>
        {headerIcons.map((header: any, idx) => (
          <Anchor key={idx}>
            <ActionIcon>
              {<header.icon size={isDeviceMD(width) ? 18 : null} />}
            </ActionIcon>
          </Anchor>
        ))}
      </Group>
    </Group>
  );
};

export default AppHeader;
