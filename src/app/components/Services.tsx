// components/Services.tsx
const Services = () => {
    return (
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-12">Dịch vụ của chúng tôi</h2>
        <div className="flex justify-around space-x-8">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-semibold">Dịch vụ 1</h3>
            <p className="mt-4">Mô tả ngắn gọn về dịch vụ 1</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-semibold">Dịch vụ 2</h3>
            <p className="mt-4">Mô tả ngắn gọn về dịch vụ 2</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-semibold">Dịch vụ 3</h3>
            <p className="mt-4">Mô tả ngắn gọn về dịch vụ 3</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  