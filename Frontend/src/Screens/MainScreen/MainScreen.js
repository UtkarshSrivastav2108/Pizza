import React from 'react'
import Pizza from '../../Components/Pizza/Pizza';
import MainCarousel from '../../Components/Carousel/MainCarousel';
import pizzas from "../../pizzaData";


function MainScreen() {
    return (
        <>
            <MainCarousel />
            <div className="container" style={{ padding: "20px 15px", margin: "10px auto" }}>
                <div className="row ">

                    {pizzas.map(pizza => {
                        return <div className="col-lg-4">
                            <div>
                                <Pizza pizza={pizza} />
                            </div>
                        </div>
                    })}

                </div>

            </div>


        </>
    )
}

export default MainScreen
