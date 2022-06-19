var fn = document.getElementById('fn'); 
var mn = document.getElementById('mn');
var ln = document.getElementById('ln');

let uname = fn.value + " " + mn.value+ " " + ln.value;

var age = document.getElementById('age');
var gen = document.getElementById('gen');

function Display(){
    document.getElementById('main').style.display = 'none';
    document.getElementById('output').style.display = 'block';

    document.getElementById('name').innerHTML  = uname;
    document.getElementById('age').innerHTML  = age.value;
    document.getElementById('gender').value  = gender.options[gender.selectedIndex].text;
}

/*I'm having trouble resolving this so i'll leave this for nows*/