
var v=2
var v="2"
var v='2'
var v=true
var v={p1:2,p2:"2"}
var v=[1,2,3,4]


var myObjet = { p1: 'a', p2: 'b'};
var result='\n';
for (var prop in myObjet) {
	result += '속성명: ' + prop + ', 값: ' + myObjet[prop] + '\n';
}


