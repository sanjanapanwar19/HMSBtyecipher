import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ images, collaspeEvent }) => {
  console.log("header component rendered");
  console.log("collase Event in header component", collaspeEvent);
  const [isOpen, setisOpen] = useState(false);
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  console.log("image in header component", loggedUser.profileImage);
  const { collasped, setCollasped } = collaspeEvent;
  const isOPenHandler = () => {
    setisOpen(!isOpen);
  };
  const isClosehandle = (e) => {
    if (!e.target.closest(".dropdown")) {
      setisOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", isClosehandle);
    return () => {
      document.removeEventListener("mousedown", isClosehandle);
    };
  }, []);
  console.log("props images in header component", images, collaspeEvent);
  console.log("sanjana panwar in header component");
  return (
    <nav class="header-nav">
      <div class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <div class="row w-100">
            <div class="col-xxl-12 d-flex justify-content-between ">
              <button class="collapse-btn">
                <img
                  src={images.collapsBtn}
                  alt="collapse btn"
                  onClick={() => {
                    setCollasped(!collasped);
                  }}
                />
              </button>
              <div class="avatar">
                <div class="dropdown">
                <span className="d-flex align-items-center cusProfileCir">
                  <button
                    class={`dropdown-toggle ${isOpen && "show"}`}
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded={isOpen ? "true" : "false"}
                    onClick={isOPenHandler}
                  >
                    <img
                      src={
                        loggedUser.profileImage
                          ? `http://localhost:4000${loggedUser.profileImage}`
                          : images.avatar
                      }
                      alt=""
                    />
                    <h6>
                      {loggedUser.name}
                      <span>Admin</span>
                    </h6>
                    </button>
                    </span>
                  <ul
                    class={`dropdown-menu ${isOpen && "show"}`}
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link class="dropdown-item" to={"/profile"}>
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to={"/ChangePassword"}>
                        Change Password
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to={"/login"}>
                        Log Out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
