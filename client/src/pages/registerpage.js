import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpFieldVisible, setIsOtpFieldVisible] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailSend = async () => {
    // Send email and request OTP
    // Assuming API call is made here
    // After successful request:
    setIsEmailSent(true);
    setIsOtpFieldVisible(true);
  };

  const handleOtpVerify = () => {
    // Verify the entered OTP
    // For simplicity, let's assume the default OTP is '1234'
    if (otp === '1234') {
      setIsOtpVerified(true);
    } else {
      setIsOtpVerified(false);
    }
  };

  const handleRegister = async () => {
    // Handle user registration
    // Assuming API call is made here
    // Upon successful registration:
    alert('Registration Successful!');
    // Reset form fields
    setEmail('');
    setOtp('');
    setPassword('');
    setConfirmPassword('');
    setIsEmailSent(false);
    setIsOtpFieldVisible(false);
    setIsOtpVerified(false);
  };

  const handleResendOTP = () => {
    // Resend OTP
    // Assuming API call is made here
    // After successful resend:
    setOtp('');
  };

  return (
    <div>
      <h2>Register</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!isEmailSent && <button onClick={handleEmailSend}>Request OTP</button>}
      </div>
      {isOtpFieldVisible && (
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
          <p>OTP verified successfully!</p>
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
      {!isOtpVerified && isOtpFieldVisible && (
        <button onClick={handleResendOTP}>Resend OTP</button>
      )}
    </div>
  );
};

export default Register;
