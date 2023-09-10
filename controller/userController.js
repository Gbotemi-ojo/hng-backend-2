const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const userModel = require("../model/user");

exports.Createuser = [
    body("name", "name must not be empty")
        .trim()
        .isLength({ min: 1 })
        .isString(),
    asyncHandler(async (req, res, next) => {
        try {
            const errors = validationResult(req);
            const user = new userModel({
                name: req.body.name,
            });
            if (!errors.isEmpty()) {
                res.status(403).json({
                    error: errors.array()
                });
                return;
            }
            else {
                const user_Exists = await userModel.findOne({ name: req.body.name });
                if (user_Exists) {
                    res.status(403).json("This name exists, choose another one");
                    return;
                }
                else {
                    await user.save();
                    res.status(200).json({
                        message: "success baby!"
                    });
                }
            }
        } catch (error) {
            console.log(error);
        }
    })];

exports.getUser = [
    body("name", "name must not be empty")
        .trim()
        .isLength({ min: 1 })
        .isString(),
    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(403).json({
                error: errors.array()
            });
            return;
        }
        else {
            const user = await userModel.findOne({ name: req.body.name });
            if (!user) {
                res.status(403).json("There is no such user with provided name");
                return;
            }
            else {
                res.status(200).json(user);
            }
        }
    })];

exports.updateUser = [
    body("name", "name must not be empty")
        .trim()
        .isLength({ min: 1 })
        .isString(),
    body("id", "id must not be empty")
        .trim()
        .isLength({ min: 1 }),
    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(403).json({
                error: errors.array()
            });
            return;
        }
        else {
            const user_Exists = userModel.findOne({ _id: req.body.id })
            if (!user_Exists) {
                res.status(401).json("user does not exist");
                return;
            }
            else {
                await userModel.findByIdAndUpdate({_id : req.body.id}, {name : req.body.name}, { new: true });
                res.json("success");
            }
        }
    })
]
exports.deleteUser = [
    body("id", "id must not be empty")
        .trim()
        .isLength({ min: 1 }),
    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(403).json({
                error: errors.array()
            });
            return;
        }
        else {
            const user_Exists = userModel.findOne({ _id: req.body.id });
            if (!user_Exists) {
                res.json("user does not exist");
                return;
            }
            else {
                await userModel.findByIdAndRemove(req.body.id);
                res.json("user deleted")
            }
        }
    })
]