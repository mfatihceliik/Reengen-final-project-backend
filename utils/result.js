class Result {
    constructor(message, success){
        this.message = message
        this.success = success
    }
}

class ErrorResult extends Result {
    constructor(message) {
        super(message, false)
    }
}

class SuccessResult extends Result {
    constructor(data, message) {
        super(message, true)
        this.data = data
    }
}

class SuccessLoginResult extends Result {
    constructor(data, token, message){
        super(message, true)
        this.data = data
        this.token = token
    }
}

module.exports = {
    ErrorResult,
    SuccessResult,
    SuccessLoginResult
}