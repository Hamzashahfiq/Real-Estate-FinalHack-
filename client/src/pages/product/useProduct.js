import { useState } from "react"
import { useDispatch } from "react-redux"

export default function useProduct() {
    const [itemQty, setItemQty] = useState(0);
    const dispatch = useDispatch();

    const incrementHandler = () => {
        setItemQty(itemQty + 1)
    }
    const decrementHandler = () => {
        if (itemQty > 0) {
            setItemQty(itemQty - 1)
        }
    }
    const cartHandler = (data) => {
        if (itemQty > 0) {
            let cartPrduct = {
                productTitle: data.productTitle,
                productDesc: data.productDesc,
                category: data.category,
                price: data.price,
                imageUrl: data.imageUrl,
                productId: data._id,
                qty: itemQty
            }
        } else {
             alert('Product quantity should be greater then zero')
        }
    }
    return (
        {
            itemQty,
            incrementHandler,
            decrementHandler,
            cartHandler
        }
    )
}
