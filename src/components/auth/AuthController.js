const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const authUser = require('./AuthModel')


const signupUser = async (req, res) => {

    if (!req.body.userName || !req.body.password || !req.body.mobileNo) {
        let responseData = {
            message: 'params required: userName, password, mobileNo',
        }
        res.status(400).json(responseData);
        return;
    }
    let data = await authUser.findOne({name: req.body.userName})
    if (data) {
        let responseData = {
            message: "User already exist",
        }
        res.status(404).json(responseData);
        return;
    }
    const saltRounds = 10;
    let pass = await bcrypt.hash(req.body.password, saltRounds);
    let addNewUser = {
        name: req.body.userName,
        password: pass,
        mobileNo: req.body.mobileNo,
        createdAt: new Date(),
    }

    const newUser = new authUser(addNewUser)

    try {

        const userData = await newUser.save()
        let responseData = {
            statusCode: 200,
            message: 'User has been created successfully',
            data: userData
        }
        
        req.body.userName
        res.status(200).json(responseData);
    }
    catch (error) {
        let responseData = {
            message: error
        }
        res.status(404).json(responseData);
    }

}

const signinUser = async (req, res) => {
    if (!req.body.userName || !req.body.password ) {
        let responseData = {
            message: 'params required: userName, password'
        }
        res.status(400).json(responseData);
        return;
    }

    try {
        const userData = await authUser.findOne({ name: req.body.userName })
        if (!userData) {
            let responseData = {
                message: 'User not found'
            }
            res.status(401).json(responseData);
            return;
        }
        const pass = await bcrypt.compare(req.body.password, userData.password);
        if (!pass) {
            let responseData = {
                message: 'Password is incorrect'
            }
            res.status(400).json(responseData);
            return;
        }
        let user = {
            userName: userData.username,
            password: userData.password,
        }
        var token = await jwt.sign(user, process.env.PRIVATEKEY);
        if (token) {
            let responseData = {
                statusCode: 200,
                message: 'User authenticated',
                token
            }
            res.status(200).json(responseData);
        }
    }
    catch (error) {
        let resp = {
            message: error
        }
        res.status(400).json(resp);
    }
}

const currentUser = async (req, res) => {
    let responseData = {
        message: 'User is Login'
    }
    res.status(200).json(responseData);
}




module.exports = {
    signupUser,
    signinUser,
    currentUser
}
