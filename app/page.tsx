import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow flex items-center justify-center p-6 bg-white">
        {/* Centered Container with Full Height */}
        <div className="container max-w-[80%] bg-white shadow-2xl rounded-lg p-10 h-full min-h-[70vh] flex items-center">
          <section className="w-full flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8">
            {/* Title & Description on the Left */}
            <div className="w-full md:w-1/2">
              <h1 className="text-5xl font-bold text-blue-700 leading-tight">
                W&E Guarantee Bookkeeping Services
              </h1>
              <p className="text-xl text-gray-700 mt-4 leading-relaxed">
                We provide reliable and professional bookkeeping services to
                help you manage your finances efficiently. From bank
                reconciliation to tax preparation, we ensure accuracy and
                compliance for your business.
              </p>
            </div>

            {/* Embedded YouTube Video on the Right */}
            <div className="w-full md:w-1/2">
              <div className="relative w-full h-80 md:h-[450px]">
                <iframe
                  className="w-full h-full rounded-lg shadow-md"
                  src="https://www.youtube.com/embed/rN8fHFBHhCE"
                  title="Bookkeeping Introduction"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
