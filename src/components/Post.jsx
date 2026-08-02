import { Link } from "react-router-dom";
import Button from "./Button";
import Tag from "./Tag";
import UserInfo from "./UserInfo";

export default function Post({
  slug,
  title,
  description,
  likes,
  tags,
  username,
  date,
  image,
}) {
  return (
    <article className="post">
      <div className="post-header">
        <UserInfo 
        username={username}
        date={date}
        image={image}
        />

        <Button disabled>{likes}</Button>
      </div>

      <Link to={`/articles/${slug}`}>
        <h2 className="post-title">{title}</h2>
      </Link>

      <p className="post-description">{description}</p>

      <div className="post-tags">
        {tags.map((tag, index) => (
          <Tag key={`${tag}-${index}`}>{tag}</Tag>
        ))}
      </div>
    </article>
  );
}
