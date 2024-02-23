// import React, { useState } from 'react';
// import './SignUp.css';
// import { Link } from 'react-router-dom';
// function SignUp() {
//   const [email, setEmail] = useState(' ');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('student');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSignUp = (event) => {
//     event.preventDefault();

//     // Regular expression to match PSG Tech email domains
//     const psgTechEmailRegex = /^[a-zA-Z0-9._%+-]+@psg\.edu$/;

//     if (psgTechEmailRegex.test(email)) {
//       // Valid PSG Tech email domain
//       // Here you would typically perform actual signup/authentication
//       alert(`Sign up successful! Role: ${role}`);
//       setErrorMessage('');
//     } else {
//       // Invalid PSG Tech email domain
//       setErrorMessage('Please enter a valid PSG Tech email address');
//     }
//   };

//   return (
//     <div className="signup">
//         <center>

//       <div className="signup-container">
//         <h2>Sign Up</h2>
//         <form onSubmit={handleSignUp}>
//           <label>
//             Role:
//             <select value={role} onChange={(e) => setRole(e.target.value)}>
//               <option value="student">Student</option>
//               <option value="faculty">Faculty</option>
//             </select>
//           </label>
//           <input
//             type="email"
//             placeholder="Enter your PSG Tech email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <Link to="/Homepage"><button type="submit" >Sign Up</button></Link>
//         </form>
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//       </div>
//       </center>

//     </div>
//   );
// }

// export default SignUp;