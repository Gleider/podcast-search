export const search = (podcast) => {
  if (podcast === undefined || podcast === null) {
    return [];
  }

  const str = podcast.split(' ').join('%20');
  return fetch(`https://gpodder.net/search.json?q=${str}`).then(data => data.json());
};

export const top = (value = 10) => fetch(`https://gpodder.net/toplist/${value}.json`).then(data => data.json());


export const listTags = (value = 10) => fetch(`https://gpodder.net//api/2/tags/${value}.json`);

export const tagName = () => {};

export const info = () => {};
