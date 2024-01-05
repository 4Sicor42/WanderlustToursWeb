import React,{useState,useContext} from 'react';
import { Container, Row } from 'react-bootstrap';
import ExcursionItemCard from '../../Common/Excursion/ExcursionItemCard';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Slider from '@mui/material/Slider';
import { Context } from '../../../index.js';
import { Exception } from 'sass';

const pricemarks = [
    {
      value: 0,
      label: '$0',
    },
    {

      value: 100,
      label: '$100',
    },
  ];


const minDistance = 10;

const ExcursionList = () => {

    const store = useContext(Context);
    
    console.log(store,store.excurions)

    const [price, setPrice] = useState([0, 100]);

  const handlePriceChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
        setPrice([Math.min(newValue[0], price[1] - minDistance), price[1]]);
    } else {
        setPrice([price[0], Math.max(newValue[1], price[0] + minDistance)]);
    }
  };


  return (
    <>
        <div className='flights_list_outer'>
            <Container>
                <Row>
                    <div className='col-12 col-md-4'>
                        <div className='Filter_outer'>
                            <div className='Filter_inner_container'>
                                <h4 className='filter_heading'>Filters</h4>
                                <div className='filter_accordian'>
                                    <Accordion>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >
                                        <Typography>Price</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                          <div className='range_slider'>
                                            <Slider
                                                    getAriaLabel={() => 'Minimum distance'}
                                                    value={price}
                                                    onChange={handlePriceChange}
                                                    valueLabelDisplay="auto"
                                                    disableSwap
                                                    marks={pricemarks}
                                                />
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-8'>
                        <div className='list_col_outer'>
                            <div className='filtered_products_outer'>
                            {store.map(excursion => (
                            <ExcursionItemCard key={excursion.id} excursion={excursion}/>
                            ))}
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    
    </>
   
  )
}

export default ExcursionList