import React from 'react';
import { Link, Route, useParams } from 'react-router-dom';
import StudySub from './StudySub';

const Study = (props) => {
    const { id } = useParams();
    console.log('id :: ', { id });

    return (
		<>
			<h3>안녕하세요. 공부 페이지 입니다.</h3>
			<ul>
                <Route path="/studySub/:name" element={<StudySub />}>State</Route>
			</ul>
		</>
	);
};

export default Study;