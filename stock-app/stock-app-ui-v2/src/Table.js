import React from 'react';

const TableHeader = () => {
    return (
      <thead>
        <th>Id</th>
        <th>Country</th>
        <th>Stock Name</th>
      </thead>
    )
  }
  
  
  const TableBody = props => {
    return (<tbody>
      {
        props.joinList.map((nestedItem, i) => (
              nestedItem.map(data => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.country}</td>
                <td>{data.stockName}</td>
              </tr>
            ))
        ))}
    </tbody>);
  }
  
  class Table extends React.Component {
    render() {
      const { joinList } = this.props
  
      return (
        <table className="table">
          <TableHeader />
          <TableBody joinList={joinList} />
        </table>
      )
    }
  }
  
  export default Table;