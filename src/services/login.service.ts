import axios from "axios";

import { INetwortRequestResponseState } from "@/types/INetworkRequestResponseState";

export interface ILoginResponse extends INetwortRequestResponseState {
    // data?:;
  }

export const LoginService = async(username: string, password: string) => {
    try {
        // let response = await axios.post(
        //     URL,
        //     {
        //     username,
        //     password
        // },{
        //     headers:{
        //         'Content-Type': 'application/json'
        //     }
        // });
        // return response
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const result: INetwortRequestResponseState = {
              status: error.response!.status,
              message: error.response!.data.detail,
            };
            return result;
          } else {
            const result: INetwortRequestResponseState = {
              status: 400,
              message: "Unknown Error",
            };
            return result;
          }
    }

}