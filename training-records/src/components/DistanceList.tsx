import { MouseEventHandler, MouseEvent } from "react";
import formatDate from "../functions/formatDate";

export type Item = {
  date: string;
  dist: string;
};

export type Items = {
  items: Item[];
};

const DistanceList = ({
  items,
  handleClickEdit,
  handleClickDelete,
}: {
  items: Item[];
  handleClickEdit: MouseEventHandler<HTMLDivElement>;
  handleClickDelete: (item: Item) => void;
}) => {
  const handleDelete = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    const date = target.dataset.date;
    const itemToDelete = items.find((item) => item.date === date);
    if (itemToDelete) {
      handleClickDelete(itemToDelete);
    }
  };

  return (
    <>
      <div className="titles">
        <p className="date-title">Дата(ДД.ММ.ГГ)</p>
        <p className="distance-title">Пройдено км</p>
        <p className="actions-title">Действия</p>
      </div>
      <ul className="steps-list">
        {items.map((el, index) => (
          <li key={index} className="step">
            <p className="step-date">{formatDate(el.date)}</p>
            <p className="step-distance">{el.dist}</p>
            <div className="step-actions">
              <div onClick={handleClickEdit} className="icon-edit"></div>
              <div
                onClick={handleDelete}
                className="icon-delete"
                data-date={el.date}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DistanceList;
