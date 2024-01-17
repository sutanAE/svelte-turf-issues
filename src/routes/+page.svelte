<script lang='ts'>

    export let data;


    const { buffer} = data
</script>

<div>
    Buffering:
</div>
<div>
    {JSON.stringify(buffer, null, 4)}
</div>