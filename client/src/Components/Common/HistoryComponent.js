import React from 'react';
import { useCallback } from 'react';
import PageviewIcon from '@mui/icons-material/Pageview';
import Table from '@mui/joy/Table';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { fetchOneExcursion} from '../../http/ExcursionAPI';

const HistoryComponent = ({ history }) => {
  const navigate = useNavigate();

  const handleClick = useCallback(async (item) => {
    const excursion = await fetchOneExcursion(item)
    navigate(`/excursion/${excursion.id}/overview/`, {state: {excursion}})
  }, [navigate])




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
            <th>View ticket</th>
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
              <td>
                <Button variant="outlined" onClick={() => handleClick(item.excursion.id)}><PageviewIcon variant="Outlined" /></Button></td>
            </tr>
          ))}
        </tbody>

      </Table>
    </div>
  );
};

export default HistoryComponent;