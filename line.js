var split = require('split')
var through =  require('through')
var index = 1

process.stdin.pipe(split()).pipe(through(function(line){
	if (index%2 == 1)
		this.queue(line.toString().toLowerCase()+'\n')
	else
		this.queue(line.toString().toUpperCase()+'\n')
	index+=1
	})).pipe(process.stdout)
