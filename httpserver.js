var http = require('http')
var through = require('through')


var server = http.createServer(function(req,res){
	if (req.method == 'POST')
	{
		req.pipe(through(function(buf){
			this.queue(buf.toString().toUpperCase())
			})).pipe(res)
	}
	else
		res.write('need POST ')
	res.end(null)
}).listen(Number(process.argv[2]))
