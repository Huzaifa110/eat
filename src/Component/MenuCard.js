import React from 'react'

const MenuCard = ({ menuData }) => {
    return (
        <div>
            <section className='main-card--cointainer'>
                {menuData.map((currentElement) => {

                    const {id, image, name, category, price} = currentElement;

                    return (
                        <div className="card-container" >
                            <div className="card">
                                <div className="card-body">
                                    <span className='card-number card-circle subtle'>{id}</span>
                                    <span className='card-author subtle'>{category}</span>
                                    <h2 className='card-title'>{name}</h2>
                                    <img src={image} alt="images" className='card-media' />
                                    <span className='card-author subtle'><h1>Rs: {price}/-</h1></span>
                                    <br />
                                </div>
                                <span className='card-tag subtle'>Order Now</span>
                            </div>
                        </div>
                    )
                })};
            </section>
        </div>
    )
}

export default MenuCard