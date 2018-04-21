import API_URL from './config';

export const search = (podcast) => {
  if (podcast === undefined || podcast === null) {
    return [];
  }
  const str = podcast.split(' ').join('%20');
  return fetch(`${API_URL}/search.json?q=${str}`)
    .then(data => data.json());
};

export const top = (value = 10) => fetch(`${API_URL}/toplist/${value}.json`)
  .then(data => data.json());


export const listTags = (value = 10) => fetch(`${API_URL}/api/2/tags/${value}.json`)
  .then(data => data.json());

export const tagName = (tag, quant = 10) => {
  if (tag) {
    return fetch(`${API_URL}/api/2/tag/${tag}/${quant}.json`)
      .then(data => data.json());
  }
  return [];
};

export const info = (url) => {
  if (url) {
    return fetch(`${API_URL}/api/2/data/podcast.json?url=${url}`)
      .then(data => data.json());
  }
  return [];
};
