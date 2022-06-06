import Partner from "../models/Partner.js";

export const createPartner = async (req, res) => {
  const newPartner = new Partner(req.body);

  try {
    const savedPartner = await newPartner.save();
    res.status(200).json(savedPartner);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updatePartnerById = async (req, res) => {
  try {
    const updatedPartner = await Partner.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedPartner);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deletePartnerById = async (req, res) => {
  try {
    await Partner.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Partner has been deleted!" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getPartnerById = async (req, res) => {
  try {
    const partner = await Partner.findById(req.params.id);
    res.status(200).json(partner);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllPartners = async (req, res) => {
  const latestPartnersQuery = req.query.new;

  try {
    let partners = latestPartnersQuery
    ? await Partner.find().sort({ _id: -1 }).limit(5)
    : await Partner.find();
    res.status(200).json(partners);
  } catch (error) {
    res.status(500).json(error);
  }
};