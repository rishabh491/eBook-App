import React from 'react'
import Layout from '../components/layout/Layout'


import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import { Helmet } from 'react-helmet';
const Contact = () => {
  return (
    <Layout>
    <Helmet><title>Contact</title></Helmet>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="https://png.pngtree.com/png-clipart/20190903/original/pngtree-vector-service-label-illustration-elements-png-image_4440289.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;