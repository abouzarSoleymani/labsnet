import api from '@/api';

export const getNewsList = async (): Promise<any> => {
  return api.get<any>(`/demo/data/news.json`).then(
    value =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve(value);
        }, 1000);
      })
  );
};

export const getNewsItem = async (id: number): Promise<any> => {
  return api.get<any>(`/demo/data/news.json`).then(
    value =>
      new Promise(resolve => {
        setTimeout(() => {
          const news = {
            data: value.data.filter((item: any) => item.id === id),
          };
          resolve(news);
        }, 1000);
      })
  );
};
