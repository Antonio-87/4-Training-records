import { useState, useRef, useEffect } from "react";
import { Item } from "./DistanceList";

const DistanceForm = ({
  handleSubmit,
  editItem,
}: {
  handleSubmit: (item: Item) => void;
  editItem?: Item | null;
}) => {
  const [date, setDate] = useState<string>(editItem?.date || "");
  const [dist, setDist] = useState<string>(editItem?.dist || "");
  const inputDateElement = useRef<HTMLInputElement>(null);
  const inputDistElement = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editItem) {
      setDate(editItem.date);
      setDist(editItem.dist);
      if (inputDateElement.current) {
        inputDateElement.current.value = editItem.date;
      }
      if (inputDistElement.current) {
        inputDistElement.current.value = editItem.dist;
      }
    }
  }, [editItem]);

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit({ date, dist });
    if (inputDateElement.current) {
      inputDateElement.current.value = "";
    }
    if (inputDistElement.current) {
      inputDistElement.current.value = "";
    }
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <div className="input-box">
        <label htmlFor="date">Дата(ДД.ММ.ГГ)</label>
        <input
          type="date"
          id="date"
          onChange={(e) => setDate(e.target.value)}
          ref={inputDateElement}
        />
      </div>
      <div className="input-box">
        <label htmlFor="distance">Пройдено км</label>
        <input
          type="number"
          id="distance"
          onChange={(e) => setDist(e.target.value)}
          ref={inputDistElement}
        />
      </div>
      <input type="submit" id="ok" value={"OK"} />
    </form>
  );
};

DistanceForm.defaultProps = {
  editItem: undefined,
};

export default DistanceForm;
