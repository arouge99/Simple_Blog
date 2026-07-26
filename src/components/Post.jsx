import Button from "./Button";
import Tag from "./Tag";
import UserInfo from "./UserInfo";

export default function Post({ title, description, likes, tags }) {
  return (
    <article className="post">
      <div className="post-header">
        <UserInfo />

        <Button disabled>{likes}</Button>
      </div>

      <h2 className="post-title">{title}</h2>

      <p className="post-description">{description}</p>

      <div className="post-tags">
        {tags.map((tag, index) => (
          <Tag key={`${tag}-${index}`}>{tag}</Tag>
        ))}
      </div>
    </article>
  );
}
