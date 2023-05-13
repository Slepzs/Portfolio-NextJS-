import Image from "next/image";
import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";
import Statics from "@/components/Layout/Statics/Statics";
import Content from "@/components/Layout/Content/Content";
import PageLoader from "@/components/Organism/PageLoader/PageLoader";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <main>
      <Header />
      <Content />
      <PageLoader />
      <Statics />
      <Footer />
    </main>
  );
}
