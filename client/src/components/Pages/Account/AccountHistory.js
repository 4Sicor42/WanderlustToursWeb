import React, { useContext, useEffect, useState } from 'react';
import HistoryComponent from '../../Common/HistoryComponent';
import { Context } from '../../../index.js';
import { fetchHistory } from '../../../http/ExcursionAPI';

const AccountHistory = () => {
  const { user } = useContext(Context);
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchHistory(user.id)
      .then((data) => {
        setHistory(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user]);

  return (
    <div className="profile-page">
      <h1>History excursion of {user.name}</h1>
      {isLoading ? (
        <p>Loading history...</p>
      ) : history.length > 0 ? (
        <HistoryComponent history={history} />
      ) : (
        <p>No history available.</p>
      )}
    </div>
  );
};

export default AccountHistory;