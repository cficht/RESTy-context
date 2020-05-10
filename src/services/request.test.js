/* eslint-disable no-undef */
import { fetchResponse } from './request';

describe('fetchResponse service', () => {

  it('get request', () => {
    global.fetch = jest.fn(() => Promise.resolve({
      headers: {
        entries: () => ['cache-control', 'public, max-age=60, s-maxage=60', 'content-length', '577', 'content-type', 'application/json; charset=utf-8']
      },
      json: () => Promise.resolve()
    }));

    return fetchResponse('https://api.github.com/users/cficht', 'GET', {}, null)
      .then(() => {
        expect(global.fetch).toHaveBeenCalledWith('https://api.github.com/users/cficht', {
          method: 'GET',
          headers: {},
          body: null
        });
      });
  });

  it('post request', () => {
    global.fetch = jest.fn(() => Promise.resolve({
      headers: {
        entries: () => ['cache-control', 'public, max-age=60, s-maxage=60', 'content-length', '577', 'content-type', 'application/json; charset=utf-8']
      },
      json: () => Promise.resolve()
    }));

    return fetchResponse('http://fresh-track-staging.herokuapp.com/api/v1/auth/signup', 'POST', { 'username': 'bill' })
      .then(() => {
        expect(global.fetch).toHaveBeenCalledWith('http://fresh-track-staging.herokuapp.com/api/v1/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: { username: 'bill' }
        });
      });
  });

  // PUT
  // PATCH
  // DELETE
  // TOKEN

});
