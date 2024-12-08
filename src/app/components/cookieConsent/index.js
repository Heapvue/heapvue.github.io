import React from "react";
import Link from "next/link";
import CookieConsent from "react-cookie-consent";

const CookieBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept all Cookies"
      declineButtonText="Decline Cookies"
      enableDeclineButton={true}
      onAccept={() => console.log("Accepted all cookies")}
      onDecline={() => console.log("Manage preferences clicked")}
      cookieName="myCookieConsent"
      style={{
        background: "#f8f5ff",
        color: "#191919",
        fontSize: "12px",
      }}
      buttonStyle={{
        backgroundColor: "#191919",
        color: "#fff",
        height: "50px",
        border: "none",
        padding: "10px 20px",
        fontSize: "14px",
        cursor: "pointer",
      }}
      declineButtonStyle={{
        backgroundColor: "#fff",
        color: "#191919",
        border: "1px solid #191919",
        height: "50px",
        padding: "10px 20px",
        fontSize: "14px",
        cursor: "pointer",
        marginLeft: "10px",
      }}
    >
      <div style={{ padding: "0px" }}>
        <p style={{ margin: "0 0 5px 0", lineHeight: "1.5" }}>
          We use cookies to improve your browsing experience, serve personalized
          content, and analyze our traffic. By clicking{" "}
          <strong>Accept all Cookies</strong>, you agree to the storing of
          cookies on your device.
        </p>
        <p style={{ margin: "0 0 5px 0" }}>
          You can customize your settings by clicking{" "}
          <strong>Manage Preferences</strong>. For more details, see our{" "}
          <Link
            href="/cookie-policy"
            style={{ color: "#3f3f3f", textDecoration: "underline" }}
          >
            Cookie Policy
          </Link>
          .
        </p>
      </div>
    </CookieConsent>
  );
};

export default CookieBanner;
