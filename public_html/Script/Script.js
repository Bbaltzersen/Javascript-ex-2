/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var student = [];



function create() {
//    var fn = document.getElementById("fn").value;
//    var ln = document.getElementById("ln").value;
//    var em = document.getElementById("em").value;
//    var ph = document.getElementById("ph").value;
    var f1 = document.getElementById("f1").elements;
    var fn = f1[0].value;
    var ln = f1[1].value;
    var em = f1[2].value;
    var ph = f1[3].value;  
    
    
    document.getElementById("d1").innerHTML = "Firstname: "+ fn;
    document.getElementById("d2").innerHTML = "Lastname:  "+ln;
    document.getElementById("d3").innerHTML = "Email:     "+em;
    document.getElementById("d4").innerHTML = "Phone:     "+ph; 
}

function divChangeFunction(a,b) {
    var total =+ a;
    var send = "Click here!: "+b+" clicked! result = "+total;
    
    document.getElementById("d1").innerHTML = "Click here!: "+send;
    document.getElementById("d2").innerHTML = "Click here!  "+send;
    document.getElementById("d3").innerHTML = "Click here!  "+send;
    document.getElementById("d4").innerHTML = "Click here!  "+send; 
    
}

function adminStud(Addstudent, callback) {
    callback(Addstudent);
}

function logItem(Lstudent){
    console.log("Id: "+Lstudent[0].value+" name: "+Lstudent[1].value+" classroom: "+Lstudent[2].value);
}

function RegisterItem(Astudent) {
    student.push(Astudent);
}

function goStudent() {
    var f1 = document.getElementById("f1").elements;
    var students = f1;
    adminStud(students, logItem)
    adminStud(students, RegisterItem)
    
}

