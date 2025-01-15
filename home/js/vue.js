const app = Vue.createApp({
  data() {
   return {
     manyFoods: [
       {name: 'moodeng', url: 'md.png'},
       {name: 'me', url: 'pfp.png'},
       {name: 'kbbq', url: 'sg.svg'},
     ]
   }
  }
 })
 
 app.mount('#app')
