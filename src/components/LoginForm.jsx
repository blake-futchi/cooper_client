import React from "react";
import {
  grommet,
  Box,
  Button,
  Grommet,
  Form,
  FormField,
  TextInput
} from "grommet";

const LoginForm = ({ submitFormHandler }) => {
  return (
    <Grommet full theme={grommet}>
      <Form onSubmit={submitFormHandler} id="login-form">
        <Box fill align="center" justify="center">
          <Box>
            <FormField>Email</FormField>
            <TextInput name="email" type="email" id="email"></TextInput>

            <FormField>Password</FormField>
            <TextInput
              name="password"
              type="password"
              id="password"
            ></TextInput>

            <button id="submit">Submit</button>
          </Box>
        </Box>
      </Form>
    </Grommet>
  );
};

export default LoginForm;
