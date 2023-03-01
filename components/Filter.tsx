import React from 'react';
import { Button, Group, Select } from '@mantine/core';
import { useDeviceSize, isDeviceSM } from '../hooks/useDeviceSize';

const Filter: React.FC = () => {
  const [width] = useDeviceSize();

  if (isDeviceSM(width)) {
    return (
      <Select
        placeholder='Filter'
        mt='xs'
        size='xs'
        radius='lg'
        data={[
          { value: 'Genshin Impact', label: 'Genshin Impact' },
          { value: 'Mobile Legends', label: 'Mobile Legends' },
          { value: 'Call of Duty:Mobile', label: 'Call of Duty:Mobile' },
          { value: 'Clash of Clans', label: 'Clash of Clans' },
        ]}
      />
    );
  }
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
