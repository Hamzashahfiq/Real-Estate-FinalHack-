import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify';


export const getProperty = createAsyncThunk(
    'product/getProduct',
    async ({ setGetProductLoading }) => {
        try {
            setGetProductLoading(true)
            const response = await axios.get(`${process.env.REACT_APP_local}/product/getProperty`)
            return response?.data?.data;
        }
        catch (error) {
            console.log({ error })
            toast(error?.response?.data?.message)
        }
        finally {
            setGetProductLoading(false)
        }

    }
)
export const addProperty = createAsyncThunk(
    'product/addProduct',
    async ({propertyData,setAddProductLoading,setPropertyData,PropertyDetail}) => {
        try {
            setAddProductLoading(true)
            let token = window.localStorage.getItem('token');
            let data = {
               ...propertyData,
               token
            }
            const response = await axios.post(`${process.env.REACT_APP_local}/product/addProperty`,data, { headers: { token: token }})
             toast('Property data added succcessfully')
             setPropertyData(PropertyDetail)
            return response?.data?.data;
        }
        catch (error) {
            console.log({ error })
            toast(error?.response?.data?.message)
        }
        finally {
            setAddProductLoading(false)
        }

    }
)

export const deleteProperty = createAsyncThunk(
    'product/deleteProperty',
    async ({Propertyid,setDelLoader}) => {
        try {
            setDelLoader(true)
            let token = window.localStorage.getItem('token');
            const response = await axios.post(`${process.env.REACT_APP_local}/product/deleteProperty`,{id:Propertyid}, { headers: { token: token }})
             toast('Property data deleted succcessfully')
            return Propertyid;
        }
        catch (error) {
            console.log({ error })
            toast(error?.response?.data?.message)
        }
        finally {
            setDelLoader(false)
        }

    }
)




const initialState = {
    propertys: [],
}

export const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getProperty.fulfilled, (state, action) => {
            state.propertys = action?.payload;
        })
        builder.addCase(addProperty.fulfilled, (state, action) => {
            state.propertys.push(action?.payload)
        })
        builder.addCase(deleteProperty.fulfilled, (state, action) => {
            let newArry = state.propertys.filter((item)=> item._id !== action.payload);
            state.propertys = newArry
        })

    },
})

// Action creators are generated for each case reducer function
export const {  } = ProductSlice.actions

export default ProductSlice.reducer