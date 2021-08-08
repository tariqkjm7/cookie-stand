'use strict';
let workHours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm']
//helper function
  function getRandom (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

let seattle = 	{
    name : 'seattle' ,
   minCust : 23,
   maxCust : 65,
    avg : 6.3,
    numberOfCustomerEachHour: [],
    cookiesSoldEachHour : [],

    hourlyCustomer : function (){
        
        for (let i = 0; i < workHours.length; i++) {
    this.numberOfCustomerEachHour.push(getRandom(this.minCust,this.maxCust))
    
}
    },



    hourlyCookiesSold : function (){
    
        for(let i =0 ; i<workHours.length;i++){
            
            this.cookiesSoldEachHour.push (Math.floor( (this.numberOfCustomerEachHour[i]) * (this.avg)));
            

        }    
        
    },

    // render function
    render : function(){
        document.write = this.name;
        let container = document.getElementById('render')
        let h2El = document.createElement('h2')
        container.appendChild(h2El)
        h2El.textContent = this.name;
        let ulEl = document.createElement('ul')
        container.appendChild(ulEl)
        for (let i = 0; i < workHours.length; i++) {
            let liEl = document.createElement('li')
            ulEl.appendChild(liEl)
            liEl.textContent = workHours[i]+"  :  "+this.cookiesSoldEachHour[i]+"    cookies";
        }


    }
}

seattle.hourlyCustomer();

seattle.hourlyCookiesSold()
console.log(seattle);
seattle.render();

let tokyo = 	{
    name : 'tokyo',
    minCust : 3,
    maxCust : 24,
     avg : 1.2,
     numberOfCustomerEachHour: [],
     cookiesSoldEachHour : [],
 
     hourlyCustomer : function (){
         
         for (let i = 0; i < workHours.length; i++) {
     this.numberOfCustomerEachHour.push(getRandom(this.minCust,this.maxCust))
     
 }
     },
 
 
 
     hourlyCookiesSold : function (){
     
         for(let i =0 ; i<workHours.length;i++){
             
            this.cookiesSoldEachHour.push (Math.floor( (this.numberOfCustomerEachHour[i]) * (this.avg)));
             
 
         }    
         
     },

     // render function
     render : function(){
         let container = document.getElementById('render')
         let h2El = document.createElement('h2')
         container.appendChild(h2El)
         h2El.textContent = this.name;
         let ulEl = document.createElement('ul')
         container.appendChild(ulEl)
         for (let i = 0; i < workHours.length; i++) {
             let liEl = document.createElement('li')
             ulEl.appendChild(liEl)
             liEl.textContent = workHours[i]+"  :  "+this.cookiesSoldEachHour[i]+"    cookies";
         }
 
 
     }
 }

 tokyo.hourlyCustomer();

 tokyo.hourlyCookiesSold()
 tokyo.render();



 let Dubai = 	{
    name : 'Dubai' ,
   minCust : 11,
   maxCust : 38,
    avg : 3.7,
    numberOfCustomerEachHour: [],
    cookiesSoldEachHour : [],

    hourlyCustomer : function (){
        
        for (let i = 0; i < workHours.length; i++) {
    this.numberOfCustomerEachHour.push(getRandom(this.minCust,this.maxCust))
    
}
    },



    hourlyCookiesSold : function (){
    
        for(let i =0 ; i<workHours.length;i++){
            
            this.cookiesSoldEachHour.push (Math.floor( (this.numberOfCustomerEachHour[i]) * (this.avg)));
            

        }    
        
    },

    // render function
    render : function(){
        document.write = this.name;
        let container = document.getElementById('render')
        let h2El = document.createElement('h2')
        container.appendChild(h2El)
        h2El.textContent = this.name;
        let ulEl = document.createElement('ul')
        container.appendChild(ulEl)
        for (let i = 0; i < workHours.length; i++) {
            let liEl = document.createElement('li')
            ulEl.appendChild(liEl)
            liEl.textContent = workHours[i]+"  :  "+this.cookiesSoldEachHour[i]+"    cookies";
        }


    }
}
Dubai.hourlyCustomer();

Dubai.hourlyCookiesSold()
Dubai.render();

let Paris = 	{
    name : 'Paris' ,
   minCust : 20,
   maxCust : 38,
    avg : 2.3,
    numberOfCustomerEachHour: [],
    cookiesSoldEachHour : [],

    hourlyCustomer : function (){
        
        for (let i = 0; i < workHours.length; i++) {
    this.numberOfCustomerEachHour.push(getRandom(this.minCust,this.maxCust))
    
}
    },



    hourlyCookiesSold : function (){
    
        for(let i =0 ; i<workHours.length;i++){
            
            this.cookiesSoldEachHour.push (Math.floor( (this.numberOfCustomerEachHour[i]) * (this.avg)));
            

        }    
        
    },

    // render function
    render : function(){
        document.write = this.name;
        let container = document.getElementById('render')
        let h2El = document.createElement('h2')
        container.appendChild(h2El)
        h2El.textContent = this.name;
        let ulEl = document.createElement('ul')
        container.appendChild(ulEl)
        for (let i = 0; i < workHours.length; i++) {
            let liEl = document.createElement('li')
            ulEl.appendChild(liEl)
            liEl.textContent = workHours[i]+"  :  "+this.cookiesSoldEachHour[i]+"    cookies";
        }


    }
}
Paris.hourlyCustomer();

Paris.hourlyCookiesSold()
Paris.render();

let Lima = 	{
    name : 'Lima' ,
   minCust : 2,
   maxCust : 16,
    avg : 4.6,
    numberOfCustomerEachHour: [],
    cookiesSoldEachHour : [],

    hourlyCustomer : function (){
        
        for (let i = 0; i < workHours.length; i++) {
    this.numberOfCustomerEachHour.push(getRandom(this.minCust,this.maxCust))
    
}
    },



    hourlyCookiesSold : function (){
    
        for(let i =0 ; i<workHours.length;i++){
            
            this.cookiesSoldEachHour.push (Math.floor( (this.numberOfCustomerEachHour[i]) * (this.avg)));
            

        }    
        
    },

    // render function
    render : function(){
        document.write = this.name;
        let container = document.getElementById('render')
        let h2El = document.createElement('h2')
        container.appendChild(h2El)
        h2El.textContent = this.name;
        let ulEl = document.createElement('ul')
        container.appendChild(ulEl)
        for (let i = 0; i < workHours.length; i++) {
            let liEl = document.createElement('li')
            ulEl.appendChild(liEl)
            liEl.textContent = workHours[i]+"  :  "+this.cookiesSoldEachHour[i]+"    cookies";
        }


    }
}
Lima.hourlyCustomer();

Lima.hourlyCookiesSold()
Lima.render();


