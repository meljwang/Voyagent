import axios from 'axios';

const URL =
  "https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary";

const options = {
  params: {
    tr_longitude: "109.262909",
    tr_latitude: "12.346705",
    bl_longitude: "109.095887",
    bl_latitude: "12.113245",
  },
  headers: {
    "X-RapidAPI-Key": "36825b40fdmsh6f0cc0782c975a0p13afbfjsn56e1d59dcda1",
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};

const getPlacesData = async () => {
    try {
        const {data: {data}}= await axios.get(URL, options);
        return data;
    } catch (error) {
        console.log(error)
    }
}