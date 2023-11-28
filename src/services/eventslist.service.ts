import axios from "axios";

import { IEventsData } from "@/types/IEventType";
import { INetwortRequestResponseState } from "@/types/INetworkRequestResponseState";

export interface IGetEventListResponse extends INetwortRequestResponseState {
  data?: IEventsData[];
}
export const GetEventListService = async () => {
  try {
    const response = await axios.get();
    let result: IGetEventListResponse = {
      status: response.status,
      message: response.statusText,
      data: response.data,
    };
    return result;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const result: IGetEventListResponse = {
        status: error.response!.status,
        message: error.response!.data.detail,
      };
      return result;
    } else {
      const result: IGetEventListResponse = {
        status: 400,
        message: "Unknown Error",
      };
      return result;
    }
  }
};
