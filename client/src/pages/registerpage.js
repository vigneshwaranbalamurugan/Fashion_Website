import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';


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
  const [showPassword, setShowPassword] = useState(false); 
  const [cshowPassword, csetShowPassword] = useState(false);

  const handleEmailSend = async () => {
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      setTimeout(() => {
        setEmailError('');
      }, 10000);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/auth/request-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error sending OTP');
      }

      setIsEmailSent(true);
      setIsOtpFieldVisible(true);
      setRegistrationMessageColor('success');
      setRegistrationMessage('OTP sent successfully!');
      setTimeout(() => {
        setRegistrationMessage('');
      }, 10000);
    } catch (error) {
      setEmailError(error.message);
      setRegistrationMessageColor('error');
      setRegistrationMessage(error.message);
      setTimeout(() => {
        setRegistrationMessage('');
        setEmailError('');
      }, 10000);
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleOtpVerify = async () => {
    try {
      const response = await fetch('http://localhost:5000/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      });

      if (!response.ok) {
        setIsOtpVerified(false);
        setIsOtpMismatch(true);
        setRegistrationMessageColor('error');
        setRegistrationMessage('Invalid OTP');
        setTimeout(() => {
          setRegistrationMessage('');
        }, 10000);
        return
      }

      const data = await response.json();

      if (data.message === 'Account verified!') {
        setIsOtpVerified(true);
        setIsOtpMismatch(false);
        setRegistrationMessage('OTP verified successfully!');
        setRegistrationMessageColor('success');
        setTimeout(() => {
          setRegistrationMessage('');
        }, 10000);
      } else {
        setIsOtpVerified(false);
        setIsOtpMismatch(true);
        setRegistrationMessageColor('error');
        setRegistrationMessage('Invalid OTP');
        setTimeout(() => {
          setRegistrationMessage('');
        }, 10000);
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setRegistrationMessageColor('error');
      setTimeout(() => {
        setRegistrationMessage('');
      }, 10000);
      setRegistrationMessage('Failed to verify OTP');
    }
  };

  const handleRegister = async () => {
    try {
      if (password === confirmPassword && password !== '' && confirmPassword !== '') {
        const response = await fetch('http://localhost:5000/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Error registering user');
        }

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
        setRegistrationMessage('Password must match and be non-empty');
        setTimeout(() => {
          setRegistrationMessage('');
        }, 10000);
        setRegistrationMessageColor('error');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      setRegistrationMessage(error.message);
      setTimeout(() => {
        setRegistrationMessage('');
      }, 10000);
      setRegistrationMessageColor('error');
    }
  };


  const handleResendOTP = async () => {
    try {
      const response = await fetch('http://localhost:5000/auth/request-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error sending OTP');
      }

      setOtp('');
      setIsOtpMismatch(false);
      setRegistrationMessage('OTP resent successfully!');
      setRegistrationMessageColor('success');
      setTimeout(() => {
        setRegistrationMessage('');
      }, 10000);
    } catch (error) {
      console.error('Error resending OTP:', error);
      setRegistrationMessage(error.message);
      setRegistrationMessageColor('error');
      setTimeout(() => {
        setRegistrationMessage('');
      }, 10000);
    }
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
      <h2>
        <center>SIGN UP</center>
      </h2>
      <div>
        <label>Email:</label>
        <div className="input-with-icon">
          <i><FaEnvelope /></i>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError('');
            }}
            readOnly={isOtpVerified || isEmailSent}
          />
        </div>
        {emailError && <p className="error">{emailError}</p>}
        {!isEmailSent && <button onClick={handleEmailSend}>Request OTP</button>}
      </div>
      {isOtpFieldVisible && !isOtpVerified && (
        <div>
          <label>OTP:</label>
          <div className="input-with-icon">
            <i> <FaLock /></i>
            <input
              type="text"
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
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
          <div className="input-with-icon">
            <i> <FaLock /></i>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaEyeSlash
              className={`eye-icon ${showPassword ? 'hidden' : ''}`}
              onClick={() => setShowPassword(!showPassword)}
            />

            <FaEye
              className={`eye-icon ${showPassword ? '' : 'hidden'}`}
              onClick={() => setShowPassword(!showPassword)}
            />

          </div>
          <label>Confirm Password:</label>
          <div className="input-with-icon">
            <i> <FaLock /></i>
            <input
            type={cshowPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              style={{ borderColor: passwordMatch ? '' : 'red' }}
            />
            <FaEyeSlash
              className={`eye-icon ${cshowPassword ? 'hidden' : ''}`}
              onClick={() => csetShowPassword(!cshowPassword)}
            />

            <FaEye
              className={`eye-icon ${cshowPassword ? '' : 'hidden'}`}
              onClick={() => csetShowPassword(!cshowPassword)}
            />

          </div>
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
