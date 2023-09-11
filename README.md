# hng-backend-2

# slack username
Gbotex_Latex

# Endpoint
https://hng-task2-backend-nyoj.onrender.com/api

# packages used
This project was made with express.js and mongodb for database

# DOTENV FILES
user_name = "YOUR MONGODB USERNAME HERE"
password = "YOUR MONGODB PASSWORD"
database = "YOUR COLLECTION NAME HERE"

## Create
To create, pass the property "name" i.e req.body.name
e.g "name" : "Gbotex_Latex"

## Read
To get a user pass the property "id" to the endpoint 
e.g https://hng-task2-backend-nyoj.onrender.com/api/user_id
you'll be provided with an object
{
     "_id" : user _id here,
    "name" : "Gbotex_latex"
}
## Update
To update a user, pass the id of the user you want to update to the endpoint
https://hng-task2-backend-nyoj.onrender.com/api/user_id
then pass the new name to the req.body.name
{
    "name" : "The new name you want"
}

## Delete
To delete a user, pass the user_id of the user as the parameter to the endpoint
e.g https://hng-task2-backend-nyoj.onrender.com/api/user_id

