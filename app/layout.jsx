import "./globals.css";
import Footer from "./components/Footer";

export const metadata = {
  title: "Happy Nerding",
  description: "Happy Nerding evrorack modular developer",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-[1024px] mx-auto  " >
        {children}
        <Footer />
      </body>
    </html>
  );
}
