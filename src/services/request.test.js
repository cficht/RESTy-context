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

  it('put request', () => {
    global.fetch = jest.fn(() => Promise.resolve({
      headers: {
        entries: () => ['cache-control', 'public, max-age=60, s-maxage=60', 'content-length', '577', 'content-type', 'application/json; charset=utf-8']
      },
      json: () => Promise.resolve()
    }));

    return fetchResponse('https://fresh-track-staging.herokuapp.com/api/v1/user/5e8fc19ee87e73001789b0d9', 'PUT', { 'soundcloudUsername': 'bill' })
      .then(() => {
        expect(global.fetch).toHaveBeenCalledWith('https://fresh-track-staging.herokuapp.com/api/v1/user/5e8fc19ee87e73001789b0d9', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: { soundcloudUsername: 'bill' }
        });
      });
  });

  it('patch request', () => {
    global.fetch = jest.fn(() => Promise.resolve({
      headers: {
        entries: () => ['cache-control', 'public, max-age=60, s-maxage=60', 'content-length', '577', 'content-type', 'application/json; charset=utf-8']
      },
      json: () => Promise.resolve()
    }));

    return fetchResponse('https://fresh-track-staging.herokuapp.com/api/v1/user/5e8fc19ee87e73001789b0d9', 'PATCH', { 'soundcloudUsername': 'bill' })
      .then(() => {
        expect(global.fetch).toHaveBeenCalledWith('https://fresh-track-staging.herokuapp.com/api/v1/user/5e8fc19ee87e73001789b0d9', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: { soundcloudUsername: 'bill' }
        });
      });
  });

  it('delete request', () => {
    global.fetch = jest.fn(() => Promise.resolve({
      headers: {
        entries: () => ['cache-control', 'public, max-age=60, s-maxage=60', 'content-length', '577', 'content-type', 'application/json; charset=utf-8']
      },
      json: () => Promise.resolve()
    }));

    return fetchResponse('https://fresh-track-staging.herokuapp.com/api/v1/user/5e8fc19ee87e73001789b0d9', 'DELETE', { 'soundcloudUsername': 'bill' })
      .then(() => {
        expect(global.fetch).toHaveBeenCalledWith('https://fresh-track-staging.herokuapp.com/api/v1/user/5e8fc19ee87e73001789b0d9', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: { soundcloudUsername: 'bill' }
        });
      });
  });

  it('post request with token', () => {
    global.fetch = jest.fn(() => Promise.resolve({
      headers: {
        entries: () => ['cache-control', 'public, max-age=60, s-maxage=60', 'content-length', '577', 'content-type', 'application/json; charset=utf-8']
      },
      json: () => Promise.resolve()
    }));

    const headers = 'Bearer sYuM2biPF5AAAAAAAAAA2AJbaaoyGRjh7V5iJGM7sIuA2x9qjIwN8_8QuzgincTX';
    return fetchResponse('https://api.dropboxapi.com/2/files/get_temporary_link', 'POST', { 'path': '/WW Drumloop 80bpm.wav' }, headers)
      .then(() => {
        expect(global.fetch).toHaveBeenCalledWith('https://api.dropboxapi.com/2/files/get_temporary_link', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer sYuM2biPF5AAAAAAAAAA2AJbaaoyGRjh7V5iJGM7sIuA2x9qjIwN8_8QuzgincTX',
            'Content-Type': 'application/json'
          },
          body: { path: '/WW Drumloop 80bpm.wav' }
        });
      });
  });

  it('get request with basic auth', () => {
    global.fetch = jest.fn(() => Promise.resolve({
      headers: {
        entries: () => ['cache-control', 'public, max-age=60, s-maxage=60', 'content-length', '577', 'content-type', 'application/json; charset=utf-8']
      },
      json: () => Promise.resolve()
    }));

    const headers = 'Basic chris:admin';
    return fetchResponse('https://api.dropboxapi.com/2/files/get_temporary_link', 'POST', { 'path': '/WW Drumloop 80bpm.wav' }, headers)
      .then(() => {
        expect(global.fetch).toHaveBeenCalledWith('https://api.dropboxapi.com/2/files/get_temporary_link', {
          method: 'POST',
          headers: {
            'Authorization': 'Basic chris:admin',
            'Content-Type': 'application/json'
          },
          body: { path: '/WW Drumloop 80bpm.wav' }
        });
      });
  });

});
