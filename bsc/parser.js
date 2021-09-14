const testFolder = '../Bumoon-asset/bsc/assets';
const fs = require('fs');

var obj = {
    tokenlist: []
};

var temp = [];

var json = JSON.stringify(obj);

fs.readdirSync(testFolder).forEach(file => {
    temp.push(file);
});

for (var i = 0; i < temp.length; i++) {

    var v = JSON.parse(fs.readFileSync(testFolder + '/' + temp[i] + '/info.json', 'utf8'));
   
    obj.tokenlist.push({
        'symbol' : v['symbol'],
        'name' : v['name'],
        'address' : v['id'],
    })
}
console.log(obj)
var json = JSON.stringify(obj);
fs.writeFile('tokenlist.json', json, 'utf8',function(a){
    
});