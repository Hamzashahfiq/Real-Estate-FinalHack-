const propertys = require('./ProductsModel')



const addProperty = async (req, res) => {
    if (!req.body.PropertyTitle||!req.body.Location || !req.body.PropertyType || !req.body.Size||
        !req.body.FinishType||!req.body.price||!req.body.Bedrooms||!req.body.imageUrl) {
        let responseData = {
            message: 'params required:PropertyTitle,Location, PropertyType,Size, FinishType,price,Bedrooms,imageUrl'
        }
        res.status(400).json(responseData);
        return;
    }
 
    let addNewProperty = {
        PropertyTitle: req.body.PropertyTitle,
        Location: req.body.Location,
        PropertyType: req.body.PropertyType,
        Size:req.body.Size,
        FinishType:req.body.FinishType,
        price: req.body.price,
        Bedrooms:req.body.Bedrooms,
        imageUrl:req.body.imageUrl,
        token:req.body.token,
        createdAt:new Date()
    }

    const newProperty = new propertys(addNewProperty)

    try {
        const nProperty = await newProperty.save()
        let responseData = {
            message: 'Product has been added successfully',
            data: nProperty
        }
        res.status(200).json(responseData);
    }
    catch (error) {
        let responseData = {
            message: error
        }
        res.status(404).json(responseData);
    }
}
const getProperty = async (req, res) => {

    try {
        const properties = await propertys.find()
        let responseData = {
            message: 'Properties',
            data: properties
        }
        
        res.status(200).json(responseData);
    }
    catch (error) {
        let responseData = {
            message: error
        }
        res.status(404).json(responseData);
    }
}
const deleteProperty = async (req, res) => {
    console.log('dele')
    if (!req.body.id) {
        let responseData = {
            message: 'id required'
        }
        res.status(400).json(responseData);
        return;
    }

    try {
        const nProperty = await propertys.remove({_id:req.body.id})
        let responseData = {
            message: 'Product has been deleted successfully',
        }
        res.status(200).json(responseData);
    }
    catch (error) {
        let responseData = {
            message: error
        }
        res.status(404).json(responseData);
    }
}





module.exports = {
    addProperty,
    getProperty,
    deleteProperty
}
