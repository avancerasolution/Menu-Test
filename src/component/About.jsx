import React, { useEffect } from "react";
import aboutimg from "../assets/about1.jpeg";
import { useSelector, useDispatch } from "react-redux";
import { fetchAbout } from "../Redux/action/about";
import { convert } from "html-to-text";
import { toast } from "react-hot-toast";

function About() {
  const dispatch = useDispatch();
  const { about, error } = useSelector((state) => state.about);

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
                <img
                  src={
                    window.env.ASSETS_URL + about.result.image === undefined ? (
                      <></>
                    ) : (
                      window.env.ASSETS_URL + about.result.image
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
  );
}

export default About;
