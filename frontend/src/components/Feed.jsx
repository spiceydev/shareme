import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';

const Feed = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pins, setPins] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    if (categoryId) {
      const query = searchQuery(categoryId);
      client.fetch(query).then((data) => {
        setPins(data);
        setIsLoading(false);
      });
    } else {
      const query = feedQuery;
      client.fetch(query).then((data) => {
        setPins(data);
        setIsLoading(false);
      });
    }
  }, [categoryId]);

  if (isLoading)
    return <Spinner message="We are adding new pins to your feed!" />;
  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;
