import './App.css'
import {Header, Search, Footer} from './components';
import news from './data/news';
import searchList from './data/searchList';
import newsInFooter from './data/newsInFooter';
import React from "react";

function App() {


  return (
    <div className="container">
        <>
            <Header props={news}>
                <div className="right-info">
                    <img src="#" alt="image"/>
                    <h4>Работа на ошибками</h4>
                    <span>Смотрите на Яндексе и запоминайте</span>
                </div>
            </Header>
            <Search list={searchList}>
                <span>Яндекс</span>
                <input type="text"/>
            </Search>
            <footer className="footer">
                {newsInFooter.map((item, index) =>
                    <Footer props={item} key={index}/>)}
            </footer>
        </>
    </div>
  )
}

export default App
