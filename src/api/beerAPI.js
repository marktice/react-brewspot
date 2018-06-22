import axios from './init';

const fetchBeers = async () => {
  try {
    const response = await axios.get('/beers');
    return response.data;
  } catch (error) {
    return error;
  }
};

const fetchBeer = async (id) => {
  try {
    const response = await axios.get(`/beers/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

const addBeer = async (payload) => {
  try {
    const response = await axios.post('/beers', payload);
    return response.data;
  } catch (error) {
    return error;
  }
};

const deleteBeer = async (id) => {
  try {
    const response = await axios.delete(`/beers/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export default { fetchBeers, fetchBeer, addBeer, deleteBeer };
