export const search = (podcast) => {
  if (podcast === undefined || podcast === null) {
    fetch('');
    return [];
  }

  const str = podcast.split(' ').join('%20');
  return fetch(`https://gpodder.net/search.json?q=${str}`).then(data => data.json());
};

export const top = () => {};

export const tags = () => {};

export const tagName = () => {};

export const info = () => {};
