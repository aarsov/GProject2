export const exerciseOptions= {
    method: 'GET',
    // params: {
    
    //   offset : '0'
    // },
    headers: {
      'X-RapidAPI-Key': 'b53f37ab55msh96ca8df4ef65f67p1b81e5jsn1a9c7c72ade8',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
    },
  };
export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}