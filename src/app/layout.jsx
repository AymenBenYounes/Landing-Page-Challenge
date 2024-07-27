
import "./globals.css";


export const metadata = {
  title: "Landing Page",
  description: "Landing Page Challenge created with next js completed by aymen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
