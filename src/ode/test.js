import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
} from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { object, string } from 'yup';
import { useFormik } from 'formik';
import { registerUser } from '../feature/Userslice'; // Import registerUser
import { useNavigate } from 'react-router-dom';
import './test.css';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Define validation schema with yup for registration
  const validationSchema = object({
    username: string().required('Username is required'),
    email: string().email('Invalid email format').required('Email is required'),
    password: string().required('Password is required')
  });

  // Initialize formik with initial values, validation schema, and onSubmit function
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
     try {
        await dispatch(registerUser(values)).unwrap(); // Use registerUser for registration
        navigate('/login'); // Redirect to the home page or dashboard on successful registration
      } catch (error) {
        console.error('Registration failed:', error);
        // Handle the registration error here
      } 
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>

      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
            <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
              <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                <p className="text-white-50 mb-5">Please enter your details to create an account!</p>

               

                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Username' id='username'
                  type='text'
                  size="lg"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name='username'/>
                {formik.touched.username && formik.errors.username ? (
                  <div className="text-danger">{formik.errors.username}</div>
                ) : null}

                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='email'
                  type='email'
                  size="lg"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name='email'/>
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-danger">{formik.errors.email}</div>
                ) : null}

                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='password'
                  type='password'
                  size="lg"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name='password'/>
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-danger">{formik.errors.password}</div>
                ) : null}

                <MDBBtn type="submit" outline className='mx-2 px-5' color='white' size='lg'>
                  Register
                </MDBBtn>

                <div className='d-flex flex-row mt-3 mb-5'>
                  <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                    <MDBIcon fab icon='facebook-f' size="lg"/>
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                    <MDBIcon fab icon='twitter' size="lg"/>
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                    <MDBIcon fab icon='google' size="lg"/>
                  </MDBBtn>
                </div>

                <div>
                  <p className="mb-0">Already have an account? <a href="/login" className="text-white-50 fw-bold">Login</a></p>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </form>
  );
}

export default Register;
