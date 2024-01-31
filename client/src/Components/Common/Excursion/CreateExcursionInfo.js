import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const CreateExcursion = ({ show, onHide }) => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [date, setDate] = useState('');
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [manager, setManager] = useState('');

  const handleCreateExcursion = () => {
    onHide();
  };

  return (
    <Modal open={show} onClose={onHide}>
      <Box sx={{ p: 2, width: 400 }}>
        <h2>Добавить экскурсию</h2>
        <form>
          <TextField
            label="Название"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Страна"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Дата"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Количество"
            type="number"
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value))}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Цена"
            type="number"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Менеджер"
            value={manager}
            onChange={(e) => setManager(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" onClick={handleCreateExcursion}>
            Создать
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default CreateExcursion;