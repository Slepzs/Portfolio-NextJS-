import Image from "next/image";
import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";
import Statics from "@/components/Layout/Statics/Statics";
import Content from "@/components/Layout/Content/Content";

export default function Home() {
  return (
    <main>
      <Header />
      <Content />
      <Statics />
      <Footer />
    </main>
  );
}
