/*const anchor = document.querySelector('a')!;

console.log(anchor.href);*/

/* interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;

}

const me: IsPerson = {
  name: 'lily',
  age: 32,
  speak(a: string): void{
  console.log(a);
  },
spend(b: number): number {
  console.log(`I spent ${b}`);
  return b;
  }
};

console.log(me); */


import {Invoice} from './classes/invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payments.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('lily', 'web work', 250);
// docTwo = new Payment('vivek', 'project work', 150);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);


// const inv1 = new Invoice('tanwi', 'website work', 100);
// const inv2 = new Invoice('nidhi', 'project work', 130);
// const inv3 = new Invoice('ishika', 'college work', 140);
// console.log(inv1);

// const invoices: Invoice[] = [];
// invoices.push(inv1);
// invoices.push(inv2);
// invoices.push(inv3);

// invoices.forEach(inv => {
//   console.log(inv.client, inv.amount, inv.format());
// });
//console.log(invoices);


const form = document.querySelector('.new-item-form') as HTMLFormElement;

//console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLSelectElement;
const details = document.querySelector('#details') as HTMLSelectElement;
const amount = document.querySelector('#amount') as HTMLSelectElement;

//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);
form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;
  if (type.value === 'invoice')
  {
    doc = new Invoice(tofrom.value, details.value,amount.valueAsNumber);
  }
  else if (type.value === 'payment')
  {
    doc = new Payment(tofrom.value, details.value,amount.valueAsNumber);
  }

  list.render(doc,type.value, 'start');
});


