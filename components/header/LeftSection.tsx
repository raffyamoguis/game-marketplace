import React from 'react';
import Link from 'next/link';
import { Text, Group, Anchor, Button } from '@mantine/core';

const LeftSection = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      <Text color='orange' fw={700}>
        Game Account Marketplace
      </Text>
      <Group spacing='xs' sx={{ marginLeft: '2em' }}>
        <Anchor component={Link} href='#' underline={false} color='black'>
          Home
        </Anchor>
        <Anchor component={Link} href='#' underline={false} color='gray'>
          Merchant
        </Anchor>
      </Group>
    </div>
  );
};

export default LeftSection;
