import userIcon from "../icons/usericon.svg";

export default function UserInfo({
  username = "Unknown user",
  date = "",
  image = "",
  variant = "default",
}) {
  const hasProfileImage =
    image &&
    image.trim() !== "" &&
    image !== "https://api.realworld.io/images/smiley-cyrus.jpeg";

  return (
    <div className={`user-info user-info-${variant}`}>
      {hasProfileImage ? (
        <img
          className="user-avatar"
          src={image}
          alt={`${username} profile`}
        />
      ) : (
        <img
          className="user-avatar user-avatar-fallback"
          src={userIcon}
          alt=""
        />
      )}

      <div>
        <p className="user-name">{username}</p>
        <p className="post-date">{date}</p>
      </div>
    </div>
  );
}