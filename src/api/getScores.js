import moment from "moment"

export const get = async () => {
    const date = moment()
    const today = date.format('YYYY-MM-DD')
    const url = `https://tourneybot-9a502-default-rtdb.firebaseio.com/${today}/lastMessage.json`

    const response = await fetch(url)
    const data = await response.json()

    let dataString
    for (const d in data) {
        dataString = JSON.parse(data[d].body)
    }
    
    return dataString
}