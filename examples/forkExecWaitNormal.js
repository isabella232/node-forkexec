/* See README.md */
var forkExecWait = require('../lib/forkexec').forkExecWait;
forkExecWait({
    'argv': [ 'echo', 'hello', 'world' ]
}, function (err, info) {
	console.log(info);
});
