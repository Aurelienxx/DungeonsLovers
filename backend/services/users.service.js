import db from '../config/db.js'

export const createUserInDb = (userData, callback) => {
  const { FirstName, LastName, password, Username } = userData

  db.query(
    "INSERT INTO users (UserId, LastName, FirstName, password, Username) VALUES (0, ?, ?, ?, ?)",
    [LastName, FirstName, password, Username],
    (err, result) => {
      callback(err, result)
    }
  )
}
