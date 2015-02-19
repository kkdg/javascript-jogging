


var a = {}

a.b = 'hi';

a.b.c = 'hmm';
a.c = 'this?';

a.d = {};
a.d.e = 'now?';

var b = [];

a.d.e.f = new Array();
a.d.e.f = 'if..';


console.log(a);
console.log(b);
console.log(a.f);
