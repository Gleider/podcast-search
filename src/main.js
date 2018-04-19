export const search = (podcast) => {
  if (podcast === undefined || podcast === null) {
    return [];
  }

  const str = podcast.split(' ').join('%20');
  return fetch(`https://gpodder.net/search.json?q=${str}`).then(data => data.json());
};

export const top = (value = 10) => fetch(`https://gpodder.net/toplist/${value}.json`)
  .then(data => data.json());


export const listTags = (value = 10) => fetch(`https://gpodder.net//api/2/tags/${value}.json`)
  .then(data => data.json());

export const tagName = (tag, quant = 10) => {
  if (tag) {
    return fetch(`https://gpodder.net/api/2/tag/${tag}/${quant}.json`)
      .then(data => data.json);
  }
  return [];
};

export const info = (url) => {
  if (url) {
    return fetch(`https://gpodder.net/api/2/data/podcast.json?url=${url}`)
      .then(data => data.json);
  }
  return [];
};
