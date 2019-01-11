var buf = new Buffer.from('Hello', 'utf8');
buf = Buffer.alloc(10);
buf.write('woaslkdb');
buf.write('Hello');

console.log(buf.toString());

