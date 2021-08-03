const bcrypt=require('bcrypt')

const hashPass=async function(pass) {
    var password=await bcrypt.hash(pass,10)
    console.log(password)
    return password
}

module.exports={
    hashPass
}