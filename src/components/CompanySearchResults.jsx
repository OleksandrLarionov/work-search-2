import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Job from './Job';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCompany } from '../redux/actions';

const CompanySearchResults = () => {
	const jobs = useSelector((state) => state.jobs.company);
	const params = useParams();
	const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?company=';

	useEffect(() => {
		getCompany(baseEndpoint, params);
	}, []);

	return (
		<Container>
			<Row>
				<Col className='my-3'>
					<h1 className='display-4'>Job posting for: {params.company}</h1>
					{jobs.map((jobData) => (
						<Job key={jobData._id} data={jobData} />
					))}
				</Col>
			</Row>
		</Container>
	);
};
export default CompanySearchResults;
