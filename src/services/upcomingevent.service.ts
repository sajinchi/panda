import axios from "axios";

import { IEventsData } from "@/types/IEventType";
import { INetwortRequestResponseState } from "@/types/INetworkRequestResponseState";

export interface IGetUpcomingEventListResponse extends INetwortRequestResponseState {
  data?: IEventsData[];
}
export const getUpcomingEventList = async () => {
  try {
    const response = await axios.get();
    let result: IGetUpcomingEventListResponse = {
      status: response.status,
      message: response.statusText,
      data: response.data,
    };
    return result;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const result: IGetUpcomingEventListResponse = {
        status: error.response!.status,
        message: error.response!.data.detail,
      };
      return result;
    } else {
      const result: IGetUpcomingEventListResponse = {
        status: 400,
        message: "Unknown Error",
      };
      return result;
    }
  }
};
