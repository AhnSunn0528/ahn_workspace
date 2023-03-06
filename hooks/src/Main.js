import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import StudySub from './StudySub';

const Main = (props) => {
	const {id} = useParams();
	const contents = "";
	//console.log(id);

	return (
		<>
			<h3>안녕하세요. 메인페이지 입니다.</h3>
			<StudySub props={id}></StudySub>
		</>
	);
};

export default Main;