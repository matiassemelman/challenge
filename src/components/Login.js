import axios from "axios";
import Swal from "sweetalert2";
import "animate.css";

function Login() {
  // HANDLING SUBMIT FUNCTION ============ OPEN

  const submitHandler = (e) => {
    e.preventDefault();
    // ============= Email declaration AND validation =================

    const email = e.target.email.value;

    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // ============= Password Declaration =================

    const password = e.target.password.value;

    // ============= Sweet Alerts =================

    if (email === "" || password === "") {
      Swal.fire({
        titleText: "Field still empty",
        text: "Enter your email and password to log in",
        icon: "warning",
        showClass: {
          popup: "animate__animated animate__slideInDown",
        },
        hideClass: {
          popup: "animate__animated animate__slideOutDown",
        },
      });
      return;
    }

    if (email !== "" && !regexEmail.test(email)) {
      Swal.fire({
        titleText: "Email not valid",
        text: "Enter a valid email",
        icon: "warning",
        showClass: {
          popup: "animate__animated animate__slideInDown",
        },
        hideClass: {
          popup: "animate__animated animate__slideOutDown",
        },
      });

      return;
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
      Swal.fire({
        titleText: "Please enter a valid account",
        text: "Maybe you write something wrong",
        footer:
          '<a href="https://rebrand.ly/r1ckr0l13r" target="_blank" rel="noopener noreferrer">Forgot your password?</a> ',
        icon: "warning",
        showClass: {
          popup: "animate__animated animate__slideInDown",
        },
        hideClass: {
          popup: "animate__animated animate__slideOutDown",
        },
      });
      return;
    }

// Logged in ===============
    console.log("Ready to send info");
    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem('token', token)

        Swal.fire({
          titleText: "Logged in",
          icon: "success",
          showClass: {
            popup: "animate__animated animate__slideInDown",
          },
          hideClass: {
            popup: "animate__animated animate__slideOutDown",
          },
          showConfirmButton: false,
          timer: 1500,
        });
        console.log('Token recibido');
      });
  };

  // HANDLING SUBMIT FUNCTION ============ CLOSE

  // RENDER

  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">
          Email
          <br />
          <input type="email" name="email" id="email" />
        </label>
        <br />
        <label htmlFor="password">
          Password
          <br />
          <input type="password" name="password" id="password" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Login;
