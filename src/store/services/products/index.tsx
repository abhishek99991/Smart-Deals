import { callApi } from "../../../Api/apiUtils";
import { productEndpoints } from "../../endpoints/products";

export const cartListApi = () =>
  callApi({
    uriEndPoint: productEndpoints.cartList.v1
  });

export const cartQuantityManager = ({body}: any) =>
    callApi({
      uriEndPoint: productEndpoints.cartQuantityManager.v1,
      body
    });
  