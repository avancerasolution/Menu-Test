import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAbout } from "../Redux/action/about";

import { toast } from "react-toastify";

function About() {
  const dispatch = useDispatch();
  const { about, error } = useSelector((state) => state.about);


  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    dispatch(fetchAbout());
  }, [dispatch]);
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);
  if (error) {
    return <div>Some thing Went Wrong </div>;
  }

  return (
    <Fragment>
      <div className="container-fluid abt">
        <div className="row">
          <div className="col-sm-12">
            <h2>About Us</h2>
          </div>
        </div>
      </div>

      <div className="container about">
        {about && (
          <div className="row">
            {about && about.result === undefined ? (
              <> </>
            ) : (
              <div className="col-sm-6">
                {about.result.image === undefined ? (
                  <></>
                ) : (
                  // eslint-disable-next-line jsx-a11y/img-redundant-alt
                  <img
                    src={
                      process.env.REACT_APP_ASSET_URL + about.result.image ===
                      undefined ? (
                        <></>
                      ) : (
                        process.env.REACT_APP_ASSET_URL + about.result.image
                      )
                    }
                    alt="Image"
                  />
                )}
              </div>
            )}
            <div
              className="col-sm-6"
              dangerouslySetInnerHTML={{ __html: about.result.details }}
            ></div>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default About;
