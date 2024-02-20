import StarIcon from '@mui/icons-material/Star';




function ReviewItem({review}) {

    const {heading, description, rating, name, company} = review;
  
    return (

                        <div className='box' >
                            <div className='header'>
                             <span className='heading'>“{heading}”</span>
                              <p className='desc'>{description}
                              </p>
                            </div>
                            <div className='rating_stars' >
                            {[...Array(rating)].map((_, index) => (
  <StarIcon key={index} />  
))}
                            </div>
                            <div className='company_name'>
                               <h4>{name}</h4>
                               <p>{company} </p>
                               
                            </div>
                        </div>

    )
  
  }


  export default ReviewItem;