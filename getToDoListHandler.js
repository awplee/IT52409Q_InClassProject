function getToDoListHandler( request, response ) {
   if ( request.method === "GET" ) {
      const uri = request.originalUrl.split( "/" ) 
      const returnCode = { "todoList" : toDoList, "lastUpdatedDate" : new Date() }
      response.setHeader( "content-type", "application/json" )
      response.status( 200 ).send( JSON.stringify( { "200" : task, "body" : returnCode }, null, "" ) ) 
   } else  {
      response.setHeader( "content-type", "application/json" )
      response.status( 400 ).send( JSON.stringify( { "code" : 400, "body" : "Bad Request" }, null, "" ) )
   }
}
