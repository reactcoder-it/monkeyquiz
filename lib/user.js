import bcrypt from "bcryptjs"
import { db } from "../db/connection"

export async function createUser({ name, email, password }) {
  const cryptoPassword = await bcrypt.hashSync(password, 10)

  const user = {
    name,
    email,
    password: cryptoPassword,
    createdAt: Date.now(),
  }

  const result = await db.collection("users").insert(user)

  return result.ops[0]
}

export async function findUser({ email }) {
  return await db.collection("users").findOne({ email })
}

export async function validatePassword(user, inputPassword) {
  const passwordsMatch = await bcrypt.compareSync(inputPassword, user.password)
  return passwordsMatch
}
