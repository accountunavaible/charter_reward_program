
export default async function getAllUsersData(userId) {
  const res = await fetch(`http://127.0.0.1:3001/user/${userId}`)
  return await res.json()
}