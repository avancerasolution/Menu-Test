import React, { useEffect } from "react";

function PolicyPage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="policy">
      <div className="container-fluid abt">
        <div className="row">
          <div className="col-sm-12">
            <h2>Privacy Policy</h2>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>Privacy Policy</h1>
            <p>
              We take your privacy seriously at Burger Joint. This Privacy
              Policy describes how we collect, use, and share information about
              you when you use our website.
            </p>
            <h2>Information We Collect</h2>
            <p>
              We collect information about you when you use our website,
              including:
            </p>
            <ul>
              <li>
                Your name and email address if you sign up for our newsletter
              </li>
              <li>
                Your IP address and browser information for analytics purposes
              </li>
              <li>
                Your order history if you create an account and place orders on
                our website
              </li>
            </ul>
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Improve and personalize your experience on our website</li>
              <li>Process and fulfill your orders</li>
              <li>
                Send you marketing communications if you sign up for our
                newsletter
              </li>
              <li>
                Analyze how our website is used and optimize its performance
              </li>
            </ul>
            <h2>How We Share Your Information</h2>
            <p>
              We may share your information with third parties in the following
              circumstances:
            </p>
            <ul>
              <li>To process and fulfill your orders</li>
              <li>
                To send you marketing communications if you sign up for our
                newsletter
              </li>
              <li>
                To comply with legal obligations or protect against potential
                harm to our rights, property, or safety
              </li>
            </ul>
            <p>We do not sell your information to third parties.</p>
            <h2>Security</h2>
            <p>
              We take reasonable measures to protect your information from
              unauthorized access, disclosure, or modification. However, no
              security measures can provide 100% protection.
            </p>
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. If we make
              significant changes, we will notify you by email or through a
              prominent notice on our website.
            </p>
            <h2>Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at privacy@burgerjoint.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PolicyPage;
