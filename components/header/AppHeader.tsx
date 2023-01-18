import React from 'react';
import { Group } from '@mantine/core';

import RightSection from './RightSection';

import appHeaderstyle from './appheader.module.css';
import SearchBar from './SearchBar';
import LeftSection from './LeftSection';
import { useDeviceSize, isDeviceSM } from '../../hooks/useDeviceSize';

const AppHeader: React.FC = () => {
  const [width] = useDeviceSize();
  return (
    <Group
      position='apart'
      sx={{ height: '100%' }}
      px={isDeviceSM(width) ? 0 : 20}
    >
      <LeftSection />
      <SearchBar />
      <RightSection />
    </Group>
  );
};

export default AppHeader;
