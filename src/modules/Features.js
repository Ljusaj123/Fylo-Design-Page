import React from "react";

function Features() {
  return (
    <section className="features">
      <div className="features-container">
        <div className="features-image-container">
          <img src="./images/illustration-stay-productive.png" alt="" />
        </div>
        <div className="features-text-container">
          <h2 id="features-title">Stay productive, wherever you are</h2>
          <p className="features-text">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="features-text">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <a href="/">
            See how Fylo works <img src="./images/icon-arrow.svg" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Features;
