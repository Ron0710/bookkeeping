import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-violet-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo/MainLogo-rounded.png"
            alt="W&E Guarantee Bookkeeping Services Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <Link href="/">
            <h1 className="text-xl font-bold">
              W&E Guarantee Bookkeeping Services
            </h1>
          </Link>
        </div>

        {/* Navigation Links on the right */}
        <nav>
          <ul className="flex space-x-6 text-sm font-medium">
            <li>
              <Link href="/aboutus" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/service" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/announcement" className="hover:underline">
                Announcement
              </Link>
            </li>
            <li>
              <Link href="/appointment" className="hover:underline">
                Appointment
              </Link>
            </li>
            <li>
              <Link href="/proofoftransaction" className="hover:underline">
                Proof of Transaction
              </Link>
            </li>
            <li>
              <Link href="/contactus" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
