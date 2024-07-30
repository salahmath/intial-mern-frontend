import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa"; // Importer les icônes

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { object, string } from "yup";
import { useFormik } from "formik";
import { LoginUser, LoginUser_google } from "../feature/Userslice"; // Assurez-vous que cette action existe
import { Link, useNavigate } from "react-router-dom";
import { app } from "../firebase";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth(app);

  // Définir le schéma de validation avec yup
  const validationSchema = object({
    email: string().email("Invalid email format").required("Email is required"),
    password: string().required("Password is required"),
  });

  // Initialiser formik avec les valeurs initiales, le schéma de validation et la fonction onSubmit
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(LoginUser(values)).unwrap();
        navigate("/home"); // Redirection vers la page d'accueil ou de tableau de bord
      } catch (error) {
        console.error("Login failed:", error);
      }
    },
  });

  const handleAuth = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Assurez-vous que la méthode LoginUser ou une autre action est correcte pour stocker l'utilisateur
      dispatch(
        LoginUser_google({ username: user.displayName, email: user.email })
      ).unwrap();

      navigate("/home"); // Redirection vers la page d'accueil ou de tableau de bord
    } catch (error) {
      console.error("Authentication failed:", error);
    }
  };

  return (
    <div className="login-background">
      <form onSubmit={formik.handleSubmit}>
        <MDBContainer fluid>
          <MDBRow className="d-flex justify-content-center align-items-center h-100">
            <MDBCol col="12">
              <MDBCard
                className="bg-dark text-white my-5 mx-auto"
                style={{ borderRadius: "1rem", maxWidth: "400px" }}
              >
                <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">
                    Please enter your login and password!
                  </p>

                  <MDBInput
                    wrapperClass="mb-4 mx-5 w-100"
                    labelClass="text-white"
                    label="Email address"
                    id="email"
                    type="email"
                    size="lg"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="email"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-danger">{formik.errors.email}</div>
                  ) : null}

                  <MDBInput
                    wrapperClass="mb-4 mx-5 w-100"
                    labelClass="text-white"
                    label="Password"
                    id="password"
                    type="password"
                    size="lg"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="password"
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-danger">{formik.errors.password}</div>
                  ) : null}

                  <p className="small mb-3 pb-lg-2">
                    <a className="text-white-50" href="#!">
                      Forgot password?
                    </a>
                  </p>
                  <MDBBtn
                    type="submit"
                    outline
                    className="mx-2 px-5"
                    color="white"
                    size="lg"
                  >
                    Login
                  </MDBBtn>

                  <div className=" mt-1 mb-5">
                    <MDBBtn
                      tag="a"
                      color="none"
                      className="m-3"
                      style={{ color: "white" }}
                    >
                      <FaGoogle
                        onClick={handleAuth}
                        style={{ fontSize: "60px" }}
                      />
                    </MDBBtn>
                  </div>

                  <div>
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <Link to="/register" className="text-white-50 fw-bold">
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </form>
    </div>
  );
}

export default Login;
