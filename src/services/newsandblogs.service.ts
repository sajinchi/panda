import axios from "axios";

import { INewsAndBlog } from "@/types/INewsBlogsType";
import { INetwortRequestResponseState } from "@/types/INetworkRequestResponseState";

export interface IGetNewsandBlogListResponse extends INetwortRequestResponseState {
  data?: INewsAndBlog[];
}
export const GetNewsandBlogListService = async () => {
  try {
    const response = await axios.get();
    let result: IGetNewsandBlogListResponse = {
      status: response.status,
      message: response.statusText,
      data: response.data,
    };
    return result;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const result: IGetNewsandBlogListResponse = {
        status: error.response!.status,
        message: error.response!.data.detail,
      };
      return result;
    } else {
      const result: IGetNewsandBlogListResponse = {
        status: 400,
        message: "Unknown Error",
      };
      return result;
    }
  }
};
