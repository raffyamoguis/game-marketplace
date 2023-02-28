import React from 'react';
import { Button, Group } from '@mantine/core';

const Filter: React.FC = () => {
  return (
    <Group spacing={5} mt='md'>
      <Button variant='light' color='orange' radius='lg' size='xs'>
        Genshin Impact
      </Button>
      <Button variant='light' color='gray' radius='lg' size='xs'>
        Mobile Legends
      </Button>
      <Button variant='light' color='gray' radius='lg' size='xs'>
        Call of Duty:Mobile
      </Button>
      <Button variant='light' color='gray' radius='lg' size='xs'>
        League: Wild Rift
      </Button>
      <Button variant='light' color='gray' radius='lg' size='xs'>
        Call of Duty: Warzone
      </Button>
      <Button variant='light' color='gray' radius='lg' size='xs'>
        Honkai Star:Rail
      </Button>
    </Group>
  );
};

export default Filter;