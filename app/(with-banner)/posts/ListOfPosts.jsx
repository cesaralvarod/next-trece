import Link from "next/link";
import LikeButton from "./LikeButton";

// Hay que olvidarnos del fetching de datos de Next12

// getStaticProps
// -> return fetch("...").then(res=>res.json())

// getServerSideProps
// -> return fetch("...", {cache:"no-store"}).then(res=>res.json())

// incremental static regeneration
// return fetch("...", {next:{revalidate:60}}).then(res=>res.json())

const fetchPosts = async () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  }).then((res) => res.json());
};

export default async function ListOfPosts() {
  const posts = await fetchPosts();

  return posts.map((post) => (
    <article key={post.id}>
      <h2 style={{ color: "#09f" }}>
        <Link href={`/posts/${post.id}`}>{post.title}</Link>
      </h2>
      <p>{post.body}</p>
      <LikeButton />
    </article>
  ));
}
