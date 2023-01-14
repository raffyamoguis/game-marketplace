import React from 'react';
import { Aside, MediaQuery, Text } from '@mantine/core';

const AppSideNav: React.FC = () => {
  return (
    <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
      <Aside p='md' hiddenBreakpoint='sm' width={{ sm: 200, lg: 300 }}>
        <Text>Application sidebar --</Text>
      </Aside>
    </MediaQuery>
  );
};

export default AppSideNav;
