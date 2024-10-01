import Item from './item';

const items = [
  { name: "milk, 4 L 🥛", quantity: 1, category: "dairy" },
  { name: "bread 🍞", quantity: 2, category: "bakery" },
  { name: "eggs, dozen 🥚", quantity: 2, category: "dairy" },
  { name: "bananas 🍌", quantity: 6, category: "produce" },
  { name: "broccoli 🥦", quantity: 3, category: "produce" },
  { name: "chicken breasts, 1 kg 🍗", quantity: 1, category: "meat" },
  { name: "pasta sauce 🍝", quantity: 3, category: "canned goods" },
  { name: "spaghetti, 454 g 🍝", quantity: 2, category: "dry goods" },
  { name: "toilet paper, 12 pack 🧻", quantity: 1, category: "household" },
  { name: "paper towels, 6 pack", quantity: 1, category: "household" },
  { name: "dish soap 🍽️", quantity: 1, category: "household" },
  { name: "hand soap 🧼", quantity: 4, category: "household" },
];

export default function ItemList() {
  return (
    <div>
      <Item name={items[0].name} quantity={items[0].quantity} category={items[0].category} />
      <Item name={items[1].name} quantity={items[1].quantity} category={items[1].category} />
      <Item name={items[2].name} quantity={items[2].quantity} category={items[2].category} />
      <Item name={items[3].name} quantity={items[3].quantity} category={items[3].category} />
      <Item name={items[4].name} quantity={items[4].quantity} category={items[4].category} />
      <Item name={items[5].name} quantity={items[5].quantity} category={items[5].category} />
      <Item name={items[6].name} quantity={items[6].quantity} category={items[6].category} />
      <Item name={items[7].name} quantity={items[7].quantity} category={items[7].category} />
      <Item name={items[8].name} quantity={items[8].quantity} category={items[8].category} />
      <Item name={items[9].name} quantity={items[9].quantity} category={items[9].category} />
      <Item name={items[10].name} quantity={items[10].quantity} category={items[10].category} />
      <Item name={items[11].name} quantity={items[11].quantity} category={items[11].category} />
    </div>
  );
}
