import UserInfo from "./UserInfo";

export default function BannerArticle({
  title = "If we quantify the alarm, we can get to the FTP pixel through the online SSL interface!",
  username = "John Lobster",
  date = "01 January 2023",
  image,
}) {
  return (
    <section className="article-banner">
      <div className="article-banner-content">
        <h1>{title}</h1>

        <UserInfo
          username={username}
          date={date}
          image={image}
          variant="dark"
        />
      </div>
    </section>
  );
}