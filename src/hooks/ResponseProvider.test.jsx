import { reducer } from './ResponseProvider';

describe('Response Provider reducer', () => {

  it('handles SET_URL', () => {
    const state = {
      url: ''
    };
    const action = {
      type: 'SET_URL',
      payload: 'https://hey-arnold-api.herokuapp.com/api/v1/characters'
    };
    const newState = reducer(state, action);
    expect(newState).toEqual({
      url: 'https://hey-arnold-api.herokuapp.com/api/v1/characters'
    });
  });

  it('handles ADD_REQUESTS', () => {
    const state = {
      requests: [ 
        { 
          url: 'https://api.dropboxapi.com/2/files/get_temporary_link',
          method: 'POST',
          body: '{ "path": "/thing.wav" }'
        },
        { 
          url: 'https://api.github.com/users/cficht',
          method: 'GET',
          body: ''
        }
      ]
    };
    const action = {
      type: 'ADD_REQUESTS',
      payload:         
      { 
        url: '"https://hey-arnold-api.herokuapp.com/api/v1/characters"',
        method: 'GET',
        body: ''
      }
    };
    const newState = reducer(state, action);
    expect(newState).toEqual({
      requests: [ 
        { 
          url: 'https://api.dropboxapi.com/2/files/get_temporary_link',
          method: 'POST',
          body: '{ "path": "/thing.wav" }'
        },
        { 
          url: 'https://api.github.com/users/cficht',
          method: 'GET',
          body: ''
        },
        { 
          url: '"https://hey-arnold-api.herokuapp.com/api/v1/characters"',
          method: 'GET',
          body: ''
        }
      ]
    });
  });

  it('handles LOAD_REQUESTS', () => {
    const state = {
      requests: []
    };
    const storedRequests = [ 
      { 
        url: 'https://api.dropboxapi.com/2/files/get_temporary_link',
        method: 'POST',
        body: '{ "path": "/thing.wav" }'
      },
      { 
        url: 'https://api.github.com/users/cficht',
        method: 'GET',
        body: ''
      }
    ];
    const action = {
      type: 'LOAD_REQUESTS',
      payload: storedRequests
    };
    const newState = reducer(state, action);
    expect(newState).toEqual({
      requests: [ 
        { 
          url: 'https://api.dropboxapi.com/2/files/get_temporary_link',
          method: 'POST',
          body: '{ "path": "/thing.wav" }'
        },
        { 
          url: 'https://api.github.com/users/cficht',
          method: 'GET',
          body: ''
        }
      ]
    });
  });

  it('handles RESET_REQUESTS', () => {
    const state = {
      requests: [ 
        { 
          url: 'https://api.dropboxapi.com/2/files/get_temporary_link',
          method: 'POST',
          body: '{ "path": "/thing.wav" }'
        },
        { 
          url: 'https://api.github.com/users/cficht',
          method: 'GET',
          body: ''
        }
      ]
    };
    const action = {
      type: 'RESET_REQUESTS',
      payload: []
    };
    const newState = reducer(state, action);
    expect(newState).toEqual({
      requests: []
    });
  });

});
