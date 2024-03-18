import React from "react";
import Layout from "../components/layout/Layout";
import { Helmet } from "react-helmet";


const About = () => {
  return (
    <Layout>
        <Helmet><title>About</title></Helmet>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="data:image/jpeg;base64,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"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
            commodi illum quidem neque tempora nam.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;