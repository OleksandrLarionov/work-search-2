import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const YourFavorites = () => {
	const navigate = useNavigate();
	const favoritesLength = useSelector((state) => state.favorite.content.length);

	return (
		<div className='d-flex justify-content-end my-4'>
			<Button onClick={() => navigate('/favorites')} className='d-flex align-items-center'>
				starJobs
				<span className='ms-2'>{favoritesLength}</span>
			</Button>
		</div>
	);
};

export default YourFavorites;
