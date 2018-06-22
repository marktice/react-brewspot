import axios from './init';

async function fetchBeers() {
  try {
    const response = await axios.get('/beers');
    return response.data;
  } catch (error) {
    return error;
  }
}

export default fetchBeers;
