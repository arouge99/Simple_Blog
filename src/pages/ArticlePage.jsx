import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import BannerArticle from "../components/BannerArticle";
import Button from "../components/Button";
import NavbarFrame from "../components/NavbarFrame";
import Tag from "../components/Tag";
import UserInfo from "../components/UserInfo";

export default function ArticlePage() {
  const { slug } = useParams();

  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchArticle() {
      try {
        setIsLoading(true);
        setError("");

        const response = await fetch(
          `https://realworld.habsida.net/api/articles/${slug}`
        );

        if (!response.ok) {
          throw new Error("Article could not be loaded.");
        }

        const data = await response.json();

        setArticle(data.article);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchArticle();
  }, [slug]);

  if (isLoading) {
    return (
      <>
        <NavbarFrame />
        <p className="status-message">Loading article...</p>
      </>
    );
  }

  if (error) {
    return (
      <>
        <NavbarFrame />
        <p className="status-message error-message">{error}</p>
      </>
    );
  }

  if (!article) {
    return null;
  }

  return (
    <>
      <NavbarFrame />

      <BannerArticle
        title={article.title}
        username={article.author.username}
        date={article.createdAt}
        image={article.author.image}
      />

      <main className="article-page-content">
        <p className="article-body">{article.body}</p>

        <div className="article-tags">
          {article.tagList.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <div className="article-actions">
          <UserInfo
            username={article.author.username}
            date={article.createdAt}
            image={article.author.image}
          />

          <Button disabled>
            Favorite article ({article.favoritesCount})
          </Button>
        </div>
      </main>
    </>
  );
}