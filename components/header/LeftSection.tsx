import React from 'react';
import Link from 'next/link';
import { Text, Group, Anchor, Avatar, MediaQuery } from '@mantine/core';
import logo from '../../assets/images/logo-1.png';

const LeftSection = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      <MediaQuery largerThan='md' styles={{ display: 'none' }}>
        <Avatar src={logo.src} alt='Game market place logo.' />
      </MediaQuery>
      <MediaQuery smallerThan='md' styles={{ display: 'none' }}>
        <Text color='orange' fw={700}>
          Game Account Marketplace
        </Text>
      </MediaQuery>

      <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
        <Group spacing='xs' sx={{ marginLeft: '2em' }}>
          <Anchor component={Link} href='#' underline={false} color='black'>
            Home
          </Anchor>
          <Anchor component={Link} href='#' underline={false} color='gray'>
            Merchant
          </Anchor>
        </Group>
      </MediaQuery>
    </div>
  );
};

export default LeftSection;
