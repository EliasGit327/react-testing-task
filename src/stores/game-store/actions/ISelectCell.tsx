export default interface ISelectCell {
  type: "SELECT_CELL";
  payload: { x: number, y: number };
}
