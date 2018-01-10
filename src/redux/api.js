const getUrl = () => {
  if (process.env.NODE_ENV === 'production') {
    return 'http://server.vatusa.net:8081';
  }
  return 'http://server.vatusa.net:8081';
};

export default getUrl;
