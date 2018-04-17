export const search = (podcast) => {
  if (podcast === undefined || podcast === null) {
    return [];
  }

  const str = podcast.split(' ').join('%20');
  return fetch(`https://gpodder.net/search.json?q=${str}`).then(data => data.json());
};

export const top = (value = 10) => {
  return fetch(`https://gpodder.net/toplist/${value}.json`).then(data => data.json());
};

export const tags = () => {};

export const tagName = () => {};

export const info = () => {};
