const fetchArtist = (search) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=25`)
    .then(res => res.json())
    .then(results => {
      return results.artists.map(artist => {
        return { name: artist.name,
          type: artist.type,
          id: artist.id,
          tags: artist.tags,
          gender: artist.gender
        };
      });
    });
};

export { fetchArtist };
