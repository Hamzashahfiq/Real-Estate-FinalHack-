import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { addProperty } from '../../../store/ProductSlice';
import { useDispatch } from 'react-redux';
const PropertyDetail = {
    PropertyTitle: '',
    Location: '',
    PropertyType: '',
    Size:'',
    FinishType:'',
    price: '',
    Bedrooms:'',
    imageUrl:'',
}
export default function useAddPage() {
   const dispatch = useDispatch()
    const [propertyData, setPropertyData] = useState(PropertyDetail);
    const [addProductLoading, setAddProductLoading] = useState(false);
     const stateHandler = (e) =>{
        setPropertyData({...propertyData,[e.target.name]:e.target.value})
     }
     const submitProperty = (e) =>{
        e.preventDefault();
           if (!propertyData.PropertyTitle ||!propertyData.Location||!propertyData.PropertyType||!propertyData.Size
            ||!propertyData.FinishType||!propertyData.price||!propertyData.Bedrooms||!propertyData.imageUrl){
                toast("All input data required") 
            }
            dispatch(addProperty({propertyData,setAddProductLoading,setPropertyData,PropertyDetail}))
     }

    
    return (
    {
        propertyData,
        stateHandler,
        submitProperty,
        addProductLoading
    }
  )
}
