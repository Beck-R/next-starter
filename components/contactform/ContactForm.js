import { useFormik } from "formik";
import { React, useState } from "react";
import css from "styled-jsx/css";
import Button from "../button/Button";
import { TailSpin } from "react-loader-spinner";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import axios from "axios";

function ContactForm() {
  const [status, setStatus] = useState("unsubmitted");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: async (values) => {
      setStatus("submitting");
      const res = await axios.post("/api/contact", values);
      setStatus("submitted");
    },
  });

  return (
    <>
      <style jsx>{styles}</style>
      <div className="container">
        {(function () {
          if (status == "unsubmitted") {
            return (
              <>
                <form onSubmit={formik.handleSubmit}>
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </div>
                  <div className="button-wrapper">
                    <Button>Get in Touch!</Button>
                  </div>
                </form>
              </>
            );
          } else if (status == "submitting") {
            return (
              <>
                <TailSpin color="blue" width="200" height="200" />
              </>
            );
          } else if (status == "submitted") {
            return (
              <>
                <FaCheckCircle color="green" size="200" />
                <p>Thank you for submitting! I will reach out soon.</p>
              </>
            );
          } else if (status == "error") {
            return (
              <>
                <FaTimesCircle color="red" size="200" />
                <p>Failed to submit, try again.</p>
              </>
            );
          }
        })()}
      </div>
    </>
  );
}

const styles = css`
  form {
    max-width: 700px;
    margin: auto;
    padding-bottom: 60px;
  }

  label {
    display: block;
    font-size: 24px;
  }
  input {
    display: block;
    width: 100%;
    font-size: 24px;
    line-height: 32px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    outline: none;
    display: block;
    color: #eee;
    margin-top: 20px;
    margin-bottom: 30px;
    padding: 10px 0;
  }
  input:focus {
    color: #2e9ed2;
    border-bottom: 1px solid #2e9ed2;
  }
  .button-wrapper {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export default ContactForm;
