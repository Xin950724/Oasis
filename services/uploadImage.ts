import axios from "axios";

export const uploadImage = async (image: File) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "the-wild-oasis");

  const {
    data: { secure_url },
  } = await axios.post(
    `https://api.cloudinary.com/v1_1/dzxjgqfli/image/upload`,
    formData
  );

  return secure_url;
};
