
import  cors  from "cors"

import express from "express"

import { onRequest } from "firebase-functions/v2/https"

// import { createUser, login } from "./src/users.js"

// import { isAuthenticated } from "./src/middleware.js"

import { createGame, getAllGames } from "./src/whatshot.js"

import * as admin from 'firebase-admin';

admin.initializeApp;

const app = express()

app.use(cors())

app.use(express.json())


// app.delete("/:id", )

app.get("/", getAllGames)

app.post("/", createGame)

export const api = onRequest(app)
