import CryptoJS from 'crypto-js';
import momentJalali from 'moment-jalaali';

const encrypt = (text: any) => {
  return CryptoJS.SHA256(text).toString();
};

const decrypt = (text: any, key = '') => {
  const bytes = CryptoJS.AES.decrypt(text, key);
  return bytes.toString(CryptoJS.enc.Utf8);
};

const getApiKeyPassword = (date: any, key: any) => {
  let text = `H${date}@${key}P`;
  text = encrypt(text);
  const data = text.replace(/[^\d.]/g, '');
  return data.substr(0, 4);
};

export { decrypt, encrypt };
export const generateApiKey = () => {
  const minute = momentJalali().format('mm');

  let minute1: any = minute - (minute % 2);
  const remainder = 2 - (minute % 2);

  if (minute1 < 10) minute1 = `0${minute1}`;

  const key = momentJalali().format('YYYYMMDD');
  const date1 = momentJalali().format('jYYYYjMMjDDHH') + minute1;
  const date2 = momentJalali()
    .add(remainder, 'minutes')
    .format('jYYYYjMMjDDHHmm');

  const password1 = getApiKeyPassword(date1, key);
  const password2 = getApiKeyPassword(date2, key);

  return `${password1}|${password2}`;
};
