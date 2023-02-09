import React from 'react';
import {
  Text,
  Card,
  Image,
  Group,
  Badge,
  Menu,
  ActionIcon,
  Avatar,
  SimpleGrid,
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
import {
  useDeviceSize,
  isDeviceSM,
  isDeviceXS,
} from '../../hooks/useDeviceSize';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const imagesData = [
  {
    src: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    label: 'Image 1',
  },
  {
    src: 'https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    label: 'Image 1',
  },
  {
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80',
    label: 'Image 1',
  },
  {
    src: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    label: 'Image 1',
  },
];

const HomeCard = () => {
  const [width] = useDeviceSize();

  const checkDeviceVP = () => {
    if (isDeviceXS(width)) {
      return 1;
    }
    if (isDeviceSM(width)) {
      return 2;
    }
    return 3;
  };

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

      <Text size='sm' color='dimmed' mb='sm'>
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Text>

      <PhotoProvider>
        <SimpleGrid cols={checkDeviceVP()} spacing={4}>
          {imagesData.map((image: any, index: number) => (
            <PhotoView key={index} src={image.src}>
              <Image
                src={image.src}
                alt={image.label}
                fit='fill'
                height={200}
              />
            </PhotoView>
          ))}
        </SimpleGrid>
      </PhotoProvider>

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

export default HomeCard;
