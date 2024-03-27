import { memo, useEffect, useState } from "react";
import defaultImage from "@/shared/assets/profile-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { setProfileImage } from "@/app/redux/userSlice";

import { storage } from "@/shared/config/firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { useMutation } from "@apollo/client";
import { UPLOAD_IMAGE } from "@/app/graphql/user";

import cls from "./ProfileInfo.module.scss";

interface IProps {
  username: string;
  registerDate: string;
}

function ProfileInfo({ username, registerDate }: IProps) {
  const dispatch = useDispatch();
  const { id: userId, imageUrl } = useSelector(
    (state: RootState) => state.userReducer
  );

  const [uploadMutation, { data, loading }] = useMutation(UPLOAD_IMAGE);

  const [visible, setVisible] = useState(false);

  const uploadImage = (file: File) => {
    console.log(file);
    const imageRef = ref(storage, `images/${file.name}`);
    uploadBytes(imageRef, file)
      .then(() => getDownloadURL(imageRef))
      .then((url) =>
        uploadMutation({
          variables: {
            userId,
            imageUrl: url,
          },
        })
      );
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    dispatch(setProfileImage(URL.createObjectURL(e.target.files[0])));
    uploadImage(e.target.files[0]);
  };

  useEffect(() => {
    if (!loading && data) {
      if (!data.uploadImage) {
        alert("something went wrong!");
      }
    }
  }, [loading, data]);

  return (
    <div className={cls.ProfileInfo}>
      <div
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        <img src={imageUrl || defaultImage} alt="profile image" />
        {visible ? (
          <div className={cls.labelWrapper}>
            <label htmlFor="upload-image">Chose Image</label>
          </div>
        ) : null}
        <input
          type="file"
          onChange={handleUpload}
          accept="image/*"
          id="upload-image"
        />
      </div>
      <div>
        <h3>{username}</h3>
        <p>Part of community since: {registerDate}</p>
      </div>
    </div>
  );
}

export default memo(ProfileInfo);
