import { useState } from "react";
import DistanceForm from "./DistanceForm";
import DistanceList, { Item, Items } from "./DistanceList";

const DistanceRecords = () => {
  const [steps, setSteps] = useState<Items>({ items: [] });
  const [editItem, setEditItem] = useState<Item | null>(null);

  const handleSubmit = (item: Item) => {
    console.log(item.date, item.dist);
    if (steps.items.some((elem) => elem.date === item.date)) {
      const newSteps = steps.items.map((elem) => {
        if (elem.date === item.date) {
          if (editItem) {
            return item;
          }
          return {
            date: elem.date,
            dist: String(Number(elem.dist) + Number(item.dist)),
          };
        }
        return elem;
      });
      setSteps({ items: newSteps });
    } else {
      if (steps.items.some((elem) => elem.date > item.date)) {
        setSteps((oldValue) => ({
          items: [...oldValue.items, item],
        }));
      } else if (steps.items.some((elem) => elem.date < item.date)) {
        setSteps((oldValue) => ({
          items: [item, ...oldValue.items],
        }));
      } else {
        setSteps({ items: [item] });
      }
    }
    setEditItem(null);
  };

  const handleClickDelete = (itemToDelete: Item) => {
    const newItems = steps.items.filter(
      (item) => item.date !== itemToDelete.date
    );
    setSteps({ items: newItems });
  };

  const handleClickEdit = (itemToEdit: Item) => {
    setEditItem(itemToEdit);
  };

  return (
    <div className="distance-panel">
      <DistanceForm handleSubmit={handleSubmit} editItem={editItem} />
      <DistanceList
        items={steps.items}
        handleClickEdit={handleClickEdit}
        handleClickDelete={handleClickDelete}
      />
    </div>
  );
};

export default DistanceRecords;
