import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";

const About = () => {
    return (
        <div className="bg-white text-gray-800 min-h-screen px-4 py-12">
            {/* Title */}
            <div className="text-center mb-16">
                <h1 className="text-4xl sm:text-5xl font-extrabold">
                    We Are Your <span className="text-green-600 font-bold">अपना</span> Multiservice Hub
                </h1>
                <div className="w-24 h-1 bg-green-500 mt-4 mx-auto rounded-full" />
            </div>

            {/* About Us Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {AboutUs.map((item, index) => (
                    <div
                        key={index}
                        className="bg-orange-100 bg-opacity-40 hover:bg-orange-200 transition-transform transform hover:scale-105 shadow-lg border-l-4 border-green-500 rounded-xl p-6"
                    >
                        <h2 className="text-2xl font-semibold text-green-800 mb-4">{item.title}</h2>
                        {item.isItalic ? (
                            <>
                                <p className="italic text-lg text-gray-700">"{item.content.split('"')[1]}"</p>
                                <p className="mt-2 text-base text-gray-700">{item.content.split('"')[2]}</p>
                            </>
                        ) : (
                            <p className="text-base text-gray-700 leading-relaxed">{item.content}</p>
                        )}
                    </div>
                ))}
            </div>

            {/* Our Team Section */}
            <div className="mt-20 text-center">
                <h2 className="text-4xl font-bold mb-2">Our Team</h2>
                <div className="w-24 h-1 bg-green-400 mx-auto rounded-full mb-10" />

                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-orange-100 bg-opacity-40 border-b-4 border-green-500 hover:bg-orange-200 transition-transform transform hover:scale-105 shadow-xl rounded-xl p-6 flex flex-col items-center"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-green-400 mb-4 object-cover"
                            />
                            <h4 className="text-xl font-bold text-gray-800">{member.name}</h4>
                            <p className="text-sm text-gray-600 mb-3">{member.role}</p>
                            <div className="flex space-x-4 mt-2 text-green-700">
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-green-900 text-2xl transition-transform transform hover:scale-125"
                                >
                                    <FaLinkedinIn />
                                </a>
                                <a
                                    href={member.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-green-900 text-2xl transition-transform transform hover:scale-125"
                                >
                                    <TbBrandGithubFilled />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const AboutUs = [
    {
        title: "Our Goals",
        content:
            "We aim to provide the best services and products to our customers, ensuring high quality and satisfaction. Our goal is to continuously improve and innovate to meet and exceed customer expectations.",
    },
    {
        title: "What We Provide",
        content:
            "We offer a wide range of products and services, including old product buy and sell service, new product buy and sell service, urgent auto driver phone number service, and restaurant menu service. Our offerings are designed to meet diverse needs and provide value to our customers.",
    },
    {
        title: "What Makes Us Different",
        content:
            "Our commitment to quality, customer satisfaction, and continuous improvement sets us apart. We focus on delivering exceptional service and value, ensuring that our customers have a seamless and enjoyable experience.",
    },
    {
        title: "Our Vision",
        content:
            "\"Now we are an option but we want to be a choice.\" We aspire to become the preferred choice for our customers by consistently delivering high-quality services and exceeding their expectations.",
        isItalic: true,
    },
];

const teamMembers = [
    {
        name: "Sudip Karmakar",
        role: "Founder - FullStack",
        image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        linkedin: "https://www.linkedin.com/in/sudip-karmakar-675629249/",
        github: "https://github.com/Sudipkarmakar25",
    },
    {
        name: "Amit Chowdhury",
        role: "Founder - Backend Lead",
        image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        linkedin: "https://www.linkedin.com/in/samiran-chakraborty247/",
        github: "https://github.com/sudipkarmakar",
    },
    {
        name: "Rajat Debnath",
        role: "Founder - Frontend Lead (UI/UX)",
        image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        linkedin: "https://www.linkedin.com/in/rajat-debnath/",
        github: "https://github.com/Rajat22UEE",
    },
];

export default About;
