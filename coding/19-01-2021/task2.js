const vaibhav = 
{
    name : 'Vaibhav',
    age : 23,
    email : 'info@vaibhavmaheshwari.com',
    number : '9558413998'
};
const renil = 
{
    name : 'Renil',
    age : 23,
    email : 'renilsoni52@gmail.com',
    number : '8200385941'
};
const rajan = 
{
    name : 'Rajan',
    age : 22,
    email : 'rajansoni1277@gmail.com',
    number : '9998423736'
};

const data = [];
data.push(vaibhav);
data.push(renil);
data.push(rajan);

console.log(data);

localStorage.setItem('data',JSON.stringify(data));

let arr = [];

arr = JSON.parse(localStorage.getItem("data") || "[]");
console.log(arr);

document.write("<table border='1'>");
for (const x of arr) 
{
    document.write(`<tr><td>${x.name}</td><td>${x.age}</td><td>${x.email}</td><td>${x.number}</td></tr>`);
}
document.write("</table>");