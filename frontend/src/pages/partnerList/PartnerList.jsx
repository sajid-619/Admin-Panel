import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deletePartner,
  getAllPartners,
  selectPartnerState,
} from "../../store/partnerSlice";
import { selectUserState } from "../../store/userSlice";
import "./PartnerList.css";

const PartnerList = () => {
  const dispatch = useDispatch();
  const { partners } = useSelector(selectPartnerState);
  const { userInfo } = useSelector(selectUserState);

  useEffect(() => {
    dispatch(getAllPartners({ token: userInfo.token }));
  }, [dispatch, userInfo.token]);

  const handleDelete = (id) => {
    dispatch(deletePartner({ id, token: userInfo.token }));
  };

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 220,
    },
    {
      field: "partner",
      headerName: "Partner",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="partnerListData">
            <img src={params.row.img} alt="" className="partnerListImg" />
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: "location",
      headerName: "Location",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/partners/${params.row._id}`}>
              <button className="partnerListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="partnerListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      {partners.length > 0 ? (
        <div className="partnerList">
          <DataGrid
            rows={partners}
            disableSelectionOnClick
            columns={columns}
            getRowId={(row) => row._id}
            pageSize={8}
            checkboxSelection
          />
        </div>
      ) : (
        <h1 className="userListLoading">Loading...</h1>
      )}
    </>
  );
};

export default PartnerList;
