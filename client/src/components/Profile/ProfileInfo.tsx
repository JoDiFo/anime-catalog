import profileImage from "../../assets/profile-image.jpeg";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

function ProfileInfo() {
  const { username, registerDate } = useSelector(
    (state: RootState) => state.userReducer
  );

  return (
    <div className="profile-page__info">
      <img src={profileImage} alt="profile image" />
      <div>
        <h3>{username}</h3>
        <p>Part of community since: {registerDate}</p>
      </div>
    </div>
  );
}

export default ProfileInfo;
