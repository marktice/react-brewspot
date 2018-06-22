import axios from './init';

const fetchBeers = async () => {
  try {
    const response = await axios.get('/beers');
    return response.data;
  } catch (error) {
    return error;
  }
};

export default { fetchBeers };
