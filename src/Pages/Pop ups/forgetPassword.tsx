import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import otpEmail from "../../assets/email-otp.png";
import OtpPopup from "./otpPopup";


interface ForgotPasswordProps {
  forgetonClose: () => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ forgetonClose }) => {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required"),
  });

  const [sendOtp, isSendOtp]: any = useState(false);

  return (
    <>
    {sendOtp ? (
      <OtpPopup onClose={forgetonClose} onOtpSuccess={isSendOtp} />
    ) : (
      <div className="forget-popup-container">
        <div className="forget-popup">
          <button className="forget-close-btn" onClick={forgetonClose}>
            ✖
          </button>
          <div className="otp-image">
            <img src={otpEmail} alt="OTP Verification" />
          </div>
          <h2>Enter Your Email</h2>
          <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log("Password reset request sent for:", values.email);
              // Simulate an API call here, replace with actual logic
              setTimeout(() => {
                setSubmitting(false);
                isSendOtp(true);
              }, 500); // Simulate a 0.5 second delay
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="forget-input">
                  <Field type="email" name="email" placeholder="Enter your email" className="input-field" />
                </div>
                <ErrorMessage name="email" component="div" className="error-message" />
                <button type="submit" className="forget-update-btn" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send OTP"}
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