import datas from "./datas.json";

export const fetchDraws = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(datas.draws);
    });
  });
};

export const fetchComments = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(datas.comments);
    });
  });
};
