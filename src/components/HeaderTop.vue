<template>
    <header class="header">
        <a href="/" class="logo">
            <h1 class="logo-h1">书城</h1>
        </a>
        <ul class="header-right">
            <li class="header-right-item"></li>
            <li class="header-right-item"></li>
        </ul>
    </header>
</template>
<style lang="scss" scoped>
    .header {
        display: flex;
        background-color: #ffffff;
        padding: .1rem;
        &>.logo {
            flex: 0 0 2rem;
            overflow: hidden;
            height: 0.5rem;
            background-image: url('http://dummyimage.com/200x50&text=logo');
            background-size: contain;
            text-indent: -999px;
        }
        &-right {
            display: flex;
            flex: 1 0 auto;
            justify-content: flex-end;
            &-item {
                display: inline-flex;
                margin-left: 0.1rem;
                border-radius: 50%;
                width: 0.5rem;
                height: 0.5rem;
                background-color: #eeeeee;
            }
        }
    }
</style>
