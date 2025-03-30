import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import AboutUs from './components/home/AboutUs';
import Features from './components/home/Feature';
import Header from './components/home/Header';
import Signin from './pages/signin/signin';
import ForgetPassword from './pages/forget_password/forget_password'
import ResetPassword from './pages/reset_password/reset_password'
import SuccessfulReset from './pages/reset_password/results/successful';
import FailedReset from './pages/reset_password/results/failed';
import ResetVerify from './pages/reset_password/results/verify'; 
import SignUp from './pages/signup/signup/signup';
import SignUpVerify from './pages/signup/verify/verify'
import SignUpVerifySuccessful from './pages/signup/verify/sucessful'
import SignUpVerifyFailed from './pages/signup/verify/fail'

function App() {
  return (
    <Router>
      <div className="bg-hero-gradient min-h-screen">
        <Header />
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/features" element={<Features />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password/:uidb64/:token/" element={<ResetPassword />} />
        <Route path="/reset-password/successful/:uidb64/:token/" element={<SuccessfulReset />} />
        <Route path="/reset-password/failed" element={<FailedReset/>} />
        <Route path="/reset-verification" element={<ResetVerify />} />
        <Route path="/sign-up-verification/" element={<SignUpVerify />} />
        <Route path="/sign-up-verification/successful/:uidb64/:token/" element={<SignUpVerifySuccessful />} />
        <Route path="/sign-up-verification/failed" element={<SignUpVerifyFailed />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;