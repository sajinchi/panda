import axios from "axios";

import { ILocationDetails } from "@/types/ILocationDetailType";
import { INetwortRequestResponseState } from "@/types/INetworkRequestResponseState";

export interface IGetFeaturedLocationListResponse extends INetwortRequestResponseState {
  data?: ILocationDetails[];
}
export const GetFeaturedLoactionListService = async () => {
  try {
    const response = await axios.get();
    let result: IGetFeaturedLocationListResponse = {
      status: response.status,
      message: response.statusText,
      data: response.data,
    };
    return result;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const result: IGetFeaturedLocationListResponse = {
        status: error.response!.status,
        message: error.response!.data.detail,
      };
      return result;
    } else {
      const result: IGetFeaturedLocationListResponse = {
        status: 400,
        message: "Unknown Error",
      };
      return result;
    }
  }
};
