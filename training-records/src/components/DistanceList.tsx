import formatDate from "../functions/formatDate";

export type Item = {
  date: string;
  dist: string;
};

export type Items = {
  items: Item[];
};

const DistanceList = ({ items }: Items) => {
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
              <div className="icon-edit"></div>
              <div className="icon-delete"></div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DistanceList;
