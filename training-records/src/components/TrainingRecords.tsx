const TrainingRecords = () => {
  return (
    <>
      <form name="form-raining">
        <label htmlFor="input-date">Дата(ДД.ММ.ГГ)</label>
        <label htmlFor="input-travaled">Пройдено км</label>
        <input type="date" id="input-date" />
        <input type="number" id="input-travaled" />
        <button>Ok</button>
      </form>
      <div className="records-headers">
        <p className="date">Дата(ДД.ММ.ГГ)</p>
        <p className="travaled">Пройдено км</p>
        <p className="actions">Действия</p>
      </div>
      <ul className="list-records">
        <li className="record">
          <p className="record-date">203.07.2019</p>
          <p className="record-travaled">5.7</p>
          <div className="record-actions">
            <div className="icon-edit"></div>
            <div className="icon-delete"></div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default TrainingRecords;
