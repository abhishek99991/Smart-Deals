import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import otpImage from "../../assets/email-otp.png";
import { sendOtpEmail } from "../../store/services/Auth";
import { UserEmail } from "../../../Jotai";
import { useAtom } from "jotai";
import toast from "react-hot-toast";

const OtpPopup = ({ onClose, onOtpSuccess  }: any) => {
  

  const [userEmail]:any = useAtom(UserEmail);
  const otpSchema = Yup.object().shape({
    otp: Yup.array()
      .of(Yup.string().matches(/^[0-9]$/, "Must be a number").required("Required"))
      .length(4, "OTP must be 4 digits"),
  });


  const handleSubmitOtp = (email: string, otp: string) => {
    console.log("Email:", email);
    console.log("OTP:", otp);
    sendOtpEmail({
   
      body: {
        email: userEmail,
        otp: otp
      },
    }).then((res:any)=>{
      toast.success(res.msg)
      onClose();  // Close OTP popup
      onOtpSuccess();  // Redirect to SignIn
    })
    
  };

  

  return (
    <div className="otp-popup-overlay" onClick={onClose}>
      <div className="otp-popup-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>

        <div className="otp-image">
          <img src={otpImage} alt="OTP Verification" />
        </div>

        <h2 className="otp-title">OTP Verification</h2>
        <p className="otp-text">OTP has been sent to <strong>{userEmail}</strong></p>

        <Formik
          initialValues={{ otp: ["", "", "", ""] }}
          validationSchema={otpSchema}
          onSubmit={(values) => {
            const storedEmail = sessionStorage.getItem("userEmail") || "";
            const otpCode = values.otp.join("");
            handleSubmitOtp(storedEmail, otpCode);
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <Form className="otp-form" onSubmit={handleSubmit}>
              <div className="otp-inputs">
                {values.otp.map((_, index) => (
                  <Field
                    key={index}
                    name={`otp[${index}]`}
                    type="text"
                    maxLength={1}
                    className="otp-input"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      handleChange(e);
                      if (e.target.value && index < 3) {
                        document.getElementsByName(`otp[${index + 1}]`)[0]?.focus();
                      }
                    }}
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                      if (e.key === "Backspace" && !values.otp[index] && index > 0) {
                        document.getElementsByName(`otp[${index - 1}]`)[0]?.focus();
                      }
                    }}
                    onBlur={handleBlur}
                  />
                ))}
              </div>

              <p className="resend-text">
                Didn’t get the OTP? <a href="#">Click to resend</a>
              </p>

              <button type="submit" className="otp-verify-btn">Verify the Code</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default OtpPopup;
