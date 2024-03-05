import React from "react";
import { useState } from "react";
import './Pagination.css'


const Pagination = ({ data, currentPage, setCurretPage }) => {
    const productsPerPage = 8;
    const lastIndex = currentPage * productsPerPage;
    const firstIndex = lastIndex - productsPerPage;
    const totalPages = Math.ceil(data.length / productsPerPage);
    const numbers = [];
    for (let i = 1; i <= totalPages; i++)
        numbers.push(i);

    return (
        <nav>
            <div >
                <ul className="pagination">
                  
                    <li className="page-item">
                        <a href="#" className="page-link" onClick={prePage}>prev</a>
                    </li>
                    {
                        numbers.map((n, i) => (
                            <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                                <a href="#" className="page-link" onClick={()=>{changeCurrentPage(n)}} >{n}</a>
                            </li>
                        ))
                    }

                    <li className="page-item">
                        <a href="#" className="page-link" onClick={nextPage}>next</a>
                    </li>

                </ul>

            </div>
        </nav>
    )
    function prePage() {
        if (currentPage !== firstIndex) {
            setCurretPage(currentPage - 1);

        }


    };
    function nextPage() {
        if (currentPage !== lastIndex) {
            setCurretPage(currentPage +
                1);

        }


    };
    function changeCurrentPage(id) {
        setCurretPage(id)

    };



};

export default Pagination;