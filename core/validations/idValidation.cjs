
function isIdEmpty(id){
    return id.length == 0 ? true :false
}

function isIdANumber(id){
   return  typeof id === "number" ?true:false
}

module.exports = {isIdEmpty,isIdANumber}