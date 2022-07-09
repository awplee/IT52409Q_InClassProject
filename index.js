#!/usr/bin/env node
/** 
   Programme Code:   IT524120P
   Programme Name:   PC in Stack Web Development
   Student Id:       214083118 
   Student Name:     Lee Wai Po
   Submission Date:  9 July 2022
   Course Work:      IT524049Q Serverless Applications Development on Cloud Module (C)   
   Script Id:        index.js
   Description:      The implementation of the driver for the ToDoList application.
                     It is the entry point for the application; and then
                     routes users requests, processes the requests, and 
                      generates appropriate response to the users finally.
   Requirement:      
   1. An endpoint that can add an item to the list which is not allowed to duplicate and is case sensitive. (5 marks)
   2. An endpoint that can list all items from the todo list. (5 marks)
   3. An endpoint that can remove one of the items in the list. (5 marks)
   4. An endpoint that can remove all items in the lists. (5 marks)
   5. All endpoints should be applied with a suitable request method (GET, POST, PUT, DELETE) [Note: you may require updating the serverless configuration file] (5 marks)

*/
"use strict"

const express = require( "express" )
const url = require( "url" )

const toDoList = []
const getToDoListHandler = require( "./getToDoListHandler" ) 
const postToDoListHandler = require( "./postToDoListHandler" )
const putToDoListHandler = require( "./putToDoListHandler" )
const deleteToDoListHandler = require( "./deleteToDoListHandler")

const app = express(), PORT = 3000

app.use( "*", function( request, response, context ) {

   switch ( request.method ) {
      case "GET" :
         getToDoListHandler( request, response )
         break
      case "POST" :
         postToDoListHandler( request, response )
         break
      case "PUT" :
         putToDoListHandler( request, response )
         break
      case "DELETE" :
         deleteToDoListHandler( request, response )
         break
      default : 
         response.setHeader( "content-type", "application/json" )
         response.status( 400 ).send( JSON.stringify( { "code" : 400, "body" : "Bad Request" }, null, "" ) )
      }

 } )

app.listen( PORT, () => console.log( `Express server currently running on port ${ PORT }` ) )
