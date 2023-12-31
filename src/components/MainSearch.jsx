import { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs } from '../redux/actions';

const MainSearch = () => {
	const [query, setQuery] = useState('');
	const dispatch = useDispatch();
	const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?search=';
	const jobs = useSelector((state) => state.jobs.jobs);
	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(getAllJobs(baseEndpoint, query));
	};

	return (
		<Container>
			<Row>
				<Col xs={10} className='mx-auto my-3'>
					<h1 className='display-1'>Remote Jobs Search</h1>
				</Col>
				<Col xs={10} className='mx-auto'>
					<Form onSubmit={handleSubmit}>
						<Form.Control
							type='search'
							value={query}
							onChange={handleChange}
							placeholder='type and press Enter'
						/>
					</Form>
				</Col>
				<Col xs={10} className='mx-auto mb-5'>
					{jobs.map((jobData) => (
						<Job key={jobData._id} data={jobData} />
					))}
				</Col>
			</Row>
		</Container>
	);
};

export default MainSearch;
