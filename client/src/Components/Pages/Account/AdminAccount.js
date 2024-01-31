import React, { useState } from 'react';
import { Button, Container } from "react-bootstrap";
import CreateExcursion from "../../Common/Excursion/CreateExcursion";
//import CreateExcursionInfo from "../../Common/Excursion/CreateExcursionInfo";
//<Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => setExcursionInfoVisible(true)}>Добавить информацию об экскурсии</Button>
const Admin = () => {
    const [excursionVisible, setExcursionVisible] = useState(false);
    //const [excursionInfoVisible, setExcursionInfoVisible] = useState(false);

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setExcursionVisible(true)}
            >
                Добавить экскурсию
            </Button>
            
            <CreateExcursion show={excursionVisible} onHide={() => setExcursionVisible(false)} />
            
        </Container>
    );
};

export default Admin;