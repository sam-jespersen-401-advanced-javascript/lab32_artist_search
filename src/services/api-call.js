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

const fetchReleases = (id, page) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json&limit=5&offset=${page}`)
    .then(res => res.json())
    .then(results => {
      return [results['release-count'], results.releases.map(release => {
        return {
          title: release.title,
          date: release.date,
          id: release.id,
        };
      })];
    });
};

const fetchCoverArt = () => {
  return fetch('http://coverartarchive.org/release/05e25f83-7e4c-406b-b45b-13a978809fec/front')
    .then(res => res.json())
    .then(console.log());
};

export { fetchArtist, fetchReleases, fetchCoverArt };

