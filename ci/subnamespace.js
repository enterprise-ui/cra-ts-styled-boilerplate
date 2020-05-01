const branch = process.argv.pop();
console.log(branch === 'master' ? '' : '-' + branch);