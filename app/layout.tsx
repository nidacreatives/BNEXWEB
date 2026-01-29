import "./globals.css";

export const metadata = {
  title: "BNEXWEB",
  description: "Next in Web"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
