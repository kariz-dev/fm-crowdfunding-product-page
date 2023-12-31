// "use client";
import GlobalStyle from "./globalStyled";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GlobalStyle />
      <body>{children}</body>
    </html>
  );
}
