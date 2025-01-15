const app = Vue.createApp({
  data() {
   return {
     images: [
       {name: 'Picture 1', url: 'home/md.png'},
       {name: 'Picture 2', url: 'home/pfp.png'},
       {name: 'Picture 3', url: 'home/sg.png'}
     ]
   }
  }
 })
 app.mount('#app')
