import { useState } from "react";
import DistanceForm from "./DistanceForm";
import DistanceList, { Item, Items } from "./DistanceList";

const DistanceRecords = () => {
  const [steps, setSteps] = useState<Items>({ items: [] });

  const handleSubmit = (item: Item) => {
    console.log(item.date, item.dist);
    if (steps.items.some((elem) => elem.date === item.date)) {
      const newSteps = steps.items.map((elem) => {
        if (elem.date === elem.date) {
          return {
            date: elem.date,
            dist: String(Number(elem.dist) + Number(item.dist)),
          };
        }
        return elem;
      });
      setSteps({ items: newSteps });
    } else {
      setSteps((oldValue) => ({ items: [...oldValue.items, item] }));
    }
  };

  return (
    <>
      <DistanceForm handleSubmit={handleSubmit} />
      <DistanceList items={steps.items} />
    </>
  );
};

export default DistanceRecords;
