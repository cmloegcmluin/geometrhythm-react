beforeEach(() => jest.resetModules());

const fetchHelper = require('../../src/helpers/fetchHelper').default;

test('fetch helper thinly wraps native fetch', () => {
  const mockFetch = jest.fn();
  window.fetch = mockFetch;
  fetchHelper.fetch('url', { method: 'POST' });

  expect(mockFetch.mock.calls[0][0]).toBe('url');
  expect(mockFetch.mock.calls[0][1]).toEqual({ method: 'POST' });
});
