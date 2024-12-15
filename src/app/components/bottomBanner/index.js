import React from "react";
import {Button} from "../button";
import Enquiry from "../enquiry";

const BotttomBanner = (props) => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between p-4 bottomBanner">
          <div className="text-center text-lg-start mb-3 mb-lg-0">
            <h2 className="mb-2">{props.title}</h2>
            <p>
              {props.desc}
            </p>
          </div>
          <div>
            <Button
              text="Get in Touch"
              type="button"
              dataBsToggle="modal"
              dataBsTarget="#inquiryModal"
              className="btn btn-dark px-4 py-2"
            />
          </div>
        </div>
      </div>
      <Enquiry />
    </div>
  );
};

export default BotttomBanner;
