import axios from "axios";

function Login() {

    const submitHandler = e => {
        e.preventDefault();

        // Email declaration AND validation
        const email = e.target.email.value;

        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        // Password declaration
        const password = e.target.password.value


        // Submit Handler Function

        if ( email === '' || password === '') {
            console.log('Fields cannot be empty');
            return;
        }
        if (email !== '' && !regexEmail.test(email))  {
            console.log('Email not valid')
            return;
        }

        if ( email !== 'challenge@alkemy.org' || password !== 'react' ) {
            console.log('Please enter a valid account')
            return;
        }
        console.log('Ready to send info')
        axios.post('http://challenge-react.alkemy.org', {email, password})
        .then ( res => {
            const token = res.data.token;
            console.log(token)
        })
    }


    return (
        <>
        
        <form onSubmit={submitHandler}>
    <label htmlFor="email">Email
        <br/>
        <input type="email" name="email" id="email"/>
    </label>
    <br/>
    <label htmlFor="password">Password
        <br/>
        <input type="password" name="password" id="password"/>
    </label>
    <br />
    <button type="submit">Submit</button>
</form>
        </>
    )
}


export default Login;
