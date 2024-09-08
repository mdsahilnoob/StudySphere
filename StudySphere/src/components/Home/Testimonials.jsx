import React from 'react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: "Mohammad Sahil",
    year: "2nd Year",
    image: "/api/placeholder/60/60",
    text: "I've always wanted to learn programming, but I found traditional classroom settings intimidating. This online platform provided a comfortable and flexible learning environment that allowed me to progress at my own pace."
  },
  {
    name: "Priyam Kumar",
    year: "2nd Year",
    image: "/api/placeholder/60/60",
    text: "I enrolled in this platform to improve my English skills, and I've seen a huge improvement in my fluency and confidence. The interactive exercises and personalized feedback were incredibly helpful."
  },
  {
    name: "Arpan Paramanik",
    year: "2nd Year",
    image: "/api/placeholder/60/60",
    text: "I've always wanted to learn programming, but I found traditional classroom settings intimidating. This online platform provided a comfortable and flexible learning environment that allowed me to progress at my own pace."
  },
  {
    name: "Anushka Singh",
    year: "2nd Year",
    image: "/api/placeholder/60/60",
    text: "I appreciate the ability to connect with other learners in the discussion forums. It's been great to learn from their experiences and perspectives."
  },
  {
    name: "Shivam Patra",
    year: "2nd Year",
    image: "/api/placeholder/60/60",
    text: "The instructors are always available to answer questions and provide support. They truly care about their students' success."
  },
  {
    name: "Suprovo Mallick",
    year: "2nd Year",
    image: "/api/placeholder/60/60",
    text: "I've made lifelong friends through this platform. The community is supportive and inspiring."
  }
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ name, year, image, text }) => {
  return (
    <div className="bg-white overflow-hidden shadow-lg rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center mb-4">
          <img className="h-12 w-12 rounded-full" src={image} alt={name} />
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500">{year}</p>
          </div>
        </div>
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  );
};

export default Testimonials;