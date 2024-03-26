import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Function to generate a random 6-digit OTP
  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleEmailSend = async () => {
    try {
      // You should add validation for email format here

      // Call your API endpoint to send OTP via email
      const response = await fetch('/api/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsEmailSent(true);
        setMessage('OTP sent successfully!');
        setOtp('1234'); // Assuming default OTP is '1234'
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      setError('Failed to send OTP. Please try again.');
    }
  };

  const handleOtpVerify = () => {
    // Here you would verify the OTP entered by the user
    // For simplicity, let's assume the OTP is '1234'
    if (otp === '1234') {
      setIsOtpVerified(true);
    } else {
      setError('Invalid OTP');
    }
  };

  const handleRegister = async () => {
    try {
      // Add password validation here if needed

      // Call your API endpoint to register the user
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setMessage('Registration successful!');
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {message && <p>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setIsEmailSent(false); // Reset email sent status when email changes
          }}
        />
        {!isEmailSent && <button onClick={handleEmailSend}>Request OTP</button>}
      </div>
      {isEmailSent && (
        <div>
          <label>OTP:</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={handleOtpVerify}>Verify OTP</button>
        </div>
      )}
      {isOtpVerified && (
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button onClick={handleRegister}>Register</button>
        </div>
      )}
    </div>
  );
};

export default Register;
