import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import {Form, Field, FormRow, Select, Option, ErrorMessage} from "../../lib/style/generalStyles";
import {Formik} from "formik";
import * as Yup from "yup";
import { Button } from "../../components/Button/ButtonStyle";

const LogIn = () => {
    return(
        <>
            <Header isSecondary/>

            <Section title={"SignIn"} isMainSection isCentered>
                <Formik initialValues={{
                    email: "",
                    password: "",
                }} validationSchema={Yup.object({
                    email: Yup.string()
                        .required("Email is required")
                        .email("Invalid email adress"),
                    password: Yup.string()
                        .min(8, "Password must be at least 8 characters long")
                        .required("Password is required")
                })} onSubmit={(values, actions) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            actions.setSubmitting(false);
                            actions.resetForm({
                                email: "",
                                password: ""
                            });
                        }, 1000)
                }}>
                    {formik => (
                        <Form>
                            <FormRow>
                                <Field type="text" name="email" placeholder="Email..." disabled={formik.isSubmitting}/>
                                <ErrorMessage component={"div"} name="email"/>
                            </FormRow>
                            <FormRow>
                                <Field type="password" name="password" placeholder="Password..." disabled={formik.isSubmitting}/>
                                <ErrorMessage component={"div"} name="password"/>
                            </FormRow>
                            <FormRow>
                                <Button isForm isOutline disabled={formik.isSubmitting}>{formik.isSubmitting ? "Processing..." : "Sign In"}</Button>
                            </FormRow>
                        </Form>
                    )}
                </Formik>
            </Section>
        </>
    );
}

export default LogIn;