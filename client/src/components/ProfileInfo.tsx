import profileImage from "../assets/profile-image.jpeg";

function ProfileInfo() {
  return (
    <div className="profile-page__info">
      <img src={profileImage} alt="profile image" />
      <div>
        <h3>JoDiFo</h3>
        <p>Part of community since: 01.01.2000</p>
      </div>
    </div>
  );
}

export default ProfileInfo;
