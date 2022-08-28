import React from 'react'
import InputField from '../../../commonComponents/InputField'
import Box from '@mui/material/Box';
import useAddPage from './useAddPage';
import Button from '@mui/material/Button';
import ProgressLoader from '../../../commonComponents/progressLoader/ProgressLoader';
export default function AddPage() {
    const { propertyData,stateHandler, submitProperty,addProductLoading } = useAddPage()
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
            <div style={{ backgroundColor: '#a4c3b2', borderRadius: '40px', padding: '20px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', width: '70%' }}>
                <h2 style={{ color: '#283618', fontWeight: 'bold', textAlign: 'center' }}>Add Property</h2>
                <Box
                    component="form"
                    onSubmit={(e) => submitProperty(e)}
                    autoComplete="off"
                >
                    <Box sx={{ display: 'flex', justifyContent: 'center', pt: 3, alignItems: 'center', flexWrap: 'wrap', width: '100%' }}>
                        <InputField sx={{ backgroundColor: 'white' }} type='text' label='Property Title' name='PropertyTitle' value={propertyData.PropertyTitle} onChange={(e) => stateHandler(e)} />
                        <InputField sx={{ backgroundColor: 'white' }} type='text' label='Location' name='Location' value={propertyData.Location} onChange={(e) => stateHandler(e)} />
                        <InputField sx={{ backgroundColor: 'white' }} type='text' label='Property Type' name='PropertyType' value={propertyData.PropertyType} onChange={(e) => stateHandler(e)} />
                        <InputField sx={{ backgroundColor: 'white' }} type='text' label='Size' name='Size' value={propertyData.Size} onChange={(e) => stateHandler(e)} />
                        <InputField sx={{ backgroundColor: 'white' }} type='text' label='Finish Type' name='FinishType' value={propertyData.FinishType} onChange={(e) => stateHandler(e)} />
                        <InputField sx={{ backgroundColor: 'white' }} type='number' label='Price' name='price' value={propertyData.price} onChange={(e) => stateHandler(e)} />
                        <InputField sx={{ backgroundColor: 'white' }} type='number' label='Bedrooms' name='Bedrooms' value={propertyData.Bedrooms} onChange={(e) => stateHandler(e)} />
                        <InputField sx={{ backgroundColor: 'white' }} type='text' label='Image Url' name='imageUrl' value={propertyData.imageUrl} onChange={(e) => stateHandler(e)} />

                    </Box>
                    {addProductLoading ?
                         <div style={{ textAlign: 'center', marginTop: '12px' }}><ProgressLoader /></div> :
                        <div style={{ textAlign: 'center', marginTop: '12px' }}><Button type='submit' variant="contained">Submit</Button></div>
                    }
                </Box>
            </div>
        </div>
    )
}
