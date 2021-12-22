import { React, useContext } from "react";
import { Scrollbars } from 'react-custom-scrollbars-2';
import { CartContext } from "./Cart";
import Item from "./Items";
function CartPage() {
  
    const {item, totalAmount, totalItem} = useContext(CartContext);
    return (
        <div>


            <section className="container-fluid">
                <div className="head">
                    <h2>Shopping Cart</h2>
                    <p className="lead">
                        You have {totalItem} items in Shopping Cart.
            </p>
                </div>
                <div className="container cart-container">
                    <Scrollbars >
                        {
                            item.map((currdata) => {
                                return <Item key={currdata.id} {...currdata} />
                            })
                        }

                    </Scrollbars>
                </div>
                <div className="container-fluid total">
                    <h3>Cart Total :   <span> Rs. {totalAmount}</span></h3>
                </div>

            </section>

        </div>

    );
}
export default CartPage;