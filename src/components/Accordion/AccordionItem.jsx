import{ useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';


const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b my-2">
      <input type="checkbox" id={title} className="hidden" checked={isOpen} onChange={toggleAccordion} />
      <label htmlFor={title} className="flex items-center justify-between cursor-pointer py-2 px-4 w-full">
        <span>{title}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </label>
      <div className={`accordion-content ${isOpen ? 'block' : 'hidden'} w-full`}>
        <div className="py-2 px-4">{content}</div>
      </div>
    </div>
  );
};

export default AccordionItem