import React from 'react';
import SignIn from '../components/Signin';
import ScrollToTop from '../components/ScrollToTop';

function SigninPage() {
  return (
    <>
      {/* Scrolls to top when changing page */}
      <ScrollToTop />
      <SignIn />
    </>
  );
}

export default SigninPage;
