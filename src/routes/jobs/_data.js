import { LoremIpsum } from 'lorem-ipsum'

const lorem = new LoremIpsum();

export let jobs = [
  { id: '1', title: "Mario's plumming assistant", salary: 20000, details: lorem.generateParagraphs(2)},
  { id: '2', title: "Apple picker for Yoshi", salary: 25000, details: lorem.generateParagraphs(2)},
  { id: '3', title: "Mariokart driver", salary: 30000, details: lorem.generateParagraphs(2)},
];

