const SIGN_SUBSTITUTES = {
  ą: 'a',
  ć: 'c',
  ę: 'e',
  ł: 'l',
  ń: 'n',
  ó: 'o',
  ś: 's',
  ź: 'z',
  ż: 'z',
  ' ': '-',
  "'": '',
  '"': '',
};

export const neutralizeString = text =>
  text
    .toLowerCase()
    .split('')
    .map(sign => SIGN_SUBSTITUTES[sign] || sign)
    .join('');
