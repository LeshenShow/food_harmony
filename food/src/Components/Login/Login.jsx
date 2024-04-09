import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import {
  LoginBackgroundStyled,
  LoginContentStyled,
  LoginStyled,
} from "../../styles/LoginStyles/LoginStyle";
export const Login = (props) => {
  //   const formik = useFormik({
  //     initialValues: {
  //       email: "",
  //     },
  //     onSubmit: (values) => {
  //       alert(JSON.stringify(values, null, 2));
  //     },
  //   });
  return (
    <LoginStyled>
      <LoginContentStyled>
        <h1>Welcome</h1>
        <div>Email</div>
        <div>Password</div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
            <label htmlFor="password">Email</label>
            <Field
              id="password"
              name="password"
              placeholder="password"
              type="password"
            />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </LoginContentStyled>
    </LoginStyled>
  );
};
