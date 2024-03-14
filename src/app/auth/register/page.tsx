"use client";
import { useState } from "react";
import { CircularProgress, Paper, Stack, Typography } from "@mui/material";
import Alert, { AlertStatuses } from "@/components/MUIComponents/Alert";
import Button from "@/components/MUIComponents/Button";
import TextField from "@/components/MUIComponents/TextField";
import { Form, Formik } from "formik";
import Link from "next/link";
import { object, string, ref } from "yup";
import { signUp } from "@/services/Auth/auth";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const fieldValidation = object({
  firstname: string().required("Полето е задължително"),
  lastname: string().required("Полето е задължително"),
  email: string()
    .email("Въведете валиден имейл")
    .required("Полето е задължително"),
  phone: string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Полето е задължително"),
  password: string()
    .trim()
    .min(8, "Дължитената трябва да е поне 8 символа")
    .required("Полето е задължително"),
  confirmPassword: string()
    .oneOf([ref("password")], "Паролите не са еднакви")
    .required("Полето е задължително"),
});

type RegisterFormValues = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

const RegisterPage = () => {
  const [formStatus, setFormStatus] = useState<AlertStatuses>(null);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const initialValues: RegisterFormValues = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  const handleFormSubmit = async (values: RegisterFormValues) => {
    try {
      setLoading(true);
      setFormStatus(null);
      setAlertMessage(null);

      const newUser = await signUp(
        values.firstname,
        values.lastname,
        values.email,
        values.phone,
        values.password
      );
      if (newUser) {
        window.location.assign("/auth/login");
      } else {
        throw new Error(newUser.message);
      }
    } catch (err) {
      console.log((err as Error).message);
      setFormStatus("error");
      setAlertMessage("Потребителското име или имейл адреса са заети!");
      setLoading(false);
    }
  };

  return (
    <Stack
      width="100vw"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      overflow="auto"
      p={1}
    >
      <Paper sx={{ width: "100%", maxWidth: "600px", p: 4 }}>
        <Stack justifyContent="center" alignItems="center" gap={2}>
          <Typography component="h2" variant="h2">
            ScanSight
          </Typography>
          <Typography component="h2" variant="h3">
            Регистрация
          </Typography>
        </Stack>

        {!loading ? (
          <Formik
            initialValues={initialValues}
            onSubmit={handleFormSubmit}
            validationSchema={fieldValidation}
          >
            {({ handleSubmit, handleChange, touched, errors, values }) => (
              <Form onSubmit={handleSubmit}>
                <Stack spacing={3} mt={3}>
                  <TextField
                    name="firstname"
                    label="Име"
                    error={touched["firstname"] && !!errors["firstname"]}
                    helperText={touched["firstname"] && errors["firstname"]}
                    onChange={handleChange}
                    value={values.firstname}
                    type="firstname"
                  />

                  <TextField
                    name="lastname"
                    label="Фамилия"
                    error={touched["lastname"] && !!errors["lastname"]}
                    helperText={touched["lastname"] && errors["lastname"]}
                    onChange={handleChange}
                    value={values.lastname}
                    type="lastname"
                  />

                  <TextField
                    name="email"
                    label="Имейл Адрес"
                    error={touched["email"] && !!errors["email"]}
                    helperText={touched["email"] && errors["email"]}
                    onChange={handleChange}
                    value={values.email}
                    type="email"
                  />

                  <TextField
                    name="phone"
                    label="Тел. Номер"
                    error={touched["phone"] && !!errors["phone"]}
                    helperText={touched["phone"] && errors["phone"]}
                    onChange={handleChange}
                    value={values.phone}
                    type="phone"
                  />

                  <TextField
                    name="password"
                    label="Парола"
                    error={touched["password"] && !!errors["password"]}
                    helperText={touched["password"] && errors["password"]}
                    onChange={handleChange}
                    value={values.password}
                    type="password"
                  />

                  <TextField
                    name="confirmPassword"
                    label="Потвърди Паролата"
                    error={
                      touched["confirmPassword"] && !!errors["confirmPassword"]
                    }
                    helperText={
                      touched["confirmPassword"] && errors["confirmPassword"]
                    }
                    onChange={handleChange}
                    value={values.confirmPassword}
                    type="password"
                  />

                  <Button message="Регистрация" type="submit" />

                  <Alert
                    message={alertMessage}
                    showAlert={!!alertMessage}
                    severity={formStatus}
                  />

                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    gap={1}
                  >
                    <Typography component="p" variant="body1">
                      Имате акаунт?
                    </Typography>
                    <Link href="/auth/login" style={{ color: "#0E86D4" }}>
                      Влезте от тук
                    </Link>
                  </Stack>
                </Stack>
              </Form>
            )}
          </Formik>
        ) : (
          <Stack justifyContent="center" alignItems="center" my={5}>
            <CircularProgress size="3rem" />
          </Stack>
        )}
      </Paper>
    </Stack>
  );
};

export default RegisterPage;
