import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ChangePwd from "../../assets/change-pwd.png";
import OtpPopup from "./otpPopup";

interface ForgotPasswordProps {
  forgetonClose?: () => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ forgetonClose }) => {
  const [sendOtp, setSendOtp] = useState(false);

  // Validation schema using Yup
  const validationSchema = Yup.object({
    newPassword: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("New password is required"),
    confirmNewPassword: Yup.string()
      .oneOf([Yup.ref("newPassword")], "Passwords must match")
      .required("Confirm password is required"),
  });

  return (
    <>
      {sendOtp ? (
        <OtpPopup onClose={forgetonClose} onOtpSuccess={setSendOtp} />
      ) : (
        <div className="forget-popup-container">
          <div className="forget-popup">
            <button className="forget-close-btn" onClick={forgetonClose}>
              ✖
            </button>

            <div className="otp-image">
              <img src={ChangePwd} alt="OTP Verification" />
            </div>
            <h2>Change Password</h2>

            <Formik
                      initialValues={{ newPassword: "", confirmNewPassword: "" }}
                      validationSchema={validationSchema}
                      onSubmit={(values, { setSubmitting }) => {
                        console.log("New password set:", values.newPassword);
                        setTimeout(() => {
                          setSubmitting(false);
                          setSendOtp(true);
                        }, 500);
                      }}
>
                {({ isSubmitting }) => (
                  <Form>
                    <div className="forget-input">
                      <Field
                        type="password"
                        name="newPassword"
                        placeholder="New Password"
                        className="input-field"
                      />
                      <ErrorMessage name="newPassword" component="div" className="changepwd-error-message" />
                    </div>
                    
      <div className="forget-input">
        <Field
          type="password"
          name="confirmNewPassword"
          placeholder="Confirm New Password"
          className="input-field"
        />
        <ErrorMessage name="confirmNewPassword" component="div" className="changepwd-error-message" />
      </div>
      
      <button type="submit" className="forget-update-btn" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  )}
</Formik>

          </div>
        </div>
      )}
    </>
  );
};

export default ForgotPassword;
