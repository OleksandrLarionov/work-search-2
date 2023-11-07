import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToFavoriteAction } from '../redux/actions';

const Job = ({ data }) => {
	const dispatch = useDispatch();
	console.log(data);
	return (
		<>
			<Row className='mx-0 mt-3 p-3' style={{ border: '1px solid #00000033', borderRadius: 4 }}>
				<Col xs={4}>
					<Link to={`/${data.company_name}`}>{data.company_name}</Link>
				</Col>
				<Col xs={6}>
					<a href={data.url} target='_blank' rel='noreferrer'>
						{data.title}
					</a>
				</Col>
				<Col xs={2}>
					<Button
						variant='secondary'
						onClick={() => {
							dispatch(addToFavoriteAction(data));
						}}>
						Add me
					</Button>
				</Col>
			</Row>
		</>
	);
};

export default Job;
