# hng-backend-2

# slack username
Gbotex_Latex

# Endpoint


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
To get a user pass the property "name" i.e req.body.name
e.g "name" : "Gbotex_Latex"
you'll be provided with an object
{
     "_id" : user _id here,
    "name" : "Gbotex_latex"
}
## Update
To update a user, pass an object parameter with the ffw properties
{
    "id" : The _id of the already created user,
    "name" : "The new name you want"
}

## Delete
To delete a user, pass the _id of the user as the parameter i.e  req.body.id

{
    "id" : The _id of the user
}
