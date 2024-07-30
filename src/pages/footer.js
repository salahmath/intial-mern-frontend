import React, { useEffect } from 'react';
import { Input, initMDB } from 'mdb-ui-kit';
import 'mdb-ui-kit/css/mdb.min.css'; // Import MDB CSS

const Footer = () => {
  useEffect(() => {
    // Initialize MDB components
    initMDB({ Input });
  }, []);

  return (
    <footer className="bg-body-tertiary text-center">
      {/* Grid container */}
      <div className="container p-4 pb-0">
        {/* Section: Form */}
        <section>
          <form action="">
            {/* Grid row */}
            <div className="row d-flex justify-content-center">
              {/* Grid column */}
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-5 col-12">
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form5Example26"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form5Example26">Email address</label>
                </div>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-auto">
                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-primary mb-4"
                >
                  Subscribe
                </button>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </form>
        </section>
        {/* Section: Form */}
      </div>
      {/* Grid container */}

      {/* Copyright */}
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2020 Copyright:
        <a className="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
