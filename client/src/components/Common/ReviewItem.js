import StarIcon from '@mui/icons-material/Star';




function ReviewItem({review}) {

    const {id, heading, description, rating, name, company, image } = review;
  
    return (

                        <div className='box' >
                            <div className='header'>
                             <span className='heading'>“{heading}”</span>
                              <p className='desc'>{description}
                              </p>
                            </div>
                            <div className='rating_stars' >
                            {[...Array(rating)].map((star, i) => (
                              <StarIcon key={i} />
                            ))}
                            </div>
                            <div className='company_name'>
                               <h4>{name}</h4>
                               <p>{company} </p>
                               
                            </div>
                            <div className='bottom_img'>
                            <img src={image} alt={heading}/>
                            </div>
                        </div>

    )
  
  }


  export default ReviewItem;