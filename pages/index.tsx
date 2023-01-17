import {
  Paper,
  Text,
  Card,
  Image,
  Group,
  Badge,
  Button,
  Menu,
  ActionIcon,
  Avatar,
} from '@mantine/core';
import {
  IconDots,
  IconEye,
  IconFileZip,
  IconTrash,
  IconHeart,
  IconMessageCircle2,
  IconShoppingCart,
  IconCirclePlus,
} from '@tabler/icons';
import Layout from '../components/layout/Layout';

export default function Home() {
  return (
    <Layout>
      <Paper px='md'>
        <Text>Home</Text>

        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </Paper>
    </Layout>
  );
}

const HomeCard = () => {
  return (
    <Card shadow='sm' p='lg' radius='md' withBorder mt={20}>
      <Card.Section withBorder inheritPadding py='sm'>
        <Group position='apart'>
          <Group>
            <Avatar src='https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4' />
            <Text>John Doe</Text>
          </Group>
          <Menu withinPortal position='bottom-end' shadow='sm'>
            <Menu.Target>
              <ActionIcon>
                <IconDots size={16} />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item icon={<IconFileZip size={14} />}>
                Download zip
              </Menu.Item>
              <Menu.Item icon={<IconEye size={14} />}>Preview all</Menu.Item>
              <Menu.Item icon={<IconTrash size={14} />} color='red'>
                Delete all
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Card.Section>

      <Group position='apart' mt='md' mb='xs'>
        <Text weight={500}>Norway Fjord Adventures</Text>
        <Badge color='pink' variant='light'>
          On Sale
        </Badge>
      </Group>

      <Text size='sm' color='dimmed'>
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Text>
      <Image
        src='https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'
        height={160}
        alt='Norway'
      />

      <Group position='apart' mt={30}>
        <ActionIcon>
          <IconHeart color='red' />
        </ActionIcon>
        <ActionIcon>
          <IconMessageCircle2 color='blue' />
        </ActionIcon>
        <ActionIcon>
          <IconCirclePlus color='orange' />
        </ActionIcon>
      </Group>
    </Card>
  );
};
