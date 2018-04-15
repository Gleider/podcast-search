import { expect } from 'chai';
import { search, top, tags, tagName, info } from '../src/main';

describe('Podcast Search', () => {
  describe('smoke tests', () => {
    //search name podcast -> https://gpodder.net/search.json?q=nerdcast
    //search top podcasts -> https://gpodder.net/toplist/50.json
    //search tags -> https://gpodder.net//api/2/tags/1000.json
    //search podcasts using tag name -> https://gpodder.net/api/2/tag/technology/10.json
    //search info podcast with link program -> https://gpodder.net/api/2/data/podcast.json?url=http://jovemnerd.ig.com.br/categoria/nerdcast/feed/rss/

    it('should exist the search method', () => {
      expect(search).to.exist;
    });

    it('should exist the top method', () => {
      expect(top).to.exist;
    });

    it('should exist the tags method', () => {
      expect(tags).to.exist;
    });

    it('should exist the tagName method', () => {
      expect(tagName).to.exist;
    });

    it('should exist the info method', () => {
      expect(info).to.exist;
    })
  });
})