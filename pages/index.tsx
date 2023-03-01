import { Paper, Text, Divider } from '@mantine/core';
import Layout from '../components/layout/Layout';
import HomeCard from '../components/cards/HomeCard';
import Filter from '../components/Filter';

export default function Home() {
  return (
    <Layout>
      <Paper px='md'>
        <Text>Home</Text>
        <Divider />
        <Filter />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </Paper>
    </Layout>
  );
}
