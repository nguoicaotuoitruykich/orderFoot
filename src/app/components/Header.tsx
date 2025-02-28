// components/Header.tsx
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 py-4 shadow-md">
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Link href="/">
          <Link href="#" className="text-white text-2xl font-bold">Nguyên Sơn</Link>
        </Link>
        <ul className="flex space-x-8 text-white">
          <li><Link href="/"><Link href="#" className="hover:text-yellow-500">Trang chủ</Link></Link></li>
          <li><Link href="/about"><Link href="#" className="hover:text-yellow-500">Giới thiệu</Link></Link></li>
          <li><Link href="/services"><Link href="#" className="hover:text-yellow-500">Dịch vụ</Link></Link></li>
          <li><Link href="/contact"><Link href="#" className="hover:text-yellow-500">Liên hệ</Link></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
