import Tag from "./Tag";

export default function Sidebar() {
  const popularTags = ["one", "something", "chinese", "english", "french"];

  return (
    <aside className="sidebar">
      <h2>Popular tags</h2>

      <div className="tag-list">
        {popularTags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </aside>
  );
}

