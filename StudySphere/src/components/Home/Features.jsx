import React from 'react';
import {Link} from 'react-router-dom'

const FeatureCard = ({ title, description, imageSrc }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Features = () => {
  const features = [
    {
      title: "Student Community Forum",
      description: "Connect with peers, ask questions, and share knowledge.",
      imageSrc: "/api/placeholder/400/300"
    },
    {
      title: "Connect with Teacher / Video call",
      description: "One-on-one sessions with expert educators via video call.",
      imageSrc: "/api/placeholder/400/300"
    },
    {
      title: "Group/Individual Chat",
      description: "Collaborate in groups or chat privately with classmates.",
      imageSrc: "/api/placeholder/400/300"
    },
    {
      title: "AI Doubt Support",
      description: "Get instant answers to your questions with AI assistance.",
      imageSrc: "/api/placeholder/400/300"
    },
    {
      title: "To-do List",
      description: "Stay organized with a built-in task manager and calendar.",
      imageSrc: "/api/placeholder/400/300"
    },
    {
      title: "Donate to create an impact",
      description: "Support causes and make a difference while you learn.",
      imageSrc: "/api/placeholder/400/300"
    },
    {
      title: "Settings",
      description: "Customize your learning experience to suit your needs.",
      imageSrc: "/api/placeholder/400/300"
    },
    {
      title: "Expert-Curated Courses",
      description: "Access high-quality courses designed by industry experts.",
      imageSrc: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.slice(0, 2).map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {features.slice(2).map((feature, index) => (
            <FeatureCard key={index + 2} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;