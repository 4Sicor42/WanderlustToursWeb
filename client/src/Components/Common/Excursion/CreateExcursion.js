import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { createExcursion } from '../../../http/ExcursionAPI';


const CreateExcursion = ({ show, onHide }) => {
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [date, setDate] = useState('');
    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(0);
    const [manager, setManager] = useState('');
    const [address, setAdress] = useState('');
    const [average_rating, setRate] = useState(0);
    const [overview, setOverview] = useState('');
    const [image, setImage] = useState(null);
    const [time, setTime] = useState('');

    const handleCreateExcursion = async () => {
        const excursion = {
            adress: address,
            country, 
            average_rating,
            date : date+'T'+time,
            count,
            price,
            manager,
            name,
            img: image,
            overview
        };
        console.log(excursion.date)
        const data = await createExcursion(excursion);
        console.log(data);
        onHide();
    };


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Add Excursion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="name">
                        <Form.Label>Название</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="country">
                        <Form.Label>Страна</Form.Label>
                        <Form.Control
                            type="text"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="date">
                        <Form.Label>Дата</Form.Label>
                        <Form.Control
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="time">
                        <Form.Label>Time</Form.Label>
                        <Form.Control
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="count">
                        <Form.Label>Количество</Form.Label>
                        <Form.Control
                            type="number"
                            value={count}
                            onChange={(e) => setCount(parseInt(e.target.value))}
                        />
                    </Form.Group>
                    <Form.Group controlId="price">
                        <Form.Label>Цена</Form.Label>
                        <Form.Control
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(parseFloat(e.target.value))}
                        />
                    </Form.Group>
                    <Form.Group controlId="manager">
                        <Form.Label>Менеджер</Form.Label>
                        <Form.Control
                            type="text"
                            value={manager}
                            onChange={(e) => setManager(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="adress">
                        <Form.Label>Adress</Form.Label>
                        <Form.Control
                            type="text"
                            value={address}
                            onChange={(e) => setAdress(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="average_rating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                            type="number"
                            value={average_rating}
                            onChange={(e) => setRate(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="overview">
                        <Form.Label>Overview</Form.Label>
                        <Form.Control
                            type="text"
                            value={overview}
                            onChange={(e) => setOverview(e.target.value)}
                        />
                    </Form.Group>                 
                    <Form.Group controlId="image">
                        <Form.Label>Изображение</Form.Label>
                        <Form.Control
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </Form.Group>   
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Закрыть
                </Button>
                <Button variant="primary" onClick={handleCreateExcursion}>
                    Создать
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateExcursion;