import Item from "./item";
export default function ItemList() {
    const item1 = {
        name: "milk, 4 L 🥛",
        quantity: 1,
        category: "dairy",
      };
       
      const item2 = {
        name: "bread 🍞",
        quantity: 2,
        category: "bakery",
      };
       
      const item3 = {
        name: "eggs, dozen 🥚",
        quantity: 2,
        category: "dairy",
      };
       
      const item4 = {
        name: "bananas 🍌",
        quantity: 6,
        category: "produce",
      };
       
      const item5 = {
        name: "broccoli 🥦",
        quantity: 3,
        category: "produce",
      };
       
      const item6 = {
        name: "chicken breasts, 1 kg 🍗",
        quantity: 1,
        category: "meat",
      };
       
      const item7 = {
        name: "pasta sauce 🍝",
        quantity: 3,
        category: "canned goods",
      };
       
      const item8 = {
        name: "spaghetti, 454 g 🍝",
        quantity: 2,
        category: "dry goods",
      };
       
      const item9 = {
        name: "toilet paper, 12 pack 🧻",
        quantity: 1,
        category: "household",
      };
       
      const item10 = {
        name: "paper towels, 6 pack",
        quantity: 1,
        category: "household",
      };
       
      const item11 = {
        name: "dish soap 🍽️",
        quantity: 1,
        category: "household",
      };
       
      const item12 = {
        name: "hand soap 🧼",
        quantity: 4,
        category: "household",
      };
    return(
      <>
      <Item name={item1.name} quantity={"Buy "+item1.quantity+" in"} category={item1.category} />
      <Item name={item2.name} quantity={"Buy "+item2.quantity+" in"} category={item2.category} />
      <Item name={item3.name} quantity={"Buy "+item3.quantity+" in"} category={item3.category} />
      <Item name={item4.name} quantity={"Buy "+item4.quantity+" in"} category={item4.category} />
      <Item name={item5.name} quantity={"Buy "+item5.quantity+" in"} category={item5.category} />
      <Item name={item6.name} quantity={"Buy "+item6.quantity+" in"} category={item6.category} />
      <Item name={item7.name} quantity={"Buy "+item7.quantity+" in"} category={item7.category} />
      <Item name={item8.name} quantity={"Buy "+item8.quantity+" in"} category={item8.category} />
      <Item name={item9.name} quantity={"Buy "+item9.quantity+" in"} category={item9.category} />
      <Item name={item10.name} quantity={"Buy "+item10.quantity+" in"} category={item10.category} />
      <Item name={item11.name} quantity={"Buy "+item11.quantity+" in"} category={item11.category} />
      <Item name={item12.name} quantity={"Buy "+item12.quantity+" in"} category={item12.category} />
      </>
    )
}