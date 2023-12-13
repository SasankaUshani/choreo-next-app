import { Suspense } from 'react';
import { ImageList, ImageListItem, ListItem, Stack } from '@mui/material';

type Item = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

async function getData() {
  const res = await fetch('https://reqres.in/api/users?page=2');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
export default async function About() {
  const response = await getData();
  // console.log('data', response);

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {response.data.map((item: Item) => (
          <ImageListItem key={item.avatar}>
            <img
              srcSet={`${item.avatar}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.avatar}?w=164&h=164&fit=crop&auto=format`}
              alt={item.first_name}
              loading="lazy"
            />
            <div>{item.first_name}</div>
          </ImageListItem>
        ))}
      </ImageList>
    </Suspense>
  );
  // return <p>Data fetched on the server: {data?.data[0].email}</p>;
}
