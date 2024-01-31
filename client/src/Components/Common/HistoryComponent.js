import React from 'react';
import Table from '@mui/joy/Table';

const HistoryComponent = ({ history }) => {
  return (
    <div className="history-table">
      <h2>Buying history</h2>
          <Table
          borderAxis="none"
          color="neutral"
          size="md"
          stickyFooter
          stickyHeader
          variant="soft"
          className = "table"
          >
          <thead>
          <tr>
            <th>Name</th>
            <th>Meet at</th>
            <th>Price</th>
            <th>Country</th>
            <th>Adress</th>
            <th>Manager</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.meet}</td>
              <td>{item.excursion.price}</td>
              <td>{item.excursion.country}</td>
              <td>{item.excursion.adress}</td>
              <td>{item.excursion.manager}</td>
            </tr>
          ))}
        </tbody>

      </Table>
    </div>
  );
};

export default HistoryComponent;