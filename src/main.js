export const search = (podcast) => {
  if(podcast === undefined || podcast === null)
    return fetch('');

  const str = podcast.split(' ').join('%20');
 
  return fetch(`https://gpodder.net/search.json?q=${str}`);
}

export const top = () => {}

export const tags = () => {}

export const tagName = () => {}

export const info = () => {}