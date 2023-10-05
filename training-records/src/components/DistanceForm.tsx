import { useState } from "react";
import { Item } from "./DistanceList";

type HandleSubmit = {
  handleSubmit: (item: Item) => void;
};

const DistanceForm = ({ handleSubmit }: HandleSubmit) => {
  const [date, setDate] = useState<string>("");
  const [dist, setDist] = useState<string>("");

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit({ date, dist });
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <label htmlFor="date">Дата(ДД.ММ.ГГ)</label>
      <input type="date" id="date" onChange={(e) => setDate(e.target.value)} />
      <label htmlFor="distance">Пройдено км</label>
      <input
        type="number"
        id="distance"
        onChange={(e) => setDist(e.target.value)}
      />
      <input type="submit" value={"OK"} />
    </form>
  );
};

export default DistanceForm;
