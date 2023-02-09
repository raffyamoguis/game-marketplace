import React from 'react';
import {
  Group,
  ThemeIcon,
  Tooltip,
  MediaQuery,
  Menu,
  ActionIcon,
} from '@mantine/core';
import {
  IconBell,
  IconMessage2,
  IconSettings,
  IconCategory,
  IconHome,
  IconBasket,
} from '@tabler/icons';

const headerIcons = [
  { label: 'Notification', icon: IconBell },
  { label: 'Messages', icon: IconMessage2 },
  { label: 'Settings', icon: IconSettings },
];

const menuItems = [
  { label: 'Home', icon: IconHome },
  { label: 'Merchant', icon: IconBasket },
  { label: 'Notification', icon: IconBell },
  { label: 'Messages', icon: IconMessage2 },
  { label: 'Settings', icon: IconSettings },
];

const RightSection: React.FC = () => {
  return (
    <>
      <MediaQuery largerThan='md' styles={{ display: 'none' }}>
        <Menu offset={6} position='bottom-end' withArrow>
          <Menu.Target>
            <ActionIcon>
              <IconCategory />
            </ActionIcon>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Application</Menu.Label>
            {menuItems.map((menu: any) => (
              <Menu.Item key={menu.label} icon={<menu.icon size={14} />}>
                {menu.label}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      </MediaQuery>
      <MediaQuery smallerThan='md' styles={{ display: 'none' }}>
        <Group spacing='xs'>
          {headerIcons.map((data: any) => (
            <Tooltip
              key={data.label}
              label={data.label}
              color='gray'
              position='bottom'
              withArrow
            >
              <ThemeIcon variant='light' radius='lg' size='lg' color='gray'>
                {<data.icon size={20} />}
              </ThemeIcon>
            </Tooltip>
          ))}
        </Group>
      </MediaQuery>
    </>
  );
};

export default RightSection;
