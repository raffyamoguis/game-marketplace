import React, { useState } from 'react';
import {
  AppShell,
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';
import AppNav from '../navbar/AppNav';
import AppSideNav from '../sidenav/AppSideNav';
import AppHeader from '../header/AppHeader';

type Props = {
  children: JSX.Element;
};

const Layout: React.FC<Props> = ({ children }) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <>
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint='sm'
        asideOffsetBreakpoint='sm'
        navbar={<AppNav opened={opened} />}
        aside={<AppSideNav />}
        header={
          <Header height={{ base: 50, md: 70 }} p='md'>
            {/* <div
              style={{ display: 'flex', alignItems: 'center', height: '100%' }}
            > */}
            <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size='sm'
                color={theme.colors.gray[6]}
                mr='xl'
              />
            </MediaQuery>

            <AppHeader />
            {/* </div> */}
          </Header>
        }
      >
        {children}
      </AppShell>
    </>
  );
};

export default Layout;
