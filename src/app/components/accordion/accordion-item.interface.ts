import { title } from 'process';
import { Interface } from 'readline';

export interface AccordionItem {
  title: string;
  content: string;
  isOpen: boolean;
}
