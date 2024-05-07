import axios from 'axios';
import { useState, useEffect } from 'react';

const instance = axios.create({
  baseURL: 'https://react-mini-projects-api.classbon.com',
});

const useAxios = (params) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const getFastFoodLists = async () => {
    try {
      const response = await instance.request(params);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    getFastFoodLists();
  }, [params.url]);

  return [data, error, loading];
};

export default useAxios;
