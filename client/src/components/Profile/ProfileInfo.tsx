import { memo } from "react";
import profileImage from "../../assets/profile-image.jpeg";

interface IProps {
  username: string;
  registerDate: string;
}

function ProfileInfo({ username, registerDate }: IProps) {
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

export default memo(ProfileInfo);
