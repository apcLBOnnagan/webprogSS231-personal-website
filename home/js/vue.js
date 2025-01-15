const app3 = Vue.createApp({
    data() {
      return {
        itemName: null,
        itemNumber: null,
        itemImportant: false,
        shoppingList: [
          { name: 'n/a', number: 5, important: false, found: false },
          { name: 'b/a', number: 1, important: false, found: false },
          { name: 'n/a', number: 1, important: true, found: true }
        ]
      }
    },
    methods: {
      addItem(){
        let item = {
          name: this.itemName,
          number: this.itemNumber,
          important: this.itemImportant,
          found: false
        }
        this.shoppingList.push(item)
        this.itemName = null
        this.itemNumber = null  
        this.itemImportant = false
      }
    }
  })
 app3.mount('#app3')