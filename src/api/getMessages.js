export const get = async () => {
    const url = 'https://tourneybot-9a502-default-rtdb.firebaseio.com/messageLog.json'

    const response = await fetch(url)
    const data = await response.json()
    const fin = []

    for (const el in data) {
        fin.push(data[el])
    }

    return fin
}