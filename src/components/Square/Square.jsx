import React, {useState} from "react";
import classNames from "classnames";
import './Sqare.scss';

export function Square({field}) {
    const [cells, setCells] = useState([]);

    function fillCells() {
        const cellsData = [];
        const numberOfCells = field;

        for (let row = 1; row <= numberOfCells; row++) {
            const rowData = [];
            for (let col = 1; col <= numberOfCells; col++) {
                const obj = {
                    row: row,
                    col: col,
                    selected: false,

                }
                rowData.push(obj);
            }
            cellsData.push(rowData);
        }
        setCells(cellsData);
    }

    function handleCellHover(row, col) {
        const cell = cells[row - 1][col - 1];
        cell.selected = !cell.selected;
        setCells([...cells]);
    }

    return (
        <div className='content'>
            <button
                className='content__btn'
                onClick={fillCells}
            >Start</button>

            <div className='content__interaction'>
                <table className="square">
                    <tbody>
                    {cells.map((row, i) =>
                        <tr key={i} className="square__row">
                            {row.map(val =>
                                <td key={val.col}
                                    className={classNames('square__col',
                                        {'square__col--active': val.selected})}
                                    onMouseOver={() => handleCellHover(val.row, val.col)}
                                >
                                    {val.column}
                                </td>
                            )}
                        </tr>
                    )}
                    </tbody>
                </table>

                <div>
                    <h1 className='content__title'>Hover square</h1>
                    <ul>
                        {cells.flat()
                            .filter(cell => cell.selected)
                            .map(cell =>
                                <li>
                                    {`row: ${cell.row} column: ${cell.col}`}
                                </li>
                            )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
