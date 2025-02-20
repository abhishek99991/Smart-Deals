import { callApi } from "../../../Api/apiUtils";
import { productEndpoints } from "../../endpoints/products";

export const cartListApi = () =>
  callApi({
    uriEndPoint: productEndpoints.cartList.v1
  });
