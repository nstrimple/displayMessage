<script>
    export let message;
    export let time;
</script>

<style>
    .messCard {
        width: 55%;
        border: 1px solid black;
        padding: 0 5px 0 5px;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
    }
    .messCard:hover {
        scale: 1.15;
        background-color: aqua;
    }
    .wrap {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 10px 0 0 0;
    }
    .time {
        font-size: small;
        text-align: right;
    }
</style>

{#if message !== 'No games have started yet or nothing has changed'}
    <div class="wrap">
        <div class='messCard'>
            <p>
                {message}
            </p>
            <p class="time">
                {`sent at: ${time}`}
            </p>
        </div>
    </div>
{/if}