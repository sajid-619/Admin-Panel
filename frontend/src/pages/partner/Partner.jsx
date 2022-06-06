import { Publish } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectPartnerState } from "../../store/partnerSlice";
import "./Partner.css";

const Partner = () => {
  const { partnerId } = useParams();
  const partnersList = useSelector(selectPartnerState);

  const partner = partnersList.partners.find((data) => data._id === partnerId);

  return (
    <div className="partner">
      <div className="partnerTitleContainer">
        <h1 className="partnerTitle">Partner</h1>
        <Link to="/newPartner">
          <button className="partnerAddButton">Create</button>
        </Link>
      </div>
      <div className="partnerTop">
        <div className="partnerTopLeft"></div>
        <div className="partnerTopRight">
          <div className="partnerInfoTop">
            <img src={partner.img} alt="" className="partnerInfoImg" />
            <span className="partnerName">{partner.title}</span>
          </div>
          <div className="partnerInfoBottom">
            <div className="partnerInfoData">
              <span className="partnerInfoKey">id:</span>
              <span className="partnerInfoValue">{partner._id}</span>
            </div>
            <div className="partnerInfoData">
              <span className="partnerInfoKey">Location:</span>
              <span className="partnerInfoValue">Houston, Texas</span>
            </div>
            <div className="partnerInfoData">
              <span className="partnerInfoKey">Offer:</span>
              <span className="partnerInfoValue">
                {partner.offer}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="partnerBottom">
        <form className="partnerForm">
          <div className="partnerFormLeft">
            <label>Partner Name</label>
            <input type="text" placeholder={partner.title} />
            <label>Partner Location</label>
            <input type="text" placeholder={partner.location} />
            <label>Partner Offer</label>
            <input type="text" placeholder={partner.offer} />
            <label>Discount</label>
            <input type="number" placeholder={partner.discount} />
          </div>
          <div className="partnerFormRight">
            <div className="partnerUpload">
              <img src={partner.img} alt="" className="partnerUploadImg" />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="partnerButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Partner;