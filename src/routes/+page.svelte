<script>
  import moment from "moment";
  import ScoreTable from "../components/ScoreTable.svelte";
  import MessageCard from "../components/MessageCard.svelte";

  export const getScores = async () => {
    const date = moment();
    const today = date.format("YYYY-MM-DD");
    const url = `https://tourneybot-9a502-default-rtdb.firebaseio.com/${today}/lastMessage.json`;

    const response = await fetch(url);
    const data = await response.json();

    let dataString;
    for (const d in data) {
      dataString = JSON.parse(data[d].body);
    }

    return dataString;
  };
  export const getMessages = async () => {
    const url =
      "https://tourneybot-9a502-default-rtdb.firebaseio.com/messageLog.json";

    const response = await fetch(url);
    const data = await response.json();
    const fin = [];

    for (const el in data) {
      const e = data[el];
      let message = e.body;
      let time = new Date(e.time);
      fin.push({ body: message, time: time });
    }
    function compare(a, b) {
      if (a.time < b.time) {
        return 1;
      }
      if (a.time > b.time) {
        return -1;
      }
      return 0;
    }
    fin.sort(compare);
    return fin;
  };
</script>

<h1>Welcome to Nelson's Score Site</h1>
<h3>Last Recorded Scores</h3>
{#await getScores() then data}
  <ScoreTable scores={data} />
{/await}
<h3>Message Section</h3>
{#await getMessages() then messages}
  {#each messages as mes}
    <MessageCard message = {mes.body} time={mes.time} />
  {/each}
{/await}