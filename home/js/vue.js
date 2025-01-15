const app = Vue.createApp({
  data() {
   return {
     images: [
       {name: 'Picture 1', url: 'home/md (1).png'},
       {name: 'Picture 2', url: 'home/pfp (1).png'},
       {name: 'Picture 3', url: 'home/sg (1).png'}
     ]
   }
  }
 })
 app.mount('#app')
