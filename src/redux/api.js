// Placeholder, add dev url
const getUrl = () => {
  if (process.env.NODE_ENV === 'production') {
    return 'https://server.vatusa.net:8081';
  }
  return 'http://server.vatusa.net:5201';
};

export default getUrl;
