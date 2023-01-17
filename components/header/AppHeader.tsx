import React from 'react';
import { Group } from '@mantine/core';

import RightSection from './RightSection';
import logo from '../../assets/images/logo-no-background.png';
import appHeaderstyle from './appheader.module.css';
import SearchBar from './SearchBar';
import LeftSection from './LeftSection';

const AppHeader: React.FC = () => {
  return (
    <Group position='apart' sx={{ height: '100%' }} px={20}>
      <LeftSection />
      <SearchBar />
      <RightSection />
    </Group>
  );
};

export default AppHeader;
