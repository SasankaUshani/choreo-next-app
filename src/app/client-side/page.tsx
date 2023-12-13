'use client';

import TodoServiceInstance from '@/apiService/todos/todoService';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
// import { useRouter, withRouter } from 'next/router';
import { useEffect, useState } from 'react';
const ClientRenderedTabContent: React.FC = () => {
  // const router = useRouter();
  // useEffect(() => {
  //   const res = router.query;
  //   console.log('res', res);
  //   console.log(router);
  // }, [router]);

  setTimeout(async () => {
    const response = await TodoServiceInstance.getDetail({ postId: 1 });
    console.log('Client side response', response);
  }, 2000);

  const [upvoteCount, setUpvoteCount] = useState(0);
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" gutterBottom>
          Sample heading rendered in the client side
        </Typography>
        <Typography variant="h5" component="div"></Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          Content of the card
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => setUpvoteCount(upvoteCount + 1)}>
          {' '}
          {upvoteCount} Upvotes
        </Button>
      </CardActions>
    </Card>
  );
};

export default ClientRenderedTabContent;
