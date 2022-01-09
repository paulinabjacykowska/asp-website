export const BACKEND_URL = process.env.GATSBY_BACKEND_URL;
export const IMAGES_BACKEND_URL = process.env.GATSBY_IMAGES_BACKEND_URL || '';

export const LANGUAGES = {
  pl: 'pl',
  en: 'en',
};

export const ROUTES = {
  root: '/',
  home: '/home',
  liked: '/liked',
  archive: '/archive',
  departments: '/departments',
  aboutUs: '/aboutUs',
  exhibit: '/exhibit',
  diplomas: '/diplomas',
  bestDiplomas: '/bestDiplomas',
};

export const ROUTES_MENU = [
  { label: 'Strona główna', path: ROUTES.home },
  { label: 'Katalog dyplomów', path: ROUTES.archive },
  { label: 'Polubione dyplomy', path: ROUTES.liked },
  { label: 'Najbliższa wystawa', path: ROUTES.exhibit },
  { label: 'Wydziały', path: ROUTES.departments },
  { label: 'Najlepsze dyplomy', path: ROUTES.bestDiplomas },
  { label: 'O nas', path: ROUTES.aboutUs },
];

export const DEPARTMENT_THEMES = {
  green: {
    color: 'black',
    background: '#699E78',
    inverted: false,
  },
  dark: {
    color: 'white',
    background: 'black',
    inverted: true,
  },
  light: {
    color: 'black',
    background: '#EDEAE8',
    inverted: false,
  },
  blue: {
    color: 'white',
    background: '#131243',
    inverted: true,
  },
  gray: {
    color: 'black',
    background: '#B1ACA6',
    inverted: false,
  },
};

export const DEGREE_MEDIA_TYPES = {
  picture: 'media-type.picture',
  gallery: 'media-type.gallery',
  video: 'media-type.video',
};

export const GALLERY_TYPES = {
  square: 'square',
  rectangleHorizontal: 'rectangle_horizontal',
  rectangleVertical: 'rectangle_vertical',
};

export const DIPLOMA_BACKGROUND_THEMES = {
  dark: {
    color: 'white',
    background: 'black',
  },
  light: {
    color: 'black',
    background: 'white',
  },
};

export const DIPLOMA_LINES_THEMES = {
  dark: {
    background: '#FF5100',
  },
  light: {
    background: '#4FFDBE',
  },
};
