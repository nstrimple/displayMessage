<script>
    export let message;
    export let time;
</script>

<style>
    .message-card {
        width: 55%;
        border: 1px solid black;
        padding: 0 5px 0 5px;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
    .message-card:hover {
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
        <div class='message-card'>
            <p>
                {message}
            </p>
            <p class="time">
                {`sent at: ${time}`}
            </p>
        </div>
    </div>
{/if}