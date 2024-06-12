/* eslint-disable react/no-unescaped-entities */
const ContactGridCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center my-20">
      <div className="group flex justify-center items-center flex-col gap-3 text-center border border-secondary hover:bg-secondary hover:text-white p-5 rounded duration-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-image duration-500 text-secondary group-hover:text-white"
        >
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
        <h2 className="text-xl font-bold">Phone</h2>
        <p className="text-sm">
          Reach out to us directly by phone for immediate assistance and
          inquiries. Our friendly staff at Iqra Daycare are available to answer
          your questions and provide you with the information you need. We're
          here to help!
        </p>
        <p className="text-secondary group-hover:text-white font-bold duration-500">
          +8801677215739
        </p>
      </div>
      <div className="group flex justify-center items-center flex-col gap-3 text-center border border-secondary hover:bg-secondary hover:text-white p-5 rounded duration-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-image duration-500  text-secondary group-hover:text-white"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <h2 className="text-xl font-bold">Location</h2>
        <p className="text-sm">
          Visit us in person at our convenient location. We welcome you to tour
          our facility, meet our dedicated staff, and see firsthand the
          nurturing environment we provide at Iqra Daycare. We look forward to
          your visit!
        </p>
        <p className="text-secondary group-hover:text-white font-bold duration-500">
          21/7 3th Lane, R.K Mission Road Gopibag , Dhaka, Bangladesh
        </p>
      </div>
      <div className="group flex justify-center items-center flex-col gap-3 text-center border border-secondary hover:bg-secondary hover:text-white p-5 rounded duration-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-image duration-500  text-secondary group-hover:text-white"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
        <h2 className="text-xl font-bold">Email</h2>
        <p className="text-sm">
          For detailed inquiries or to request more information, feel free to
          email us. Our team at Iqra Daycare will respond promptly to ensure all
          your questions are answered and you have the information you need to
          make informed decisions.
        </p>
        <p className="text-secondary group-hover:text-white font-bold duration-500">
          iqra.early.learning.daycare@gmail.com
        </p>
      </div>
    </div>
  );
};

export default ContactGridCard;
