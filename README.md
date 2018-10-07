# # vue-nigeria-states-lgas
  
  
  [![NPM](https://nodei.co/npm/vue-nigeria-states-lgas.png?downloads=true)](https://nodei.co/npm/vue-nigeria-states-lgas/)
  
  [![npm version](https://badge.fury.io/js/vue-nigeria-states-lgas.svg)](https://badge.fury.io/js/vue-nigeria-states-lgas)
  
  Vue library that lists Nigeria states and LGAs
  
  ### Installation
  
  ``` Javascript
  
  npm install vue-nigeria-states-lgas
  
  ```
  
  ### Usage
  In the component where you want use Nigeria states and Lgas
  ```javascript

  import StatesLgas from 'vue-nigeria-states-lgas/dist/vue-naija-states-lgas.esm.js'

  ```
  Then register the component locally:
  
  ```javascript
  
  <script>
     import StatesLgas from 'vue-nigeria-states-lgas/dist/vue-naija-states-lgas.esm.js'
     
  
     exports default {
        ...
        
        components: { StatesLgas }
        
        ... 
     }
  </script>
  
```
  Listen directly to events (selected `state` and `lga`) emitted from
  `StatesLgas` component using `v-on:state="getState"`
  to get the state and `v-on:lga="getLga"`
  
  On the `getState` and `getLga` methods, you now have the seleted `state` and `lga`.
 
   ```javascript 
   
   <script>
      import StatesLgas from 'vue-nigeria-states-lgas/dist/vue-naija-states-lgas.esm.js'
      
      exports default {
         ...
         
         components: { StatesLgas },
         
         methods: {
             getState(state) {
                 alert(state)
             },
             
             getLga(lga) {
                  alert(lga)
              }
         }
         
         ... 
      }
   </script>
 ```