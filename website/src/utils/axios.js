import { BACKEND_URL } from '../constants';
import defaultAxios from 'axios';

export const axios = defaultAxios.create({ baseURL: BACKEND_URL });
