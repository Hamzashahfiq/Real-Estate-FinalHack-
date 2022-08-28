import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteProperty } from '../../../store/ProductSlice'


export default function useDelProperty() {
      const [delLoader, setDelLoader] = useState(false)
        const dispatch = useDispatch();

        const delDataHandler =(pData) =>{
            console.log(pData._id)
            let Propertyid = pData._id
            dispatch(deleteProperty({Propertyid,setDelLoader}))
        }

    return (
        {
            delDataHandler
        }
    )
}
