import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import ImageIcon from "@mui/icons-material/Image";
import { useFormik } from "formik";
import { createTweetReply } from "../../Store/Twit/Action";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius: 4,
};

export default function ReplyModal({handleClose, open, item}) {

  const [uploadingImage, setUploadingImage] = React.useState(false);
  const [selectImage, setSelectImage] = React.useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(createTweetReply(values))
    handleClose()
    console.log("values", values);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
      twitId: item?.id ,
    },
    onSubmit: handleSubmit,
  });

  const handleSelectImage = (event) => {
    setUploadingImage(true);
    const imgUrl = event.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setSelectImage(imgUrl);
    setUploadingImage(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex space-x-5">
            <Avatar
              onClick={() => navigate(`/profile/${6}`)}
              className="cursor-pointer"
              alt="username"
              src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
            />
            <div className="w-full">
              <div className="flex justify-between items-center">
                <div className="flex cursor-pointer items-center space-x-2">
                  <span className="font-semiblod">Vĩnh Phát</span>
                  <span className="text-gray-600">@VinhPhat01 . 2m</span>
                  <img
                    className="ml-2 w-5 h-5"
                    alt=""
                    src="https://th.bing.com/th/id/OIP.aX2Z0Z4WG-YQgAM6AuknsAHaE_?w=233&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  />
                </div>
              </div>

              <div className="mt-2">
                <div
                  onClick={() => navigate(`/twit/${3}`)}
                  className="cursor-pointer"
                >
                  <p className="mb-2 p-0">
                    Clone Social Media Full Stack Project
                  </p>
                  {/* <img
                    className="w-[28rem] border border-gray-400 p-5 rounded-md"
                    src="https://th.bing.com/th/id/OIP.aX2Z0Z4WG-YQgAM6AuknsAHaE_?w=233&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt=""
                  /> */}
                </div>
              </div>
            </div>
          </div>
          <section className={`py-10`}>
            <div className="flex space-x-5">
              <Avatar
                alt="username"
                src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
              />
              <div className="w-full">
                <form onSubmit={formik.handleSubmit}>
                  <div>
                    <input
                      type="text"
                      name="content"
                      placeholder="What is happening?"
                      className={`border-none outline-none text-xl bg-transparent`}
                      {...formik.getFieldProps("content")}
                    />
                    {formik.errors.content && formik.touched.content && (
                      <span className="text-red-500">
                        {formik.errors.content}
                      </span>
                    )}
                  </div>

                  <div className="flex justify-between items-center mt-5">
                    <div className="flex space-x-5 items-center">
                      <label className="flex items-center space-x-2 rounded-md cursor pointer">
                        <ImageIcon className="text-[#1d9bf0]" />

                        <input
                          type="file"
                          name="imagefile"
                          className="hidden"
                          onChange={handleSelectImage}
                        />
                      </label>
                      <FmdGoodIcon className="text-[#1d9bf0]" />
                      <TagFacesIcon className="text-[#1d9bf0]" />
                    </div>

                    <div>
                      <Button
                        sx={{
                          width: "100%",
                          borderRadius: "20px",
                          paddingY: "8px",
                          paddingX: "20px",
                          bgcolor: "#1e88e5",
                        }}
                        variant="contained"
                        type="submit"
                      >
                        Tweet
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </Box>
      </Modal>
    </div>
  );
}
