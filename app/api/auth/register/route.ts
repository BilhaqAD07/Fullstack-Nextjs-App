import connect from "@/utils/db"

export const POST = async ( request: any ) => {
    const {name, email, password} = await request.json()

    await connect()

    try{

    }catch(err) {
        
    }
}