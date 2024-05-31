import { Helmet } from "react-helmet";
import accordionItems from "../../../data/accordion";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
const items = accordionItems;
  return (
    <div className="accordion">
      <Helmet>
        <title>Khamar 2 Kitchen || FAQ</title>
      </Helmet>
      {items.map((item) => (
        <AccordionItem key={item.id} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;