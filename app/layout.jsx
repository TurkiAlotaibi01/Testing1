import "./globals.css";

export const metadata = {
  title: "قصص نوم بصوت الوالدين",
  description: "صفحة تحقق أولية لمنتج قصص نوم مخصصة بصوت الوالدين."
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
