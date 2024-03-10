import { memo, useState } from "react";
import defaultImage from "../../assets/profile-image.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setProfileImage } from "../../redux/userSlice";

interface IProps {
  username: string;
  registerDate: string;
}

function ProfileInfo({ username, registerDate }: IProps) {
  const dispatch = useDispatch();
  const profileImage = useSelector(
    (state: RootState) => state.userReducer.profileImage
  );

  const [visible, setVisible] = useState(false);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    dispatch(setProfileImage(URL.createObjectURL(e.target.files[0])));
  };

  return (
    <div className="page__info">
      <div
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        <img src={profileImage || defaultImage} alt="profile image" />
        {visible ? (
          <div className="label-wrapper">
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
