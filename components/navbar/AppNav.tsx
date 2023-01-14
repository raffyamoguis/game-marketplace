import React, { useState } from 'react';
import { Navbar, NavLink, Text } from '@mantine/core';
import {
  IconGauge,
  IconBrandStrava,
  IconSettings,
  IconBuildingStore,
} from '@tabler/icons';

interface AppNavProps {
  opened: boolean;
}

const data = [
  { icon: IconGauge, label: 'Home' },
  { icon: IconBuildingStore, label: 'Merchant' },
  {
    icon: IconBrandStrava,
    label: 'Transactions',
  },
  { icon: IconSettings, label: 'Settings' },
];

const AppNav: React.FC<AppNavProps> = ({ opened }) => {
  const [active, setActive] = useState(0);
  return (
    <Navbar
      p='md'
      hiddenBreakpoint='sm'
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
      {data.map((item, index) => (
        <NavLink
          key={item.label}
          active={index === active}
          label={item.label}
          icon={<item.icon size={16} stroke={1.5} />}
          onClick={() => setActive(index)}
        />
      ))}
    </Navbar>
  );
};

export default AppNav;
