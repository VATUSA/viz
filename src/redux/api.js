// Placeholder, add dev url
const getUrl = () => {
  if (process.env.NODE_ENV === 'production') {
    return 'https://dock.vatusa.net:8081';
  }
  return 'http://server.vatusa.net:5201';
};

export default getUrl;

export const getApiUrl = () => {
  if (process.env.NODE_ENV === 'production') {
    return 'https://api.vatusa.net';
  }
  return 'http://api.vatusa.devel';
};
