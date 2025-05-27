import React from "react";
import Header from "../Header";
import LogInComponent from "../components/Authentication/LogInComponent";
import Footer from "../Footer";
import SignInComponent from "../components/Authentication/SignInComponent";


function SignIn() {
    return (
    <>
    <Header></Header>
    <SignInComponent></SignInComponent>
    <Footer></Footer>
    </>
    );
}

export default SignIn;