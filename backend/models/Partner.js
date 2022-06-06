import mongoose from "mongoose";

const PartnerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    location: {
      type: String,
      required: true,
    },
    offer: {
      type: String,
      required: true,
      },
    percentage: {
      type: Number,
      required: true,
      },
    img: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Partner", PartnerSchema);