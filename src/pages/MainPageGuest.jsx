import { useEffect, useState } from "react";
import "../App.css";
import BannerDefault from "../components/BannerDefault";
import NavbarFrame from "../components/NavbarFrame";
import PaginationBar from "../components/PaginationBar";
import Post from "../components/Post";
import Sidebar from "../components/Sidebar";

const ARTICLES_PER_PAGE = 10;

export default function MainPageGuest() {
  const [posts, setPosts] = useState([]);
  const [articlesCount, setArticlesCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsLoading(true);
        setError("");

        const offset = (currentPage - 1) * ARTICLES_PER_PAGE;

        const response = await fetch(
          `https://realworld.habsida.net/api/articles?limit=${ARTICLES_PER_PAGE}&offset=${offset}`
        );

        if (!response.ok) {
          throw new Error("Articles could not be loaded.");
        }

        const data = await response.json();

        setPosts(data.articles ?? []);
        setArticlesCount(data.articlesCount ?? 0);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, [currentPage]);

  const totalPages = Math.ceil(articlesCount / ARTICLES_PER_PAGE);

  return (
    <>
      <NavbarFrame />
      <BannerDefault />

      <main className="main-content">
        <Sidebar />

        <section className="post-list">
          {isLoading && <p className="status-message">Loading articles...</p>}

          {error && <p className="status-message error-message">{error}</p>}

          {!isLoading &&
            !error &&
            posts.map((post) => (
              <Post
                key={post.slug}
                title={post.title}
                description={post.description}
                likes={post.favoritesCount}
                tags={post.tagList}
              />
            ))}

          {!isLoading && !error && totalPages > 1 && (
            <PaginationBar
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </section>
      </main>
    </>
  );
}