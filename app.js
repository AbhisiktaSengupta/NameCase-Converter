const myInput = document.querySelector('.name-input')
const myBtn = document.querySelector('.btn')
const camelContainer = document.querySelector('.camelCase')
const pascalContainer = document.querySelector('.pascalCase')
const snakeContainer = document.querySelector('.snakeCase')
const SSnakeContainer = document.querySelector('.SSnakeCase')
const kebabContainer = document.querySelector('.kebabCase')
const SKebabContainer = document.querySelector('.SKebabCase')
let myName = ""
myBtn.addEventListener('click',()=>{
    myName = myInput.value;
    camelContainer.innerHTML = toCamelCase(myName)
    pascalContainer.innerHTML = toPascalCase(myName)
    snakeContainer.innerHTML = toSnakeCase(myName)
    SSnakeContainer.innerHTML = toScreamingSnakeCase(myName)
    kebabContainer.innerHTML = toKebabCase(myName)
    SKebabContainer.innerHTML = toScreamingKebabCase(myName)
})

function toCamelCase(str)
{
   str =str.replace(/[0-9-._]/g,"")
   str = str.toLowerCase().trim()
   let modifiedStr=""
   let splitStr=str.split(" ");
   splitStr.forEach((name,index)=>{
        if(index==0 && splitStr.length!=1)
        {
            modifiedStr=name;
        }
        else{
            modifiedStr+=name[0].toUpperCase()+name.slice(1,name.length)
        }
   })

   return modifiedStr
   
}
function toKebabCase(str)
{
   str =str.replace(/[0-9-._]/g,"")
   str = str.toLowerCase().trim()
   let modifiedStr=""
   let splitStr=str.split(" ");
   splitStr.forEach((name,index)=>{
        if(index!=(splitStr.length-1))
        {
            modifiedStr+=name+"-";
        }
        else{
            
            modifiedStr+=name;
        }
   })

   return modifiedStr
}
function toPascalCase(str)
{
   str =str.replace(/[0-9-._]/g,"")
   str = str.toLowerCase().trim()
   let modifiedStr=""
   let splitStr=str.split(" ");
   splitStr.forEach((name,index)=>{
            modifiedStr+=name[0].toUpperCase()+name.slice(1,name.length)
   })

   return modifiedStr

}
function toSnakeCase(str)
{
   str =str.replace(/[0-9-._]/g,"")
   str = str.toLowerCase().trim()
   let modifiedStr=""
   let splitStr=str.split(" ");
   splitStr.forEach((name,index)=>{
        if(index!=(splitStr.length-1))
        {
            modifiedStr+=name+"_";
        }
        else{
            
            modifiedStr+=name;
        }
   })
   return modifiedStr
}
function toScreamingKebabCase(str)
{
   str =str.replace(/[0-9-._]/g,"")
   str = str.toUpperCase().trim()
   let modifiedStr=str.replaceAll(" ","-");
   return modifiedStr;
}
function toScreamingSnakeCase(str)
{
   str =str.replace(/[0-9-._]/g,"")
   str = str.toUpperCase().trim()
   let modifiedStr=str.replaceAll(" ","_");
   return modifiedStr;
}