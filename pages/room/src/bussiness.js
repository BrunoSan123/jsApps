class Bussiness{
    constructor({room,media,view}){
        this.room =room,
        this.media =media,
        this.view=view

        this.currentStream ={}

        

    }

    static initialize(deps){
        const instance = new Bussiness(deps)
        return instance._init()
    }

    async _init(){
        this.currentStream= await this.media.getCamera()
        this.addVideostream('video01')

    }

    addVideostream(userId,stream=this.currentStream){
        const isCurrentId =false
        this.view.renderVideo({
            userId,
            stream,
            isCurrentId
        })
    }
}