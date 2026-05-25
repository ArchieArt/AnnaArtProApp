export const metadata = {
  title: "Anna Art Pro",
  description: "Artist Career Engine for the Anna Arts Council"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
