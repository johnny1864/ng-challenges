import { title } from 'process';
import { Interface } from 'readline';

export default interface AccordionItem {
  title: string;
  content: string;
  isOpen: boolean;
}
