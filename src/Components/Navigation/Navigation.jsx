import React from "react";
import { navigationMenu } from "./NavigationMenu";
import { useNavigate } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
//import * as React from 'react';
//import Button from '@mui/material/Button';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { store } from "../../Store/store";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Store/Auth/Action";

const Navigation = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const {auth}=useSelector(store=>store)
  const dispatch = useDispatch()

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("logout");
    handleClose();
    dispatch(logout())
  };
  return (
    <div className="h-screen sticky top-0">
      <div>
        <div className="py-5">
          <img
            height={30}
            width={30}
            src="https://th.bing.com/th/id/OIP.2gX4dsfj_NFw5FNBToxylwHaFY?w=214&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt=""
          />
        </div>
        <div className="space-y-6">
          {navigationMenu.map((item) => (
            <div
              className="cursor-pointer flex space-x-3 
            items-center"
              onClick={() =>
                item.title === "Profile"
                  ? navigate(`/profile/${auth.user?.id}`)
                  : navigate(item.path)
              }
            >
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="py-10">
          <Button
            sx={{
              width: "100%",
              borderRadius: "29px",
              py: "15px",
              bgcolor: "#1e88e5",
            }}
            variant="contained"
          >
            Tweet
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Avatar
            alt="username"
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
          />
          <div>
            <p>{auth.user?.fullName}</p>
            <span className="opacity-70">@{auth.user?.fullName.split(" ").join("_").toLowerCase()}</span>
          </div>

          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreHorizIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
