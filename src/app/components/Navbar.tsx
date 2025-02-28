// components/Navbar.js
import Link from 'next/link';

const Navbar = () => (
  <nav >
    <ul>
      <li><Link href="/">Trang chủ</Link></li>
      <li><Link href="/about">Giới thiệu</Link></li>
      <li><Link href="/services">Dịch vụ</Link></li>
      <li><Link href="/contact">Liên hệ</Link></li>
    </ul>
  </nav>
);

export default Navbar;
