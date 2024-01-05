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




const ExcursionList = () => {

    const {store} = useContext(Context);

    

    const minPrice = Math.min(...store._prices);
    const maxPrice = Math.max(...store._prices); 
    
    const minDistance = maxPrice/minPrice*40;

    const [value, setValue] = useState([minPrice, maxPrice]);
    const handleChange = (event, newValue, activeThumb) => {
      if (!Array.isArray(newValue)) {
        return;
      }
  
      if (newValue[1] - newValue[0] < minDistance) {
        if (activeThumb === 0) {
          const clamped = Math.min(newValue[0], maxPrice+50 - minDistance);
          setValue([clamped, clamped + minDistance]);
        } else {
          const clamped = Math.max(newValue[1], minDistance);
          setValue([clamped - minDistance, clamped]);
        }
      } else {
        setValue(newValue);
      }
    };

    const filteredExcursions = store._excursions.filter(excursion => {
      return excursion.price >= value[0] && excursion.price <= value[1];
    })
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
                                                    value={value}
                                                    onChange={handleChange}
                                                    valueLabelDisplay="auto"
                                                    disableSwap
                                                    
                                                    max = {maxPrice+50}
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
                            {filteredExcursions.map(excursion => (
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