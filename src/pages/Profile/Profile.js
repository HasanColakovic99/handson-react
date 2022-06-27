import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import Button from "../../components/Button/Button";
import {FormProfile, Field, FormRow, Select, Option, ErrorMessage, Label, ToastWrapper, Title, Subtitle, ProfileWrapper, ResetPasswordWrapper, FormPassword} from "../../lib/style/generalStyles";
import {Formik} from "formik";
import { useState } from "react";
import * as Yup from "yup";

const Profile = () => {

    const [initial, SetInitial] = useState(true);
    let [profiles, setProfile] = useState([{        
        id: 1, 
        firstName: "Hasan", 
        lastName: "Čolaković", 
        email:"hcolakovi@foi.hr", 
        githubUsername: "HasanColakovic99", 
        zeplinUsername: "HasanColakovic99", 
        activeFacultyYear: "3"
    }]);

    const editPage = () => {
        SetInitial(false);
    }

    const initialPage = () => {
        SetInitial(true);
    }

    return(
        <>
            <Header isSecondary profileActive/>

            <Section title={"My profile"} buttonText={initial ? "Edit" : "Cancel"} callback={initial ? editPage : initialPage}>
                {profiles.map((profile, index) => (
                <ProfileWrapper key={index}>
                    <Formik key={profile.id} initialValues={{
                        firstName: profile.firstName,
                        lastName: profile.lastName,
                        email: profile.email,
                        githubUsername: profile.githubUsername,
                        zeplinUsername: profile.zeplinUsername,
                        activeFacultyYear: profile.activeFacultyYear
                }} validationSchema={Yup.object({
                    firstName: Yup.string()
                        .required("First name is required"),
                    lastName: Yup.string()
                        .required("Last name is required"),
                    email: Yup.string()
                        .required("Email is required")
                        .email("Invalid email adress"),
                    githubUsername: Yup.string()
                        .required("GitHub username is required"),
                    zeplinUsername: Yup.string()
                        .required("Zeplin username is required"),
                    activeFacultyYear: Yup.string()
                        .required("Active faculty year is required")
                })} onSubmit={(values, actions) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            actions.setSubmitting(false);
                            actions.resetForm({
                                firstName: values.firstName,
                                lastName: profile.lastName,
                                email: profile.email,
                                githubUsername: profile.githubUsername,
                                zeplinUsername: profile.zeplinUsername,
                                activeFacultyYear: profile.activeFacultyYear
                            });
                            SetInitial(true);
                            setProfile([{
                                firstName: values.firstName,
                                lastName: values.lastName,
                                email: values.email,
                                githubUsername: values.githubUsername,
                                zeplinUsername: values.zeplinUsername,
                                activeFacultyYear: values.activeFacultyYear
                            }])
                        }, 1000);
                }}>
                    {formik => (
                        <FormProfile>
                            <FormRow>
                                <Label>First name:</Label>
                                <Field type="text" name="firstName" placeholder="First name..." disabled={formik.isSubmitting || initial}/>
                                <ErrorMessage component={"div"} name="firstName"/>
                            </FormRow>

                            <FormRow>
                                <Label>Last name:</Label>
                                <Field type="text" name="lastName" placeholder="Last name..." disabled={formik.isSubmitting || initial}/>
                                <ErrorMessage component={"div"} name="lastName"/>
                            </FormRow>

                            <FormRow>
                                <Label>Email:</Label>
                                <Field type="text" name="email" placeholder="Email..." disabled={formik.isSubmitting || initial}/>
                                <ErrorMessage component={"div"} name="email"/>
                            </FormRow>

                            <FormRow>
                                <Label>GitHub username:</Label>
                                <Field type="text" name="githubUsername" placeholder="GitHub username..." disabled={formik.isSubmitting || initial}/>
                                <ErrorMessage component={"div"} name="githubUsername"/>
                            </FormRow>

                            <FormRow>
                                <Label>Zeplin username:</Label>
                                <Field type="text" name="zeplinUsername" placeholder="Zeplin username..." disabled={formik.isSubmitting || initial}/>
                                <ErrorMessage component={"div"} name="zeplinUsername"/>
                            </FormRow>

                            <FormRow>
                                <Label>Active faculty year:</Label>
                                <Select id="activeFacultyYear" {...formik.getFieldProps("activeFacultyYear")}  disabled={formik.isSubmitting || initial}>
                                    <Option value="" disabled hidden>Choose faculty year</Option>
                                    <Option value="0">Not a student</Option>
                                    <Option value="1">1st faculty year</Option>
                                    <Option value="2">2nd faculty year</Option>
                                    <Option value="3">3rd faculty year</Option>
                                    <Option value="4">4th faculty year</Option>
                                    <Option value="5">5th faculty year</Option>
                                </Select>
                                <ErrorMessage component={"div"} name="activeFacultyYear"/>
                            </FormRow>

                            {!initial &&                             
                                <Button isOutline disabled={formik.isSubmitting}>{formik.isSubmitting ? "Processing..." : "Update"}</Button>
                            }
                        </FormProfile>
                    )}
                </Formik>

                            
                {initial ? 
                    <ToastWrapper>
                        <Title>Password reset</Title>
                        <Subtitle>In order to reset password, click on Edit <br/> button.</Subtitle>
                    </ToastWrapper>
                    :
                    <ResetPasswordWrapper>
                        <Title>Password reset</Title>
                        <Formik initialValues={{
                                oldPassword: "",
                                newPassword: "",
                                newPasswordConfirmed: ""
                }} validationSchema={Yup.object({
                    oldPassword: Yup.string()
                        .required("Old password is required"),
                    newPassword: Yup.string()
                        .min(8, "Password must be at least 8 characters long")
                        .required("New password is required"),
                    newPasswordConfirmed: Yup.string()
                        .test("Passwords-match", "Passwords must match", function(value){
                            return this.parent.newPassword === value
                        })
                        .required("Password confirmed is required")
                })} onSubmit={(values, actions) => {
                        setTimeout(() => {
                            alert("Password updated successfully");
                            actions.setSubmitting(false);
                            actions.resetForm({
                                oldPassword: "",
                                newPassword: "",
                                newPasswordConfirmed: ""
                            });
                            SetInitial(true);
                        }, 1000);
                }}>
                    {formik => (
                        <FormPassword>
                            <FormRow>
                                <Field type="password" name="oldPassword" placeholder="Old password..." disabled={formik.isSubmitting}/>
                                <ErrorMessage component={"div"} name="oldPassword"/>
                            </FormRow>

                            <FormRow>
                                <Field type="password" name="newPassword" placeholder="New password..." disabled={formik.isSubmitting}/>
                                <ErrorMessage component={"div"} name="newPassword"/>
                            </FormRow>

                            <FormRow>
                                <Field type="password" name="newPasswordConfirmed" placeholder="New password confirmed..." disabled={formik.isSubmitting}/>
                                <ErrorMessage component={"div"} name="newPasswordConfirmed"/>
                            </FormRow>
    
                            <Button isOutline disabled={formik.isSubmitting}>{formik.isSubmitting ? "Processing..." : "Update password"}</Button>
                        </FormPassword>
                    )}
                </Formik>
                    </ResetPasswordWrapper>
                }
            </ProfileWrapper>
                ))}
            </Section>
        </>
    );
}

export default Profile;