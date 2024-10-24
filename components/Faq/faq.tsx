import React from "react";

const faqData = [
    {
        question: "What services do you offer?",
        answer: "We provide a comprehensive suite of blockchain solutions, including project management, blockchain development, AI integration, cybersecurity, and UI/UX design tailored for digital assets."
    },
    {
        question: "How do you ensure project success?",
        answer: "Our dedicated project managers, along with subject matter experts, employ Agile methodologies to ensure effective communication, timely delivery, and adaptability to changes throughout the project lifecycle."
    },
    {
        question: "What expertise does your team have in blockchain technology?",
        answer: "Our team includes certified blockchain developers and virtual currency experts with extensive experience in smart contracts, cryptocurrency applications, and compliance with digital asset regulations."
    },
    {
        question: "How do you handle data security and compliance?",
        answer: "We prioritize cybersecurity and compliance with all relevant laws, utilizing experienced professionals to implement robust data handling practices and ensure the security of your digital assets."
    },
    {
        question: "Can you assist with AI integration?",
        answer: "Absolutely! Our data engineers and AI experts can develop advanced analytical tools and integrate AI solutions to enhance your blockchain applications."
    },
];

export default function FAQ() {
    return (
        <>
            <section className="bg-white mt-28 py-10">
                <div className="max-w-6xl px-6 mx-auto">
                    <h1 className="text-2xl font-semibold text-black capitalize lg:text-3xl">
                        Frequently Asked Questions
                    </h1>
                    <div className="mt-6">
                        {faqData.map((faq, index) => (
                            <div className="bg-base-200 collapse mb-4" key={index}>
                                <input type="checkbox" className="peer" />
                                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                    {faq.question}
                                </div>
                                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
