import "../styles/globals.css";
import Navigation from "../components/Navigation";
import { Space_Grotesk } from "@next/font/google";

const font = Space_Grotesk({ weight: ["400", "700"], subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>My first app with next 13</title>
      </head>
      <body className={font.className}>
        <Navigation />

        {children}
      </body>
    </html>
  );
}
