import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': '63112d7b17mshd01785bc66d6716p1a43d2jsn0fad5470d03f'
  }
};

export const getPlacesData = async () => {
  try {
    const { data : { data }} = await axios.get(URL,options);
      
  } catch (error) {
    console.log(error);
  }
}

