import { Paper, Text } from '@mantine/core';
import Layout from '../components/layout/Layout';
import HomeCard from '../components/cards/HomeCard';

export default function Home() {
  return (
    <Layout>
      <Paper px='md'>
        <Text>Home</Text>
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </Paper>
    </Layout>
  );
}
