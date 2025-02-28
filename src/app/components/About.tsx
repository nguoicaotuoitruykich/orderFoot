// pages/about.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Header />
      <section className="py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Giới thiệu về Nguyên Sơn</h1>
        <p className="text-lg text-center max-w-2xl mx-auto">
          Nguyên Sơn là công ty chuyên cung cấp giải pháp tối ưu cho các doanh nghiệp.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default About;
