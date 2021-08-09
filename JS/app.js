'use strict';
let workHours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm']
//helper function
  function getRandom (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


let container = document.getElementById('render');
let tableEl = document.createElement('table');
container.appendChild(tableEl);
let branches = [];

function Branches(name,minCust,maxCust,avg,){
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avg = avg;
    this.total = 0;
   
    this.numberOfCustomerEachHour = [];
    this.cookiesSoldEachHour = [];
    branches.push(this);
} 
Branches.prototype.fillNumberOfCustomerEachHour = function(){
    for (let i = 0; i < workHours.length; i++) {
        this.numberOfCustomerEachHour.push(getRandom(21,65))

    }
}

Branches.prototype.fillHourlyCookiesSold = function(){
    for(let i =0 ; i<workHours.length;i++){
        this.cookiesSoldEachHour.push (Math.floor( (this.numberOfCustomerEachHour[i]) * (this.avg)));
        this.total += this.cookiesSoldEachHour[i];
        
    }
}

let seattle = new Branches('seattle',23,65,6.2)
seattle.fillNumberOfCustomerEachHour();
seattle.fillHourlyCookiesSold();


let tokyo = new Branches('tokyo',23,65,6.2)
tokyo.fillNumberOfCustomerEachHour();
tokyo.fillHourlyCookiesSold();


let Dubai = new Branches('Dubai',23,65,6.2)
Dubai.fillNumberOfCustomerEachHour();
Dubai.fillHourlyCookiesSold();


let Paris = new Branches('Paris',23,65,6.2)
Paris.fillNumberOfCustomerEachHour();
Paris.fillHourlyCookiesSold();


let Lima = new Branches('Lima',23,65,6.2)
Lima.fillNumberOfCustomerEachHour();
Lima.fillHourlyCookiesSold();

console.log(branches);


// render 
function tableHeader(){
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    
    let thElz = document.createElement('th');
    trEl.appendChild(thElz);
    for (let i = 0; i < workHours.length; i++) {
        let thEl = document.createElement('th');
        trEl.appendChild(thEl);
        thEl.textContent = workHours[i];     
        
    }
    let thEl = document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent = 'Daily Location Total';   
    
}

tableHeader();

function tableFooter(){
    let tr = document.createElement('tr');
    tableEl.appendChild(tr);
    let td2 = document.createElement('td')
    tr.appendChild(td2)
    td2.textContent = 'hourly total';
    let totalOfTotal =0;
    
    for (let i = 0; i <workHours.length; i++) {
        let hourlyTotal = 0;
        for (let r = 0; r < branches.length; r++) {
            hourlyTotal+=branches[r].cookiesSoldEachHour[i];
        }
        totalOfTotal+=hourlyTotal;
        
        let td1 = document.createElement('td')
        tr.appendChild (td1)
        td1.textContent = hourlyTotal;
    }
    let td4 = document.createElement('td')
    tr.appendChild(td4)
    td4.textContent = totalOfTotal;
    
}

Branches.prototype.render = function () {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    let td = document.createElement('td');
    trEl.appendChild(td);
    td.textContent = this.name;
    
    
    for (let i = 0; i < this.cookiesSoldEachHour.length; i++) {
        let tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        tdEl.textContent = this.cookiesSoldEachHour[i];
        
    }
    let totalOfTotal1 =0;
    let tdEl1 = document.createElement('td');
    trEl.appendChild(tdEl1);  
    tdEl1.textContent = this.total;
    totalOfTotal1+=this.total;
    
    
    
}



for (let i = 0; i < branches.length; i++) {
    branches[i].render();
}
tableFooter();


