import Rows from './Rows';
import Row from './Row';
import Marginor from './Marginor';

namespace Marginer {

  const marginRows = (width: number, height: number): Row[] => {
    return [...Array(height)].fill(width).map(Row.blank)
  }
  const verticaling = (rows: Rows, { top, bottom }: Marginor): void => {
    const width = rows[0].length
    const marginTop = marginRows(width, top)
    const marginBottom = marginRows(width, bottom)
    rows.unshift(...marginTop)
    rows.push(...marginBottom)
  }
  const horizontaling = (rows: Rows, { left, right }: Marginor): void => {
    rows.forEach((row) => {
      const marginLeft = Row.blank(left)
      const marginRight = Row.blank(right)
      row.unshift(...marginLeft)
      row.push(...marginRight)
    })
  }

  export const doing = (rows: Rows, marginor: Marginor): void => {
    verticaling(rows, marginor)
    horizontaling(rows, marginor)
  };
}

export default Marginer;
