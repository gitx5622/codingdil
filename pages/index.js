import React, { useState } from 'react';
import { Paper, Checkbox, Button } from '@mui/material';
import InputUnstyled from '@mui/base/InputUnstyled';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { styled } from '@mui/system';
import { useRouter } from 'next/router';

const StyledInputElement = styled('input')`
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4375em;
  background: rgb(243, 246, 249);
  border: 1px solid #e5e8ec;
  border-radius: 10px;
  padding: 6px 10px;
  color: #20262d;
  transition: width 300ms ease;

  &:hover {
    background: #eaeef3;
    border-color: #e5e8ec;
  }
`;

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
    return (
        <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />
    );
});

const Index = () => {
    const [signupDetails, setSignupDetails] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: ""
    });

    const router = useRouter();


    const handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;

        setSignupDetails((signupDetails) => {
            return {
                ...signupDetails,   // Spread Operator               
                [name]: value
            }
        })
    }

    const handleSubmit = (event) => {
        event.persist();
        event.preventDefault();
        const bodyData = {
            username: signupDetails.username,
            firstName: signupDetails.firstName,
            lastName: signupDetails.lastName,
            email: signupDetails.email
        }
        if (bodyData.username !== "" && bodyData.firstName !== "" &&
            bodyData.lastName !== "" && bodyData.email !== "") {
            console.log(bodyData);
            localStorage.username = bodyData.username;
            localStorage.firstname = bodyData.firstName;
            localStorage.lastname = bodyData.lastName;
            router.push("/photos");
        }

    }

    return (
        <div style={styles.background}>
            <div>
                <Paper style={styles.register}>
                    <h1 style={styles.title}>Create account</h1>
                    <h3 style={styles.title}>Already have an account? <span style={styles.signin}>Sign in</span></h3>
                    <form onSubmit={handleSubmit}>
                        <CustomInput name="username" onChange={handleChange} style={styles.textfield} aria-label="Username" placeholder="Username" />
                        <div style={styles.doubleField}>
                            <CustomInput name="firstName" onChange={handleChange} style={styles.textfield} aria-label="First Name" placeholder="First Name" />
                            <CustomInput name="lastName" onChange={handleChange} style={styles.textfield} aria-label="Last Name" placeholder="Last Name" />
                        </div>
                        <CustomInput name="email" onChange={handleChange} style={styles.textfield} aria-label="Email" placeholder="Email" />
                        <Button type="submit" style={styles.button} variant="contained">Sign Up <ArrowForwardIcon style={styles.arrow}/></Button><br />
                        <Checkbox /> <span>I have read and agreed to Terms and Conditions</span>
                    </form>
                </Paper>
            </div>
        </div>
    )
}

export default Index

const styles = {
    background: {
        background: "linear-gradient(to right, #C70039, #FCCBC1)",
        height: "100vh",
    },
    register: {
        position: 'absolute',
        left: '50%',
        width: "33%",
        top: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: "10px",
        padding: "20px"
    },
    textfield: {
        padding: "10px",
        marginBottom: "20px"
    },
    textfield: {
        padding: "10px",
        marginBottom: "20px"
    },
    title: {
        textAlign: 'center',
    },
    signin: {
        color: "blue",
    },
    doubleField: {
        display: "flex"
    },
    button: {
        width: "100%",
        borderRadius: "10px"
    },
    arrow: {
        position:"absolute", 
        right: 10
    }

}
