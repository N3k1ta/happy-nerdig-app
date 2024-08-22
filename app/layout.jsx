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
      <body className="w-full mx-auto max-w-7xl min-w-2xl" >
        {children}
        <Footer />
      </body>
    </html>
  );
}
