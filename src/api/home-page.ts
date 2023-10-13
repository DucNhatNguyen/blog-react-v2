import Axios from "axios";
import { RequestType } from "../type/PostType";

export const getDataHomePage = () => {
  new Promise(async (resolve, reject) => {
    try {
      const options = {
        method: "GET",
        url: "https://blog-nodejs.onrender.com/api/web/home-page",
      };
      Axios.request(options)
        .then(function ({ data }: { data: RequestType }) {
          resolve(data);
          console.log(data.latestPosts.posts);
        })
        .catch(function (error: any) {
          console.error(error);
        });
    } catch (err) {
      reject(err);
    }
  });
};
