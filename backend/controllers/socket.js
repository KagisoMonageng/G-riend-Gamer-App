
class Socket{

    constructor(socket){
		this.io = socket;
	}

    events()
    {
        this.io.on('connection', async (socket)=>{
            
        })
    }

    getARoom(user1, user2){
        return 'privateRooom' + user1.name + 'And' + user2.name;
    }



}

module.exports = Socket;