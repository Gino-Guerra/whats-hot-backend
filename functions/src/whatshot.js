import { db } from "./connectDb.js";

const coll = db.collection('game-card')



// export function deleteForm(){

// }

export async function getAllGames(req, res){
    const gameColl = await coll.get()
    const games = gameColl.docs.map(doc => ({id: doc.id, ...doc.data()}))
    res.send(games)

}

export async function createGame(req, res){
    let newGame = req.body
    newGame.UserID = req.local.id
    await coll.add(newGame)

}