// function Buttons(props) {
//   let numberbuttons = [9,8,7,6,5,4,3,2,1,0];
//   for (let i = 0; i < 10; i++) {
//     buttons.push(<button key={`${i}`} value={`${i}`} onClick={(e) => props.addInput(e.target.value)}>{i}</button>)
//   }
//   return (
//     <div id="buttons">
//       {buttons}
//     </div>
//   );
// }

function Buttons(props) {
  const numberButtons = [];
  [9,8,7,6,5,4,3,2,1,0,'.'].forEach((e) => {
    numberButtons.push(<button className="number-buttons" key={`${e}`} value={`${e}`} onClick={(el) => props.addInput(el.target.value)}>
      {e}
    </button>);
  });
  const operatorButtons = [];
  ['+','-','*','/'].forEach((e) => {
    operatorButtons.push(<button className="operator-buttons" key={`${e}`} value={`${e}`} onClick={(el) => props.addInput(el.target.value)}>
      {e}
      </button>);
  });
  return (
    <div id="buttons">
      {operatorButtons}
      {numberButtons}
      <button id="clear-button" key="clear-button" onClick={() => {props.clearData()}}>AC</button>
      <button id="equals-button" key="equals-button">=</button>
    </div>
  );
}

export default Buttons;