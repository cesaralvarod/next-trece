import Image from "next/image";

const fetchComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());
};

export default async function Comments({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <ul style={{ fontSize: "14px" }}>
      {comments.map((comment) => (
        <li key={id}>
          <Image
            width="50"
            height="50"
            src={`https://avatars.dicebear.com/api/personas/${comment.name}.svg`}
            alt={comment.name}
          />
          <h4 style={{ fontSize: "14px" }}>{comment.name}</h4>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
}
