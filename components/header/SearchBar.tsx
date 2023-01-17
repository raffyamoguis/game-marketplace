import React from 'react';
import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons';

const SearchBar: React.FC = () => {
  return (
    <TextInput
      sx={{ width: '400px' }}
      placeholder='Search'
      radius='xl'
      icon={<IconSearch size={14} />}
    />
  );
};

export default SearchBar;
