import Link from "next/link";

export default function PostsLayout({ children }) {
  return (
    <div>
      <small>
        <Link href="/">Home</Link> &bull; <Link href="/posts">Posts</Link>
      </small>
      {children}
    </div>
  );
}
