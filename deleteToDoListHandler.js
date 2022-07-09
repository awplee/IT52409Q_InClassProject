function deleteToDoListHandler( request, response ) {
   if ( request.method === "DELETE" ) {
      const uri = request.originalUrl.split( "/" ) 
      if ( uri[1] === "ALL" ) { 
         toDoList = []
         response.setHeader( "content-type", "application/json" )
         response.status( 200 ).send( JSON.stringify( { "200" : task, "status" : "Cleared", "body" : {} }, null, "" ) ) 
      } else {
         const tobeDeleted = request.body.tobeDeleted
         if ( toDoList.has( tobeDeleted.toLowerCase() ) ) { 
            const newToDoList = toDoList.filter( task => task.toLowerCase() ==! tobeDeleted.toLowerCase() )
            toDoList = newToDoList
            const returnCode = { "task" : tobeDeleted, "status" : "Deleted", "lastUpdatedDate" : new Date() }
            response.setHeader( "content-type", "application/json" )
            response.status( 200 ).send( JSON.stringify( { "200" : task, "body" : returnCode }, null, "" ) ) 
         } else {
            response.setHeader( "content-type", "application/json" )
            response.status( 400 ).send( JSON.stringify( { "400" : task, "body" : "Task not found" }, null, "" ) ) 
         }
      }
   } else  {
      response.setHeader( "content-type", "application/json" )
      response.status( 400 ).send( JSON.stringify( { "code" : 400, "body" : "Bad Request" }, null, "" ) )
   }
}
