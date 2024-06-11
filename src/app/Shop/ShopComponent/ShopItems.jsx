'use client'
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import './shopItems.css';
import { StyleRegistry, createStyleRegistry } from 'styled-jsx'
const posters = [
    { id: 1, title: "Poster V1", link: "/Shop/PosterV1", imgSrc: "imgs/Products Poster V1.jpg", price: "$23.99", category: "Posters", para: "Posters", head: "Posters" },
    { id: 2, title: "Poster V2", link: "/Shop/PosterV2", imgSrc: "imgs/Products Poster V2.jpg", price: "$17.99", category: "Posters", para: "Posters", head: "Posters" },
    { id: 3, title: "Poster V3", link: "/Shop/PosterV3", imgSrc: "imgs/Products Poster V3.jpg", price: "$14.99", category: "Posters", para: "Posters", head: "Posters" },
    { id: 4, title: "Poster V4", link: "/Shop/PosterV4", imgSrc: "imgs/Products Poster V4.jpg", price: "$23.99", category: "Posters", para: "Posters", head: "Posters" },
    { id: 5, title: "Poster V5", link: "/Shop/PosterV5", imgSrc: "imgs/Products Poster V5.jpg", price: "$17.99", category: "Posters", para: "Posters", head: "Posters" },
    { id: 6, title: "Poster V6", link: "/Shop/PosterV6", imgSrc: "imgs/Products Poster V6.jpg", price: "$14.99", category: "Posters", para: "Posters", head: "Posters" },
    { id: 7, title: "PostCard V1", link: "/Shop/PostCardV1", imgSrc: "imgs/Products PostCard  V1.jpg", price: "$23.99", category: "PostCards", para: "Postcard", head: "PostCards" },
    { id: 8, title: "PostCard V2", link: "/Shop/PostCardV2", imgSrc: "imgs/Products PostCard  V2.jpg", price: "$17.99", category: "PostCards", para: "Postcard", head: "PostCards" },
    { id: 9, title: "PostCard V3", link: "/Shop/PostCardV3", imgSrc: "imgs/Products PostCard  V3.jpg", price: "$14.99", category: "PostCards", para: "Postcard", head: "PostCards" },
    { id: 10, title: "PostCard V4", link: "/Shop/PostCardV4", imgSrc: "imgs/Products PostCard  V4.jpg", price: "$23.99", category: "PostCards", para: "Postcard", head: "PostCards" },
    { id: 11, title: "PostCard V5", link: "/Shop/PostCardV5", imgSrc: "imgs/Products PostCard  V5.jpg", price: "$17.99", category: "PostCards", para: "Postcard", head: "PostCards" },
    { id: 12, title: "PostCard V6", link: "/Shop/PostCardV6", imgSrc: "imgs/Products PostCard  V6.jpg", price: "$14.99", category: "PostCards", para: "Postcard", head: "PostCards" },
];
const ShopItems = () => {
    const [active, setActive] = useState("active");
    const [h1, setH1] = useState("Shop")
    const [arr, setArr] = useState(posters);
    const handleShow = (buttonCategory) => {
        setActive(buttonCategory);
        setH1(buttonCategory)
        const newArr = posters.filter((item) => {
            return item.category === buttonCategory;
        });
        setArr(newArr);
    };






    return (
        <div className="items">
            <div className="left">
                <div className="search">
                    <input type="search" name="Search" id="search" placeholder='Search Products......' />
                    <button className="icon-search"></button>
                </div>
                <div className="slide">
                    <h1>Filter By Price</h1>
                    <input type="range" name="Range" id="range" min="10" max="30" step="1" />
                    <input type="text" value='$10' />
                    <input type="text" value='$30' />
                </div>
                <div className="cat">
                    <h1>Categories</h1>
                    <div className="post">
                        <button onClick={() => { setArr(posters); setActive("active"); setH1("Shop") }}><h2 className={active === "active" ? "active" : null}>All Categories</h2></button>
                        <button onClick={() => { handleShow("PostCards") }} ><h2 className={active === "PostCards" ? "active" : null}>Postcards (6) </h2></button>
                        <button onClick={() => { handleShow("Posters") }}><h2 className={active === "Posters" ? "active" : null}>Posters (6) </h2></button>
                    </div>
                </div>
            </div>
            <div className="right">

                <div className="just">
                    <div className="home">
                        <p> Home / {h1}</p>
                    </div>
                    <div className="shop">
                        <h1>{h1}</h1>
                    </div>
                    <div className="show">
                        <p>Showing all 12 results</p>
                        <select name="Sort" id="Sorting">
                            <option value="Default sorting"> Default sorting </option>
                            <option value="">Sort by popularity</option>
                            <option value="">Sort by average rating</option>
                            <option value="">Sort by latest</option>
                            <option value="">Sort by price: low to high</option>
                            <option value="">Sort by price: high to low</option>
                        </select>
                    </div>





                    <div className="fath">
                        <AnimatePresence>

                            {arr.map((item) => {
                                return (
                                    <motion.div layout
                                        initial={{ transform: "scale(0.4)" }}
                                        animate={{ transform: "scale(1)" }}
                                        transition={{ type: "spring", damping: 20, stiffness: 30 }}
                                        className="volt"
                                        key={item.imgSrc}> <br />
                                        <a href={item.link}>
                                            <img width={283} src={item.imgSrc} alt="Posters" className='img' />
                                        </a>
                                        <p> {item.para}</p>
                                        <h3> {item.title} </h3>
                                        <p> {item.price} </p>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>

                    </div>





















                </div>
            </div>
        </div>
    )
}

export default ShopItems;
