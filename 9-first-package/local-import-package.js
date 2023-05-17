// to install the first package run npm init -y
// it installs package.json module/dependency
// then run another command npm i lodash to install more dependencies/libraries
// to install bootstrap dependencies run npm i bootstrap , eventhough we do not use it
// so we cal locally install js packages using npm i <package name>
// to view the dependencies we have installed, check the package.json file and see the dependencies object to view all the dependencies

const _ = require('lodash') //lodash module and the variable used to store the lodash module is _
const items=[1,[2,[3,[4]]]]
const newItems=_.flattenDeep(items)   // The _.flattenDeep() method is used to completely flatten nested arrays. It does this recursively.
console.log(newItems)