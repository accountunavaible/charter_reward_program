export default async function LogIn(formData) {
  const res = await fetch('http://127.0.0.1:3001/user', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });

  return await res.json()
}
