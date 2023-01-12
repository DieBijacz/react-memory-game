import { useState } from "react";

function App() {
  const [grid, setGrid] = useState(
    [
      [1, 0, 2, 5],
      [2, 1, 3, 4],
      [4, 3, 5, 0]
    ]
  )
  const [revealedCard, isRevealedCard] = useState(
    new Array(grid.length).fill("").map(() => new Array(grid[0].length).fill(false))
  )

  function revealCard(rowIndex, colIndex) {
    console.log(rowIndex, colIndex)
  }

  return (
    <>
      <div className="App">
        <div className="grid">
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((number, colIndex) => (
                <div onClick={() => revealCard(rowIndex, colIndex)} key={colIndex} className="card">
                  {revealedCard[rowIndex][colIndex] ? number : ' '}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
