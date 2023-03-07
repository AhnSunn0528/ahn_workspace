import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';
import State from './study/State';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      		<BrowserRouter>
				{/* <Header /> */}
				<Routes>
					<Route exact path="/" element={<Main />}></Route>
					<Route exact path="/main/:id" element={<Main />}></Route>
					<Route exact path="/study/state" element={<State></State>}></Route>
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
					{/* <Route path="*" element={<NotFound />}></Route> */}
				</Routes>
			</BrowserRouter>
      </header>
    </div>
  );
}

export default App;