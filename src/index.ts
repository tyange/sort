import { Sorter } from "./Sorter";
import { NumbersCollections } from "./NumbersCollection";

const numbersCollection = new NumbersCollections([15, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
