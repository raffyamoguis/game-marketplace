import React from 'react';
import { Navbar, NavLink } from '@mantine/core';
import Link from 'next/link';
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
  { icon: IconGauge, label: 'Home', link: '/' },
  { icon: IconBuildingStore, label: 'Merchant', link: '/merchant' },
  {
    icon: IconBrandStrava,
    label: 'Transactions',
    link: '/transactions',
  },
  { icon: IconSettings, label: 'Settings', link: '/settings' },
];

const AppNav: React.FC<AppNavProps> = ({ opened }) => {
  return (
    <Navbar
      p='md'
      hiddenBreakpoint='sm'
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
      {data.map((item) => (
        <NavLink
          key={item.label}
          component={Link}
          href={item.link}
          label={item.label}
          icon={<item.icon size={16} stroke={1.5} />}
        />
      ))}
    </Navbar>
  );
};

export default AppNav;
