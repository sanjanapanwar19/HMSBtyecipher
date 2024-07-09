import React, { useEffect, useState } from "react";
import Sidebar from "../../SideBar/Sidebar";
import Header from "../../Header/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteStaff from "../StaffComponent/DeleteStaff";

const Staff = ({ images, collaspeEvent }) => {
  const [sdata, setSdata] = useState([]);
  const [staffMember, setStaffMember] = useState([]);
  const [isDeleteClick, setIsDeleteClick] = useState({
    flag: false,
    eachStaff: {},
  });
  const [searchString, setSearchString] = useState("");
  console.log("is delete clikc", isDeleteClick);
  const { collasped, setCollasped } = collaspeEvent;
  const deleteHanlde = (flag, eachStaff) => {
    console.log("delete handle in staff called");
    console.log("each satff is", eachStaff);
    setIsDeleteClick({
      flag: flag,
      eachStaff: eachStaff,
    });
  };
  const searchHandle = () => {
    console.log("seach handle fun of staff component called");
    const searchStringLowerCase = searchString.toLowerCase();
    console.log("searchStringLowerCase", searchStringLowerCase);
    const serachResult = sdata.filter((item) => {
      return (
        item.fullName.toLowerCase().includes(searchStringLowerCase) ||
        item.gender.toLowerCase().startsWith(searchStringLowerCase) ||
        item.specialization.toLowerCase().startsWith(searchStringLowerCase) ||
        item.role.toLowerCase().startsWith(searchStringLowerCase)
      );
    });
    setStaffMember(serachResult);
  };
  useEffect(() => {
    console.log("use effect hook of staff component has been called");
    const fun = async (req, res) => {
      try {
        const res = await axios.get("/staff/viewAllStaff");
        console.log("res", res.data.allStaff);
        setSdata(res.data.allStaff);
        setStaffMember(res.data.allStaff);
      } catch (err) {
        console.log("err is", err);
      }
    };
    fun();
  }, [isDeleteClick]);

  useEffect(() => {
    console.log(
      "use effect is called when search string changes in staff component"
    );
    if (searchString.length > 0) {
      searchHandle();
    } else {
      setStaffMember(sdata);
    }
  }, [searchString]);

  return (
    <div className="wrapper">
      <Sidebar images={images} collaspeEvent={{ collasped, setCollasped }} />
      <div className={`main-container ${collasped && "main-content_large"}`}>
        <Header images={images} collaspeEvent={{ collasped, setCollasped }} />
        <div class="content">
          <div class="row mb-3">
            <div class="col-xxl-12">
              <div class="row justify-content-between align-items-center mb-3">
                <div class="col-lg-4">
                  <div class="greetingsText">
                    <div class="greetingsText-heading">
                      <h3>Staff</h3>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 d-flex">
                  <div class="buttons d-flex">
                    <Link to="/AddStaff" class="ctr-btn">
                      <img src={images.add} alt="" />
                    </Link>
                  </div>
                  <input
                    type="text"
                    class="custom-input-field"
                    placeholder="Search Staff"
                    value={searchString}
                    onChange={(e) => {
                      setSearchString(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-xxl-12">
                  <div class="table-responsive">
                    <table class="custom-table">
                      <thead>
                        <tr>
                          <th scope="col">Id</th>
                          <th scope="col">Staff Name</th>
                          <th scope="col">Specialization</th>
                          <th scope="col">Gender</th>
                          <th scope="col">Date of Birth</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {staffMember.map((eachStaff, index) => (
                          <tr>
                            <td>{index + 1}</td>
                            <td className="d-flex">
                              <span className="d-flex align-items-center cusProfileCir">
                                <img
                                  src={
                                    eachStaff.profileImage
                                      ? `http://localhost:4000${eachStaff.profileImage}`
                                      : images.avatar
                                  }
                                  alt=""
                                />
                                <span>
                                  {eachStaff.fullName}
                                  <small style={{ display: "block" }}>
                                    {eachStaff.role}
                                  </small>
                                </span>
                              </span>
                            </td>
                            <td>{eachStaff.specialization}</td>
                            <td>{eachStaff.gender}</td>
                            <td>{eachStaff.dob}</td>
                            <td>
                              <div class="action-btn">
                                <Link to="/EditStaff" state={{ eachStaff }}>
                                  <img src={images.edit} alt="" />
                                </Link>
                                <Link
                                  onClick={(e) => {
                                    deleteHanlde(true, eachStaff);
                                  }}
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                >
                                  <img src={images.Delete} alt="" />
                                </Link>
                                <Link to="/ViewStaff" state={{ eachStaff }}>
                                  <img src={images.view} alt="" />
                                </Link>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DeleteStaff data={{ isDeleteClick, deleteHanlde, images }} />
    </div>
  );
};

export default Staff;
