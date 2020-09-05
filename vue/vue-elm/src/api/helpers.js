import axios from 'axios';

const baseUrl = '';

export function get(url) {
  return function (params = {}) {
    return axios.get(baseUrl + url, {
      params,
    }).then((res) => {
      const {errno, data} = res.data;
      // const errno = res.data.errno
      // const data = res.data.data
      if (errno === 0) {
        return data;
      };
    }).catch((err) => {
      console.log(err);
    });
  };
};