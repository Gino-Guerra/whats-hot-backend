import { db } from "./connectDb.js";

const coll = db.collection('game-card');

export async function getAllGames(req, res) {
  try {
    const gameColl = await coll.get();
    const games = gameColl.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.send(games);
  } catch (error) {
    console.error('Error getting all games:', error);
    res.status(500).send('Internal Server Error');
  }
}

export async function createGame(req, res) {
  try {
    let newGame = req.body;
    
    await coll.add(newGame);

    // Call getAllGames to send the updated list of games
    const updatedGames = await getAllGames(req, res);
    res.send(updatedGames);
  } catch (error) {
    console.error('Error creating game:', error);
    res.status(500).send('Internal Server Error');
  }
}