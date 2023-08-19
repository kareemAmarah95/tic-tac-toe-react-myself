const Cell = ({ cell, id, go, setGo, cells, setCells, winnerMessage }) => {
  const handleClick = (e) => {
    const taken =
      e.target.firstChild.classList.contains("circle") ||
      e.target.firstChild.classList.contains("cross");
    if (!taken) {
      if (go === "circle") {
        e.target.firstChild.classList.add("circle");
        handleChange("circle");
        setGo("cross");
      }
      if (go === "cross") {
        e.target.firstChild.classList.add("cross");
        handleChange("cross");
        setGo("circle");
      }
    }
  };

  const handleChange = (className) => {
    const nextTurn = cells.map((cell, index) => {
      if (index === id) {
        return className;
      } else {
        return cell;
      }
    });
    setCells(nextTurn);
  };
  return (
    <>
      <div className="square" id={id} onClick={!winnerMessage ? handleClick : null}>
        <div className={cell}></div>
      </div>
    </>
  );
};

export default Cell;
