var pkg = require('./package.json');

exports.getName = function()
{
   return pkg.name
}

exports.getVersion = function()
{
   return pkg.version
}

