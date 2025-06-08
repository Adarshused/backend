class ApiError extends Error { 

    constructor(
        StatusCode,
        message = "Something went Wrong",
        errors = [],
        stack = ""
    ) {
         super(message)
         this.StatusCode = StatusCode
         this.message = message
         this.success = false
         this.errors = errors

         if(stack) this.stack = stack
         else Error.captureStackTrace(this, this.stack)
    }
}

export {ApiError}