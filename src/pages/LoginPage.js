import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Form as BootstrapForm, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import ClipLoader from "react-spinners/ClipLoader";
import { Redirect } from "react-router-dom";
import authActions from "../redux/actions/auth.actions";
import * as yup from "yup";

const LoginPage = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  const loginSchema = yup.object({
    email: yup.string().required("Require").email("Email must be valid"),
    password: yup.string().required("Require"),
  });

  if (isAuthenticated) return <Redirect to="/" />;
  return (
    <div>
      {loading ? (
        <ClipLoader color="blue" loading={loading} size={150} />
      ) : (
        <div>
          <Container fluid style={{ width: "50%", marginTop: "30px" }}>
            <div className="text-center p-terms">
              <h2> LOGIN</h2>
              <h4>Great to have you back!</h4>
            </div>
            <Formik
              validateOnBlur={false}
              validationSchema={loginSchema}
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={(data) => {
                console.log(data.name);
                dispatch(
                  authActions.login({
                    email: data.email,
                    password: data.password,
                  })
                );
              }}
            >
              {({ errors, touched }) => (
                <Form className="mt-4">
                  <BootstrapForm.Group>
                    {" "}
                    <Field
                      type="input"
                      name="email"
                      placeholder="Email"
                      as={BootstrapForm.Control}
                    />
                  </BootstrapForm.Group>
                  <div className="error-msg">
                    {errors.email && touched.email ? errors.email : null}
                  </div>
                  <BootstrapForm.Group>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      as={BootstrapForm.Control}
                    />
                  </BootstrapForm.Group>

                  <div className="error-msg">
                    {errors.password && touched.password
                      ? errors.password
                      : null}
                  </div>

                  <Button className="auth-button" type="submit">
                    LOGIN
                  </Button>
                </Form>
              )}
            </Formik>
          </Container>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
