


var a = {}

a.b = 'hi';

a.b.c = 'hmm';
a.c = 'this?';

a.d = {};
a.d.e = 'now?';

var b = [];

a.d.f = new Array();
a.d.f = [1,2,3,4];
a.d.a = [];
a.d.a[1] = 'now?!';
a.d.a[0] = 'this..';
console.log(a);
console.log(b);
console.log(a.f);
console.log(a.d.a[1]);
