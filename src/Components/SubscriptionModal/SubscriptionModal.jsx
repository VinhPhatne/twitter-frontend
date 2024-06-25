import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "none",
  outline: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
};

const features = [
  "Prioritized ranking in conversations and search",
  "See approximately twice as many Tweets between ads in your For You and Following timelines.",
  "Add bold and italic text in your Tweets.",
  "Post longer videos and 1080p video uploads.",
  "All the existing Blue features, including Edit Tweet, Bookmark Folders and early access to new features.",
];

export default function SubscriptionModal({ handleClose, open }) {
  const [plan, setPlan] = React.useState("Anunalluy");

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex items-center space-x-3">
            <IconButton onClick={handleClose} aria-label="delete">
              <CloseIcon />
            </IconButton>
          </div>
          <div className="flex justify-center py-10">
            <div className="w-[80%] space-y-10">
              <div className="p-5 rounded-md flex items-center justify-between bg-slate-400 shadow-lg">
                <h1 className="text-xl pr-5">
                  Blue subscribers with a verified phone number will get a blue
                  checkmark once approved
                </h1>
                <img
                  className="w-24 h-24"
                  src="https://th.bing.com/th/id/R.1d62fb1285bafcf435f7ed0fd80c6a03?rik=q%2b1grEVi87EVfg&pid=ImgRaw&r=0"
                  alt=""
                />
              </div>

              <div className="flex justify-between border rounded-full px-5 py-3 border border-gray-500">
                <div>
                  <span
                    onClick={() => setPlan("Anunalluy")}
                    className={`${
                      plan === "Anunalluy" ? "text-black" : "text-gray-400"
                    } cursor-pointer`}
                  >
                    Anunalluy
                  </span>
                  <span className="text-green-500 text-sm ml-5">SAVE 12%</span>
                </div>
                <p
                  onClick={() => setPlan("monthly")}
                  className={`${
                    plan === "monthly" ? "text-black" : "text-gray-400"
                  } cursor-pointer`}
                >
                  Monthly
                </p>
              </div>

              <div className="space-y-3">
                {features.map((item) => (
                  <div className="flex items-center space-x-5">
                    <FiberManualRecordIcon
                      sx={{ width: "7px", height: "7px" }}
                    />
                    <p className="text-xs">{item}</p>
                  </div>
                ))}
              </div>

              <div className="cursor-pointer flex justify-center bg-gray-500 text-white rounded-full px-5 py-3">
                <span className="line-through italic">3.000.000 VND</span>
                <span className="px-5">1.999.000 VND / Năm</span>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
