console.log('JS OK');
console.log('Vue Ok', Vue);

Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
        mails: []
    },

    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(res => {
                const mail = res.data.response;
                this.mails.push(mail);
            })
        }
    }
});