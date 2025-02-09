import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', () => {
  new Accordion('#faq-list', {
    duration: 400,
    showMultiple: false,
    openOnInit: [],
  });
});
