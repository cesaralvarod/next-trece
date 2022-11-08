"use client"; // Indicate this component is client component

import { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  const handleClick = () => setLiked(!liked);

  return <button onClick={handleClick}>{liked ? "<3" : "</3"}</button>;
}
