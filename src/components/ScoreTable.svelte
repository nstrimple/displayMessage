<script>
export let scores;
let data = [];

const stringParse = (string) => {
    let val = string.split(':');
    let team1 = val[0]
    let team1Score = val[1].trim().split(' ')[0]
    let team2 = val[1].split('and')[1].trim()
    let team2Score = val[2].trim().split(' ')[0]
    let status = val[3].trim()
    return {team1, team2, team1Score, team2Score, status}
}

scores.map(el => (
    data.push(stringParse(el))
))
console.log(data)
</script>

<style>
    td, th {
        border-bottom: 1px black solid;
        padding: 0 20px 0 20px;
        margin-right: 0;
        margin-left: 0;
    }
    tr:hover {
        background-color:cyan;
    }
    table {
        border-collapse: collapse;
    }
    th {
        padding-bottom: 5px;
    }
    .wrap {
        width: 85%;
        display: flex;
        justify-content: center;
        margin: 10px 0 0 0;
    }
</style>

<div class="wrap">
    <table>
        <tr>
            <th>
                Home Team
            </th>
            <th>
                Away Team
            </th>
            <th>
                Status
            </th>
        </tr>
        {#each data as game}
        <tr>
            <td>{`${game.team1}: ${game.team1Score}`}</td>
            <td>{`${game.team2}: ${game.team2Score}`}</td>
            <td>{game.status}</td>
        </tr>
        {/each}
    </table>
</div>