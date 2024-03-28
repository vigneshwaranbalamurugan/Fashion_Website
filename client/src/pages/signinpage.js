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

  const handleSignIn = () => {
    // Implement sign-in logic here
    console.log('Email:', email);
    console.log('Password:', password);
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
