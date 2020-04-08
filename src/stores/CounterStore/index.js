import { observable, action } from 'mobx';

class CounterStore {
   @observable count = 0

   @action.bound
   incrementCounter() {
      if(isNaN(this.count)){
            this.count = 0;
            this.count = this.count + 1;
        }
        else {
            this.count = this.count + 1;
        }
   }

   @action.bound
   decrementCounter() {
        if(isNaN(this.count)){
            this.count = 0;
            this.count = this.count - 1;
        }
        else {
            this.count = this.count - 1;
        }
   }
   
   @action.bound
   onChangeCount(event){
        let value = event.target.value;
        this.count = value;
    }
}

const counterStore = new CounterStore();
export default counterStore;
