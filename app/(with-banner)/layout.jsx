// about and posts have same layout

export default function WithMarqueeLayout({ children }) {
  return (
    <>
      <marquee behavior="" direction="">
        HOLA MUNDOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
      </marquee>
      {children}
    </>
  );
}
