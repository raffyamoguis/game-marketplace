import React from 'react';
import { TextInput, MediaQuery } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import { useDeviceSize } from '../../hooks/useDeviceSize';

const SearchBar: React.FC = () => {
  const [width] = useDeviceSize();

  const dynamicWidth = () => {
    if (width < 375) {
      return 130;
    }

    if (width <= 461) {
      return 200;
    }

    return 300;
  };
  return (
    <>
      <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
        <TextInput
          sx={{ width: `${dynamicWidth()}px` }}
          placeholder='Search'
          radius='xl'
          icon={<IconSearch size={14} />}
        />
      </MediaQuery>
      <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
        <TextInput
          sx={{ width: '400px' }}
          placeholder='Search'
          radius='xl'
          icon={<IconSearch size={14} />}
        />
      </MediaQuery>
    </>
  );
};

export default SearchBar;
