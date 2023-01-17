import React from 'react';
import { AppShell, Header, Container } from '@mantine/core';
import AppHeader from '../header/AppHeader';

type Props = {
  children: JSX.Element;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <AppShell
      padding='xs'
      header={
        <Header height={60} p='xs'>
          <AppHeader />
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Container>{children}</Container>
    </AppShell>
  );
};

export default Layout;
