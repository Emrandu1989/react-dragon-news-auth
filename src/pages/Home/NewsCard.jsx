import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsCard = ({singleNews}) => {
    console.log(singleNews)
      const {author,category_id, details, image_url,rating,thumbnail_url,title,total_view,_id} = singleNews;

    return (
        <>
           <div className="card mr-12 bg-base-100 mb-16 border-b-2 shadow-xl">
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    {
    details.length > 200 ? <p>{details.slice(0,200)} <Link 
     to={`/news/${_id}`}
    className='text-blue-600 font-bold'>Read More...</Link> </p> : <p>{details}</p>
    }
   
  </div>
</div>   
        </>
    );
};

export default NewsCard;

NewsCard.propTypes = {
    singleNews:PropTypes.object
}