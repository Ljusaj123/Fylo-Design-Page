import React from "react";

function SignIn() {
  return (
    <div className="sign-in">
      <div className="sign-in-container">
        <div className="text-container">
          <h2>Get early access today</h2>
          <p>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <div className="input-button-container">
          <input type="email" placeholder="email@example.com" />
          <button className="button">Get started For Free</button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
