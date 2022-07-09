function putToDoListHandler( request, response ) {
   if ( request.method === "PUT" ) {
      const uri = request.originalUrl.split( "/" )
      const oldTask = request.body.oldTask
      const newTask = request.body.newTask
      if ( toDoList.has( oldTask.toLowerCase() ) ) { 
         const newToDoList = toDoList.filter( task => task.toLowerCase() ==! oldTask.toLowerCase() )
         toDoList = newToDoList
         toDoList.push( newTask )
         const returnCode = { "task" : tobeDeleted, "status" : "Deleted", "lastUpdatedDate" : new Date() }
         response.setHeader( "content-type", "application/json" )
         response.status( 200 ).send( JSON.stringify( { "200" : task, "body" : returnCode }, null, "" ) ) 
      } else {
         response.setHeader( "content-type", "application/json" )
         response.status( 400 ).send( JSON.stringify( { "400" : task, "body" : "Task not found" }, null, "" ) ) 
      }
   } else  {
      response.setHeader( "content-type", "application/json" )
      response.status( 400 ).send( JSON.stringify( { "code" : 400, "body" : "Bad Request" }, null, "" ) )
   }
}
