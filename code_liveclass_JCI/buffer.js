var buf = new Buffer('Hello!', 'utf8');
console.log(buf);
console.log(buf[2]);
console.log(buf.toJSON());
buf.write("Wo");
console.log(buf.toString());
