var buf = new Buffer('H', 'utf8');
//console.log(buf);
console.log(buf.toString());
//console.log(buf.toJSON());
//console.log(buf[2]);

buf.write('woaslkdb');
console.log(buf.toString());