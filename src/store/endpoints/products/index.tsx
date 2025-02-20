import { defaults } from "../../default";

export const productEndpoints = {
  cartList: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: "/cart/",
    },
  },
}

