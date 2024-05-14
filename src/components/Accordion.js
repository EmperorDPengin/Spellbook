import { useState } from 'react';
import styles from './Accordion.module.scss';

export default function Accordion({ items }) {
  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
}

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}>
      <button className={styles.accordionTitle} onClick={() => setIsOpen(!isOpen)}>
        {title}
      </button>
      <div className={styles.accordionContent}>{content}</div>
    </div>
  );
}
