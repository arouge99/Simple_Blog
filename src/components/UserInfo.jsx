export default function UserInfo({ username = "John Lobster", date = "01 January 2023" }) {
    return (
      <div className="user-info">
        <div className="user-icon">♟</div>
  
        <div>
          <p className="user-name">{username}</p>
          <p className="post-date">{date}</p>
        </div>
      </div>
    );
  }