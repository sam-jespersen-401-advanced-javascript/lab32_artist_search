const fetchArtist = (search, page) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=5&offset=${page}`)
    .then(res => res.json())
    .then(results => {
      return [results.count,  results.artists.map(artist => {
        return { name: artist.name,
          type: artist.type,
          id: artist.id,
          gender: artist.gender
        };
      })];
    });
};

export { fetchArtist };
