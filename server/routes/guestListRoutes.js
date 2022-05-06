const guestList = require('../model/guestListSchema')


const saveGuests = (app) => {
    app.post('/save_guests' , async (req , res) => {
        try {

        let {firstname , lastname, time, food, coming} = req.body
        if(firstname === "" || lastname === "" || time === "" || food === "" || coming === ""){
            res.send(400)
        }

    let guest = new guestList ({
        firstname , lastname, time, food, coming
    })
    const guestSaved = await guest.save() 
    
    res.send({message:"Details succesfully saved", guestSaved})
} catch (error) {
    console.error("post error",error)
    res.send({message:"post error"}).status(401)
}

    })

    app.get('/get_guestList' , async (req , res) => {

        try {
            const findGuestList = await guestList.find()
            res.send(findGuestList)
                    } catch (error) {
            console.log('error', error)
        }
    })

    app.delete('/delete_guest/:id' , async (req , res)  =>  {
        try{
            const {id} = req.params                    
            const guestToDelete = await guestList.deleteOne({_id : id})
            res.send({message: "Successfully deleted", guestToDelete})
        }catch(err){
            console.log(err);
            res.sendStatus(501)
        }
    })

    app.put('/update_guest/:id' , async (req ,res) =>  {
        const {id} = req.params
        const {firstname , lastname, time, food, coming} = req.body
        try{
            const foundGuest = await guestList.findOneAndUpdate({_id: `${id}`} , {firstname , lastname, time, food, coming})
            res.send({message: "Update Succesfully", foundGuest})
        }catch(err){
            console.log(err)
        }
    } )

} 


module.exports = {saveGuests}