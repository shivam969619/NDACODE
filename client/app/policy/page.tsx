"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ElearningPrivacyPolicy: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(3);
  const [route, setRoute] = useState("Login");
  return (
    <>
      <Header
        open={open}
        setOpen={setOpen}
        setRoute={setRoute}
        activeItem={activeItem}
        route={route}
      />
      <br />
      <br />
      <div className="text-black dark:text-white pl-5">
        <h1 className="mb-4 text-2xl font-bold">
          Privacy Policy for Elearning
        </h1>

        <p className="mb-4">
          At Elearning, we take your privacy seriously. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information
          when you use our website and services.
        </p>

        <h2 className="mb-2 text-xl font-semibold">Information We Collect</h2>

        <p className="mb-4">
          We may collect personal information that you voluntarily provide to us
          when using our website or services. This information may include, but
          is not limited to: - Name - Email address - User-generated content -
          Any other information you choose to provide
        </p>

        <h2 className="mb-2 text-xl font-semibold">
          How We Use Your Information
        </h2>

        <p className="mb-4">
          We may use the information we collect for various purposes, including:
          - Providing and personalizing our services - Improving our website and
          services - Communicating with you - Responding to your inquiries -
          Sending promotional materials
        </p>

        <h2 className="mb-2 text-xl font-semibold">Sharing Your Information</h2>

        <p className="mb-4">
          We may share your information with third parties only in the ways
          described in this Privacy Policy or with your explicit consent.
        </p>

        <h2 className="mb-2 text-xl font-semibold">Security</h2>

        <p className="mb-4">
          We take reasonable measures to protect your information from
          unauthorized access, disclosure, alteration, and destruction.
        </p>

        <h2 className="mb-2 text-xl font-semibold">
          Changes to This Privacy Policy
        </h2>

        <p className="mb-4">
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page. You are
          advised to review this Privacy Policy periodically for any changes.
        </p>

        <h2 className="mb-2 text-xl font-semibold">Contact Us</h2>

        <p className="mb-4">
          If you have any questions or concerns about our Privacy Policy, please
          contact us at [your contact information].
        </p>

        <p className="mb-4">This Privacy Policy was last updated on [date].</p>
      </div>
      <Footer />
    </>
  );
};

export default ElearningPrivacyPolicy;
