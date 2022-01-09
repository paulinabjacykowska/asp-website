import { axios } from './utils/axios';

const getText = ids => {
  const result = ids.map(id => `id_in=${id}`).join('&');
  return result;
};
export const getLikedDegrees = ids => {
  if (ids.length === 0) {
    return Promise.resolve([]);
  }
  return axios.get('/degrees?' + getText(ids)).then(res => res.data);
};
