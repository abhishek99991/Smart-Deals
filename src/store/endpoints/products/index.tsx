import { defaults } from "../../default";

export const productEndpoints = {
  cartList: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: "/cart/",
    },
  },
  cartQuantityManager: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: "/cart/",
    },
  },
  removeCartItem: {
    v1: {
      ...defaults.methods.DELETE,
      ...defaults.versions.v1,
      uri: "/cart/",
    },
  },
}

