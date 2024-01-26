import React, { useState, useContext, useEffect } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import ExcursionItemCard from '../../Common/Excursion/ExcursionItemCard';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Slider from '@mui/material/Slider';
import { Context } from '../../../index.js';
import { fetchExcursions, fetchHistory } from '../../../http/ExcursionAPI';
import AutorenewIcon from '@mui/icons-material/Autorenew';

const ExcursionList = () => {
  const { store } = useContext(Context);
  const { user } = useContext(Context);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [value, setValue] = useState([0, 0]);
  const [limit, setLimit] = useState(4); // Initial limit value

  useEffect(() => {
    fetchExcursions(limit).then(data => {
      store.setExcursions(data);
      store.setListCount(data.count);
      const prices = data.rows.map(excursion => excursion.price);
      setMinPrice(Math.min(...prices));
      setMaxPrice(Math.max(...prices));
      setValue([Math.min(...prices), Math.max(...prices)]);
    });

    fetchHistory(user.id).then(data => {
      store.setHistory(data.history);
    });
  }, [limit]); // Fetch excursions whenever the limit changes

  const minDistance = Math.round(maxPrice / 4);

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], maxPrice + 50 - minDistance);
        setValue([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue([clamped - minDistance, clamped]);
      }
    } else {
      setValue(newValue);
    }
  };

  const filteredExcursions = store.excursions.filter(excursion => {
    return excursion.price >= value[0] && excursion.price <= value[1];
  });

  const handleLoadMore = () => {
    setLimit(prevLimit => prevLimit + 4); // Increase the limit by 4
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
                        aria-controls='panel1a-content'
                        id='panel1a-header'
                      >
                        <Typography>Price</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className='range_slider'>
                          <Slider
                            getAriaLabel={() => 'Minimum distance'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay='auto'
                            disableSwap
                            min={minPrice}
                            max={maxPrice}
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
                {filteredExcursions.length > 0 ? (
                  filteredExcursions.map(excursion => (
                    <ExcursionItemCard key={excursion.id} excursion={excursion} />
                  ))
                ) : (
                  <p>Ничего не найдено для данного поиска.</p>
                )}
                {filteredExcursions.length > 0 && store.listCount > limit && (
                  <Button variant="outlined" onClick={handleLoadMore}>
                    Load More <AutorenewIcon/>
                  </Button>
                )}
              </div>
                
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ExcursionList;