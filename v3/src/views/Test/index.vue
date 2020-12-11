<template>
    <div id="test">

        <p>{{ test.count }}</p>
        <p><button @click="test.addCount">Add</button></p>
        <p>
            {{message}}
        </p>
        <p v-if="test.count<=10">1111111111111</p>
        <p v-else-if="test.count>=5">3333333333333333</p>
        <p v-else>2222222222222</p>
		<svg-icon iconClass="console" className="console" />
    </div>
</template>
<script>
    import { reactive, ref } from "vue";
    import sha1 from "js-sha1";
    export default {
        setup() {
            const test = reactive({
                count: 0,
                addCount: () => {
                    console.dir(this);
                    test.count += 2;
                }
            });
            return {
                test,
                message: sha1("123456")
            };
        }
    };
</script>

<style lang="scss" scoped></style>
