import React from "react";

function Services() {
  return (
    <section className="services">
      <div className="services-container">
        <div className="service">
          <img
            src="./images/icon-access-anywhere.svg"
            alt="anywhere"
            className="service-icon"
          />
          <h3 className="service-info">Access your files, anywhere</h3>
          <p className="service-text">
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>
        <div className="service">
          <img
            src="./images/icon-security.svg"
            alt="security"
            className="service-icon"
          />
          <h3 className="service-info">Security you can trust</h3>
          <p className="service-text">
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </div>
        <div className="service">
          <img
            src="./images/icon-collaboration.svg"
            alt="collab"
            className="service-icon"
          />
          <h3 className="service-info">Real-time collaboration</h3>
          <p className="service-text">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>
        <div className="service">
          <img
            src="./images/icon-any-file.svg"
            alt="any file"
            className="service-icon"
          />
          <h3 className="service-info">Store any type of file</h3>
          <p className="service-text">
            {" "}
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
