function postToDoListHandler( request, response ) {
   if ( request.method === "POST" ) {
      const uri = request.originalUrl.split( "/" ) 
      const newTask = request.body.newTask
      if ( toDoList.has( newItem.toLocaleLowerCase() ) ) {
         response.setHeader( "content-type", "application/json" )
         response.status( 400 ).send( JSON.stringify( { "400" : task, "body" : "Duplicated task" }, null, "" ) ) 
      } else { 
         toDoList.push( newTask )
         const returnCode = { "task" : newItem, status: "Added", "lastUpdatedDate" : new Date() }
         response.setHeader( "content-type", "application/json" )
         response.status( 200 ).send( JSON.stringify( { "200" : task, "body" : returnCode }, null, "" ) ) 
      } 
   } else {
      response.setHeader( "content-type", "application/json" )
      response.status( 400 ).send( JSON.stringify( { "400" : task, "body" : "Bad Request" }, null, "" ) ) 
   }

}
