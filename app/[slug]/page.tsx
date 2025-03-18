"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AboutUs from "@/components/pages/aboutus";
import Service from "@/components/pages/services";
import Announcement from "@/components/pages/announcement";
import ContactUs from "@/components/pages/contactus";
import Appointment from "@/components/pages/appointment";
import ProofofTransaction from "@/components/pages/proofoftransaction";

export default function Page() {
  const params = useParams();
  const slug = params?.slug;

  useEffect(() => {
    console.log("Slug Param:", slug);
  }, [slug]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Main Content (Pushes Footer Down) */}
      <main className="flex-grow flex items-center justify-center">
        {slug === "aboutus" && <AboutUs />}
        {slug === "service" && <Service />}
        {slug === "announcement" && <Announcement />}
        {slug === "contactus" && <ContactUs />}

        {slug === "proofoftransaction" && <ProofofTransaction />}
        {slug === "appointment" && <Appointment />}
      </main>

      <Footer />
    </div>
  );
}
