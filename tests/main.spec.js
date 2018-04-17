import chai, { expect } from 'chai';
import sinon from 'sinon';
import { search, top, tags, tagName, info } from '../src/main';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

describe('Podcast Search', () => {
  let fetchedStub;
  let promise;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });

    //search top podcasts -> https://gpodder.net/toplist/50.json
    //search tags -> https://gpodder.net//api/2/tags/1000.json
    //search podcasts using tag name -> https://gpodder.net/api/2/tag/technology/10.json
    //search info podcast with link program -> https://gpodder.net/api/2/data/podcast.json?url=http://jovemnerd.ig.com.br/categoria/nerdcast/feed/rss/

  describe('smoke tests', () => {
    
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
    });
  });
  describe('generic search', () => {
    it('should call fetch function', () => {
      const podcast = search('nerdcast');

      expect(fetchedStub).to.have.been.calledOnce;

    });

    it('should receive the correct url to fetch', () => {
      context('singular name', () => {
        const podcastNerdcast = search('nerdcast');
  
        expect(fetchedStub).to.have.been
          .calledWith('https://gpodder.net/search.json?q=nerdcast');
    

        const podcastMamilos = search('mamilos');
  
        expect(fetchedStub).to.have.been
          .calledWith('https://gpodder.net/search.json?q=nerdcast');

      });
      context('plural name', () => {
        const podcastNerdcast = search('fronteiras da ciência');
  
        expect(fetchedStub).to.have.been
          .calledWith('https://gpodder.net/search.json?q=fronteiras%20da%20ciência');
        

      });
      context('without params', () => {
        const podcast = search();

        expect(podcast).to.be.empty;
      })
    });
    it('should return the JSON data from the promise', () => {
      promise.resolves({body: 'json'});
      const podcast = search('nerdcast');

      expect(podcast.resolveValue).to.be.eql({body: 'json'});
    })
  });
  describe('list top podcasts', () => {
    it('should call fetch function', () => {
      const topPod = top(10);

      expect(fetchedStub).to.have.been.calledOnce;
    });
    it('should receive the correct url to fetch', () => {
        const topPod15 = top(15);
  
        expect(fetchedStub).to.have.been.calledWith('https://gpodder.net/toplist/15.json');

        const topPod50 = top(50);
        expect(fetchedStub).to.have.been.calledWith('https://gpodder.net/toplist/50.json');

        const topPod = top();

        expect(fetchedStub).to.have.been.calledWith('https://gpodder.net/toplist/10.json');

    });

    it('should return the JSON data from the promise', () => {
      promise.resolves({body: 'json'});
      const topPod = top(50);

      expect(topPod.resolveValue).to.be.eql({body: 'json'});
    })
  })
});