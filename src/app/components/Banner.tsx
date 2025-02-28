// components/Banner.tsx
const Banner = () => {
    return (
      <section className="relative bg-cover bg-center h-[400px]" style={{ backgroundImage: "url('/images/banner.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50 flex justify-center items-center text-center">
          <div className="text-white px-6">
            <h1 className="text-4xl font-bold">Chào mừng đến với Nguyên Sơn</h1>
            <p className="mt-4 text-lg">Chúng tôi mang đến giải pháp tối ưu cho doanh nghiệp của bạn.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Banner;
  