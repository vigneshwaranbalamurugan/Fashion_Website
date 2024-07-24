import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false); // State to track if email is valid

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    // Simple email validation
    const re = /\S+@\S+\.\S+/;
    const validEmail = re.test(inputEmail);
    setIsValidEmail(validEmail);
    setEmailError(''); // Clear email error when user types in email field
  };

  const handleSignIn = async () => {
    try {
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const details=await response.json();
            localStorage.setItem('userdetails', JSON.stringify(details.userdetails));
            alert('Login successful');
        } else {
            const error = await response.json();
            throw error;
        }
    } catch (error) {
        console.error('Login Error:', error);
        alert(error.message);
    }
};

  return (
    <div className="signin-container">
      <h2><center>Sign In</center></h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <p className="error">{emailError}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSignIn} disabled={!isValidEmail}>
        Login
      </button>
    </div>
  );
};

export default SignIn;
