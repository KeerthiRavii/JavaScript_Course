const TodoArr=JSON.parse(localStorage.getItem('TodoArr')) || [{name:'keerthi', dueDate:'2004-03-29 '} ,{name:'manoj',dueDate:' 2000-06-28'}];

renderTodoList();

function renderTodoList(){
let todoHtml='';
for(let i=0;i<TodoArr.length;i++){
 const todoObj=TodoArr[i];
 // const name=todoObj.name;
 // const dueDate=todoObj.dueDate;
 const {name,dueDate}=todoObj;
 const html=`
 <div> ${name} </div>
 <div> ${dueDate} </div>
  <button onclick="TodoArr.splice(${i},1);
 renderTodoList();
 " class="cs-del"> Delete </button>
 `;
 //console.log(todoHtml);
 todoHtml+=html;
}
// console.log(todoHtml);
document.querySelector('.js-todoHtml').innerHTML=todoHtml;

}

function display(){
 const ipEle=document.querySelector('.js-ip');
 const ipList=ipEle.value;
 const dateInput=document.querySelector('.js-date-input');
 const dueDate=dateInput.value;
 // store the values in the array
 TodoArr.push({name:ipList,dueDate:dueDate});
 // to make the array empty in the beginning
 ipEle.value='';
 renderTodoList();
// console.log(TodoArr);
saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('TodoArr', JSON.stringify(TodoArr));
}

