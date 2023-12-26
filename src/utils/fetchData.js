export const exerciseOptions = {
  method: "GET",
  headers: {
    'X-RapidAPI-Key': 'fdf034fa50mshaed4732c3ed50a9p1a0222jsne5b5e60f4b60',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    'X-RapidAPI-Key': 'fdf034fa50mshaed4732c3ed50a9p1a0222jsne5b5e60f4b60',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
