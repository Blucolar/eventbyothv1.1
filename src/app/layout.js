
import "./globals.css";
import Header from "@/components/header";
import Footerview from "@/components/Footerview";
import { Toaster } from "react-hot-toast";



export const metadata = {
  title: "OTH events",
  description: "Event book App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-[#FAF9F6]`}
      >
        <Header />
          {children}
        <Footerview/>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
