import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPartner } from "../../store/partnerSlice";
import { selectUserState } from "../../store/userSlice";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase/firebase";
import "./NewPartner.css";

const NewPartner = () => {
  const [inputs, setInputs] = useState([]);
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const { userInfo } = useSelector(selectUserState);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();

    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const partner = {
            ...inputs,
            img: downloadURL,
          };
          dispatch(
            createPartner({ partnerInfo: partner, token: userInfo.token })
          );
        });
      }
    );

    // dispatch(createPartner({ partnerInfo: inputs, token: userInfo.token }));
  };

  return (
    <div className="newPartner">
      <h1 className="addPartnerTitle">New Partner</h1>
      <form className="addPartnerForm">
        <div className="addPartnerData">
          <label>Image</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="addPartnerData">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Product Title"
            onChange={handleChange}
          />
        </div>
        <div className="addPartnerData">
          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={handleChange}
          />
        </div>
        <div className="addPartnerData">
          <label>Offer</label>
          <input
            type="text"
            name="offer"
            placeholder="Offer"
            onChange={handleChange}
          />
        </div>
        <div className="addPartnerData">
          <label>Percentage</label>
          <input
            type="number"
            placeholder="Percentage"
            onChange={handleChange}
          />
        </div>
        <button className="addPartnerButton" onClick={handleClick}>
          Create
        </button>
      </form>
    </div>
  );
};

export default NewPartner;