import React from "react";

const people = [
    {
        name: 'Rajat Cheetri',
        role: 'Project Manager Lead',
        imageUrl:
            '/pic/team/6 (3).jpg', // Placeholder image
    },
    {
        name: 'Nikunjan  Cheetri',
        role: 'Virtual Currency SME / Blockchain Developer',
        imageUrl:
            '/pic/team/1.jpg', // Placeholder image
    },
    {
        name: 'Ganesh Pandey',
        role: 'Virtual Currency SME / Data Engineer and AI Expert',
        imageUrl:
            '/pic/team/2.jpg', // Placeholder image
    },
    {
        name: 'Milan S.',
        role: 'Virtual Currency SME / Blockchain Developer',
        imageUrl:
            '/pic/team/3.jpg', // Placeholder image
    },
    {
        name: 'Manoj Bhandari',
        role: 'Data Engineer and AI Expert',
        imageUrl:
            '/pic/team/4.jpg', // Placeholder image
    },
    {
        name: 'Rabin Bastola',
        role: 'Cybersecurity and Compliance Officer',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', // Placeholder image
    },
    {
        name: 'Tulsi Adhikari',
        role: 'Cybersecurity and Compliance Officer',
        imageUrl:
            '/pic/team/7 (2).jpg', // Placeholder image
    },
    {
        name: 'Lakhpa Sona Sherpa',
        role: 'UI/UX Designer Lead',
        imageUrl:
            '/pic/team/8 (2).jpg', // Placeholder image
    },
    {
        name: 'Sailesh Maharjan',
        role: 'Data Integration and Analysis Expert',
        imageUrl:
            '/pic/team/9 (2).jpg', // Placeholder image
    },
    {
        name: 'Keshav Bhandari',
        role: 'Quality Assurance (QA) Engineer Lead',
        imageUrl:
            '/pic/team/10 (2).jpg', // Placeholder image
    },
];

export default function Team() {

    return (
        <>
          <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Our team brings together expertise in blockchain, AI, cybersecurity, and more to ensure successful project execution and platform security.
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:grid-cols-3 mt-12">
                    {people.map((person) => (
                        <li key={person.name} className="flex items-center space-x-4">
                            <img 
                                alt={`${person.name}'s profile`} 
                                src={person.imageUrl} 
                                className="h-20 w-20 rounded-full object-cover border-2 border-gray-300" 
                            />
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    );
}
