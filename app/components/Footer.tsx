import { FacebookIcon, Instagram, YoutubeIcon } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6">
      <div className="max-w-screen-xl mx-auto flex justify-between gap-8">
        {/* Logo dan Deskripsi */}
        <div>
          <Image
            src="/logo/logogms.png"
            alt="logo"
            className="mb-4"
            width={100}
            height={40}
          />
        </div>

        {/* Informasi Kontak */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Kontak</h3>
          <p>
            Jl. Yos Sudarso No.272, Sukaraja, Bumi Waras, Kota Bandar Lampung
          </p>
          <p className="mt-1">Telepon: (0721) 123-4567</p>
          <p className="mt-1">Email: info@gmslampung.com</p>
        </div>

        {/* Tautan Sosial Media */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Ikuti Kami</h3>
          <div className="flex gap-4 mt-2">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-white transition"
            >
              <FacebookIcon />
              {/* <i className="fab fa-facebook fa-2x"></i> */}
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white transition"
            >
              <Instagram />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-gray-400 hover:text-white transition"
            >
              <YoutubeIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Gereja Mawar Sharon Lampung. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
