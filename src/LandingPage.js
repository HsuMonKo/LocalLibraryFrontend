import React, { useState } from "react";
import Book from "./Book.js";
import axios from "axios";
import './LandingPage.css';

function LandingPage() {
    const [books, setBooks] = useState([]);
    const [country, setCountry] = useState({});

    const handleClick = async () => {
        try {
            const countryResponse = await axios.get("http://localhost:8080/getRandomCountry");
            const countryCode = countryResponse.data.countryCode;
            setCountry(countryResponse.data);
            const booksResponse = await axios.get(`http://localhost:8080/getTop3ReadBooks?country_code=${countryCode}`);
            setBooks(booksResponse.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>{
            books.length > 0 ? (
                <div className="main">
                    <button id="action-btn" onClick={handleClick} >Get Country: {country.countryCode}</button>
                    <div id="container" className="box">
                        {books.map((book, index) => (
                            <Book key={index} book={book} sequence={index + 1} />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="main">
                    <button id="action-btn" onClick={handleClick} >Get Country</button>
                    <div id="error-message" className="box">
                        No data found.
                    </div>
                </div>
            )
        }</>
    );

}

export default LandingPage;