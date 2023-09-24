import React from 'react'

const Navbar = ({ filterItem, menuList }) => {
    return (
        <div>
            <nav className='navbar'>
                <div className='btn-group'>

                    {
                        menuList.map((currentElement) => {
                            return (
                                <button className='btn-group__item' onClick={() => filterItem(currentElement)}>{currentElement}</button>
                            )
                        })
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar
