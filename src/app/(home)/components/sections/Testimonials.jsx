"use client";

import BlogCard from '../BlogCard';

const Testimonials = ({ testimonialsData }) => {
  return (
    <section className="font-ibm bg-orange-50">
      <div className='py-12 md:py-24 max-w-screen-xl mx-auto px-4 lg:px-0 relative '>
        <h2 className="text-4xl text-center font-bold mb-14 text-black">What Our Partners and Alumni Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <BlogCard key={index} article={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;