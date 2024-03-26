import React, { useState } from 'react';


const Register = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpFieldVisible, setIsOtpFieldVisible] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isOtpMismatch, setIsOtpMismatch] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');
  const [registrationMessageColor, setRegistrationMessageColor] = useState('');

  const handleEmailSend = async () => {
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setIsEmailSent(true);
    setIsOtpFieldVisible(true);
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleOtpVerify = () => {
    if (otp === '1234') {
      setIsOtpVerified(true);
      setIsOtpMismatch(false);
      setRegistrationMessage('OTP verified successfully!');
      setRegistrationMessageColor('success');
    } else {
      setIsOtpVerified(false);
      setIsOtpMismatch(true);
      
      setRegistrationMessageColor('error');
    }
  };

  const handleRegister = async () => {
    if (password === confirmPassword) {
      alert('Registration Successful!');
      
      setRegistrationMessageColor('success');
      setEmail('');
      setOtp('');
      setPassword('');
      setConfirmPassword('');
      setIsEmailSent(false);
      setIsOtpFieldVisible(false);
      setIsOtpVerified(false);
      setIsOtpMismatch(false);
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
      setRegistrationMessage('Password do not match.');
      setRegistrationMessageColor('error');
    }
  };

  const handleResendOTP = () => {
    setOtp('');
    setIsOtpMismatch(false);
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmPasswordValue = e.target.value;
    setConfirmPassword(confirmPasswordValue);
    if (password !== confirmPasswordValue) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  };

  return (
    <div className="register-container">
      <h2><center>SIGN UP</center></h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError('');
          }}
        />
        {emailError && <p className="error">{emailError}</p>}
        {!isEmailSent && <button onClick={handleEmailSend}>Request OTP</button>}
      </div>
      {isOtpFieldVisible && !isOtpVerified && (
        <div>
          <label>OTP:</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={handleOtpVerify}>Verify OTP</button>
          {isOtpMismatch && (
            <p className="error">
              OTP mismatch. Please try again or click{' '}
              <button onClick={handleResendOTP}>Resend OTP</button>.
            </p>
          )}
        </div>
      )}
      <p className={`registration-message ${registrationMessageColor}`}>
        {registrationMessage}
      </p>
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
            onChange={handleConfirmPasswordChange}
            style={{ borderColor: passwordMatch ? '' : 'red' }}
          />
          {!passwordMatch && <p className="error">Password do not match.</p>}
          <button onClick={handleRegister} disabled={!passwordMatch}>
            Register
          </button>
        </div>
      )}
    </div>
  );
};

export default Register;