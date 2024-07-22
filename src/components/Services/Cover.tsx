const Cover = () => {
  return (
    <section className="bg-service-background relative h-[85vh] bg-cover">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-700 to-transparent"></div>
      <div className="relative grid h-[85vh] content-center gap-16 pl-20 pr-72 text-2xl leading-8 text-white backdrop-blur-sm">
        Welcome to SnapStay! Enjoy luxurious rooms, gourmet dining, a
        state-of-the-art fitness center, and a rejuvenating spa. Our 24/7
        concierge ensures personalized service. Stay connected with free Wi-Fi
        and take advantage of our business facilities and complimentary shuttle.
        Experience exceptional hospitality and comfort with us.
      </div>
    </section>
  );
};

export default Cover;
