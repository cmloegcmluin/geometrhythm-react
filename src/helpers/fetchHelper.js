export default {
  fetch: (url, { method, headers }) => {
    window.fetch(url, { method, headers });
  },
};
