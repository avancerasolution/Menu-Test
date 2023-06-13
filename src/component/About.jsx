import React, { useEffect } from "react";
import aboutimg from "../assets/about1.jpeg";
import { useSelector, useDispatch } from "react-redux";
import { fetchAbout } from "../Redux/action/about";
import { convert } from "html-to-text";
import { toast } from "react-hot-toast";

function About() {
  const dispatch = useDispatch();
  const { about, error } = useSelector((state) => state.about);
  console.log(about);
  useEffect(() => {
    dispatch(fetchAbout());
  }, [dispatch]);
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

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
                    "http://154.12.253.133:5000/assets/" +
                      about.result.image ===
                    undefined ? (
                      <></>
                    ) : (
                      "http://154.12.253.133:5000/assets/" + about.result.image
                    )
                  }
                  alt="Image"
                />
              )}
            </div>
          )}
          <div className="col-sm-6">
            {about.result.details && about.result.details === undefined ? (
              <></>
            ) : (
              <p>
                {convert(
                  about.result.details === undefined ? (
                    <></>
                  ) : (
                    about.result.details
                  )
                )}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
