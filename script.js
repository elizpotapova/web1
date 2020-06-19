let table= document.getElementById('tb2');
let sel1= document.getElementById('sel1');
let sel2= document.getElementById('sel2');
let sel3= document.getElementById('sel3');
let sel4= document.getElementById('sel4');
let card1= document.getElementById('card1');
let items=document.querySelector('#pagination');

function getMessage(){
let obXhr = new XMLHttpRequest();
table.innerHTML = '';
obXhr.open('GET', `http://exam-2020-1-api.std-400.ist.mospolytech.ru/api/data1`);

obXhr.send();

obXhr.onreadystatechange = function(){
if(obXhr.readyState != 4) return;
if(obXhr.status != 200){
alert('Сервер недоступен ' + obXhr.status + ' ' + obXhr.statusText);
return;
}

if(obXhr.response){
let notesOnPage =5;
let table= document.getElementById('tb2');
let pagination=document.querySelector('#pagination');
let result = JSON.parse(obXhr.response);
let tab;
let i=0;
let items=[];

for (let i=1;i<=4;i++){
let but = document.createElement('button');
but.innerHTML=i;
pagination.appendChild(but);
items.push(but);
}

result.sort(function(a,b){
return b.rate-a.rate
});
for(let key in result){
console.log(result[key].rate)
if (result[key].rate>80){
if(i==20){break;}
else{i++;}
}
}
showPage(items[0]);
for (let item of items){
item.addEventListener('click',function(){
showPage(this);
});
}
function showPage(item){//это начало функции заполнения страниц
let active = document.querySelector('#pagination li.active')
if(active){
active.classList.remove('active');
}
item.classList.add('active');
let pageNum = +item.innerHTML;
let start = (pageNum-1)*notesOnPage;
let end = start + notesOnPage;
let notes = result.slice(start,end);
console.log(notes);
table.innerHTML='';
let tab;
for (let note in notes){
tab = document.createElement('tr');

tab.innerHTML =`

<tr>
<td>${notes[note].name}</td>
<td>${notes[note].typeObject}</td>
<td>${notes[note].address}</td>
<td>☆${notes[note].rate}</td>
<button class="buttab">выбрать</button>
</tr>

`
table.append(tab);
}

let button_choose=document.getElementsByClassName('buttab');//вот тут начинается функция по клику на кнопку выбрать
for (let element of button_choose){
element.onclick = () => {

let obXhr = new XMLHttpRequest();
obXhr.open('GET', `fail.json`);

obXhr.send();

obXhr.onreadystatechange = function(){
if(obXhr.readyState != 4) return;
if(obXhr.status != 200){
alert('Сервер недоступен ' + obXhr.status + ' ' + obXhr.statusText);
return;
}

if(obXhr.response){
let card1= document.getElementById('card1');
let result1 = JSON.parse(obXhr.response);
let ca1;
for (let i=0;i<result1.length;i++){
console.log(result1[i])
ca1= document.createElement('div');

ca1.innerHTML =`

<div class="card" style="background-color:#DEB887;" >
<div class="card-body">
<div class="container">
<img src="${result1[i].image}" class="imgmen">
<div>${result1[i].name}</div>
<div>${result1[i].description}</div>
<button type="button" class="btn btn-light"><span class="minus">-</span></button>
<input type="text" value="0" size="20" class="inpmen"/>
<button type="button" class="btn btn-light"><span class="plus">+</span></button>
</div>
</div>
</div>
</div>


`
card1.append(ca1);

}

}
}
}
}//тут заканчивается цикл перебора всех кнопок выбрать











}//конец функции показа страниц
/*tab = document.createElement('tr');

tab.innerHTML =`

<tr>
<td>${result[key].name}</td>
<td>${result[key].typeObject}</td>
<td>${result[key].address}</td>
<td>☆${result[key].rate}</td>
<button class="buttab">выбрать</button>
</tr>

`
table.append(tab);
}
}
*/
let select1;
let okrug = result.map(Area =>{return Area.admArea;});
var uniqueArray =[];
var count=0;
var found=false;
for (let i=0;i<okrug.length;i++){
for (let y=0;y<uniqueArray.length;y++){
if (okrug[i]==uniqueArray[y]){
found=true;
}
}
count++;
if (count ==1 &&
 
found==false){
uniqueArray.push(okrug[i]);
}
count=0;
found=false;
}
console.log(uniqueArray);
for(let key in uniqueArray){
console.log(uniqueArray[key]);

select1= document.createElement('option');

select1.innerHTML =`

<select>
<option value="${uniqueArray[key]}">${uniqueArray[key]}</option>
</select>

`
sel1.append(select1);
}
let select2;
let dist = result.map(District =>{return District.district;});
var uniqueArray1 =[];
var count=0;
var found=false;
for (let i=0;i<dist.length;i++){
for (let y=0;y<uniqueArray1.length;y++){
if (dist[i]==uniqueArray1[y]){
found=true;
}
}
count++;
if (count ==1 && found==false){
uniqueArray1.push(dist[i]);
}
count=0;
found=false;
}
console.log(uniqueArray1);
for(let key in uniqueArray1){
console.log(uniqueArray1[key]);

select2= document.createElement('option');

select2.innerHTML =`

<select>
<option value="${uniqueArray1[key]}">${uniqueArray1[key]}</option>
</select>

`
sel2.append(select2);
}
let select3;
let type = result.map(Type =>{return Type.typeObject;});
var uniqueArray2 =[];
var count=0;
var found=false;
for (let i=0;i<type.length;i++){
for (let y=0;y<uniqueArray2.length;y++){
if (type[i]==uniqueArray2[y]){
found=true;
}
}
count++;
if (count ==1 && found==false){
uniqueArray2.push(type[i]);
}
count=0;
found=false;
}
console.log(uniqueArray2);
for(let key in uniqueArray2){
console.log(uniqueArray2[key]);

select3= document.createElement('option');

select3.innerHTML =`

<select>
<option value="${uniqueArray2[key]}">${uniqueArray2[key]}</option>
</select>

`
sel3.append(select3);
}
let select4;
let soc = result.map(Soc =>{return Soc.socialPrivileges;});
var uniqueArray3 =[];
var count=0;
var found=false;
for (let i=0;i<soc.length;i++){
for (let y=0;y<uniqueArray3.length;y++){
if (soc[i]==uniqueArray3[y]){
found=true;
}
}
count++;
if (count ==1 && found==false){
uniqueArray3.push(soc[i]);
}
count=0;
found=false;
}
console.log(uniqueArray3);
for(let key in uniqueArray3){
console.log(uniqueArray3[key]);

select4= document.createElement('option');

select4.innerHTML =`

<select>
<option value="${uniqueArray3[key]}">${uniqueArray3[key]}</option>
</select>

`
sel4.append(select4);
}

}

}

}

document.addEventListener('DOMContentLoaded',getMessage());
 

