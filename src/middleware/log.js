const log = store => next => action => {
    console.log(store)
    console.log(next)
    console.log(action)

    next()
}

export default log