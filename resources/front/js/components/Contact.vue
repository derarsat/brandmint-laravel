<template>
    <div class="container py-20" id="contact">
        <h1 class="font-semibold text-5xl text-primary">Let's talk</h1>
        <p class="text-xl font-medium mt-2">We'd love to hear from you!</p>
        <p>Drop us a line, Give us a call or pass by our office at Antwork.</p>

        <form action="" class="grid grid-cols-2 gap-6">
            <input type="text" placeholder="Full name*">
            <input type="text" placeholder="Email address*">
            <input class="col-span-2" type="text" placeholder="Subjict*">
            <textarea class="col-span-2" placeholder="Drop us a message here..."></textarea>
            <div class="col-span-2 flex justify-end">
                <button class="border-2 border-black rounded-md px-8 py-3 text-lg font-semibold hover:bg-black hover:text-white ">Send</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "Contact"
}
</script>

<style scoped>
form{
    @apply pt-12
}
input, textarea {
    @apply rounded-md px-6 py-4 outline-none placeholder-black;
    background: #ededed;
}
textarea{
    @apply h-40
}
</style>
