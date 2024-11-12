import React from 'react';

interface SectionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ icon, title, description }) => {
  return (
    <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative">
      <div className="text-white absolute right-2">
        {icon}
      </div>
      <div className="text-white text-lg font-medium mb-2 mt-4">{title}</div>
      <div className="text-white font-normal">{description}</div>
    </div>
  );
};

export default SectionCard;
