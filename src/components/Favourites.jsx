import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromFavoriteAction } from '../redux/actions';

const Favourites = () => {
	const myFavorites = useSelector((state) => state.favorite.content);
	const dispatch = useDispatch();
	return (
		<Container>
			<Row>
				<Col>
					<ListGroup>
						{myFavorites.map((favorite, i) => {
							return (
								<ListGroup.Item
									key={favorite._id}
									className='d-flex justify-content-between'>
									<Link to={`/${favorite.company_name}`}>
										{favorite.company_name} | {favorite.title}
									</Link>
									<Button
										variant='danger'
										onClick={() => {
											dispatch(removeFromFavoriteAction(i));
										}}>
										Remove
									</Button>
								</ListGroup.Item>
							);
						})}
					</ListGroup>
				</Col>
			</Row>
		</Container>
	);
};
export default Favourites;
