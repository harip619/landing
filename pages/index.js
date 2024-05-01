import Head from "next/head";
import Image from "next/image";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MoreInfoModal from "../components/MoreInfoModal";
import MoreInfo from "../components/MoreInfoModal";
import LandingNavbar from "../components/LandingNavbar";
import Student from "../components/Student";
import Teacher from "../components/Teachers";
import Values from "../components/Values";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ed -Circle Education Website</title>
        <meta name="description" content="Generated by create next app" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    <Hero/>
    <Values/>
    <Teacher/>
    <Student/>
   <MoreInfoModal/>
   
   <Footer/>
    </div>
  );
}
