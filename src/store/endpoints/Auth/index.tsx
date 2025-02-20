import { defaults } from "../../default";

export const authEndpoints = {
  registerUser: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: "/register/",
    },
  },
  sendOtpEmail: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: "/verify-otp/",
    },
  },
  userLogin: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: "/login/",
    },
  },
  logoutUser: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: "/logout/",
    },
  },
  getUserDetails: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: "/profile/",
    },
  },
  getCategories: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: "/categories/",
    },
  },
  forgetPasswordSendOtp: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: "/send-otp/",
    },
  },
  verifyOtpForgot: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: "/verify-email-otp/",
    },
  },
  resetPassword: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: "/reset-password/",
    },
  },
}

