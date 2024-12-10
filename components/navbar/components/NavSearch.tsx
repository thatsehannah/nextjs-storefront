'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const NavSearch = () => {
  //allows you to retrieve values from the query string (e.g., ?search=bed)
  const searchParams = useSearchParams();

  //updates the URL without causing a full page reload
  const { replace } = useRouter();

  //If the search query parameter exists in the URL (searchParams.get('search')), it is used as the initial value. Otherwise, the initial value is an empty string
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get('search')?.toString() || ''
  );

  //Ensures that the handleSearch function is called only after the user stops typing for 500 milliseconds.
  //Prevents frequent updates to the URL as the user types.
  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams); //creating a copy of the current query params
    if (value) {
      params.set('search', value); //if the search input value is not empty, update the search query parameter
    } else {
      params.delete('search'); //if the search input value is empty, remove the search query parameter
    }

    replace(`/products?${params.toString()}`); //updating the url with the new query parameters to either update or remove the search param
  }, 500);

  //keeps the searchTerm state in sync with the search query param in the URL
  useEffect(() => {
    if (!searchParams.get('search')) {
      setSearchTerm(''); //if the search param is removed from the URL, it resets the searchTerm state to an empty string
    }
  }, [searchParams.get('search')]);

  return (
    <Input
      type='search'
      placeholder='search product...'
      className='max-w-xs dark:bg-muted'
      value={searchTerm}
      onChange={(e) => {
        setSearchTerm(e.target.value); //updating the input state
        handleSearch(e.target.value); //updating the url
      }}
    />
  );
};

export default NavSearch;
