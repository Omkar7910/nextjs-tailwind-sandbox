import "./globals.css";

export const metadata = {
  title: "Nextjs Tailwind Sandbox",
  description: "This is my first nextjs app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
