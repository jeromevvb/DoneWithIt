import React, { useContext, useState } from "react";
import { StyleSheet, Image } from "react-native";
import SafeView from "../components/SafeView";
import {
  FormField,
  SubmitButton,
  Form,
  ErrorMessage,
} from "../components/forms";
import useAuth from "../hooks/useAuth";
import authApi from "../api/auth";
import { LoginCredentialsSchema, LoginCredentialsType } from "../models/auth";

const validationSchema = LoginCredentialsSchema;

const LoginScreen = () => {
  const [loginError, setLoginError] = useState(false);
  const auth = useAuth();

  const handleSubmit = async (credentials: LoginCredentialsType) => {
    const response = await authApi.login(credentials);

    if (!response.ok) return setLoginError(true);

    const authToken = response.data as string;
    auth.login(authToken);
    setLoginError(false);
  };

  return (
    <SafeView padding>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Form
        validationSchema={validationSchema}
        initialValues={validationSchema.default() as object}
        onSubmit={handleSubmit}
      >
        <FormField
          name="email"
          icon="email"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email"
          keyboardType="email-address"
          // only works on Ios.
          // autofill from keychain
          textContentType="emailAddress"
        />

        <FormField
          name="password"
          icon="lock"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry
          // only works on Ios.
          // autofill from keychain
          textContentType="password"
        />

        {loginError && <ErrorMessage error={"Invalid login or password"} />}

        <SubmitButton title="Login" />
      </Form>
    </SafeView>
  );
};

LoginScreen.defaultProps = {};

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
