var extract = require("geodash-extract");

module.exports = function(paths, a, b)
{
  var diff = [];
  if((a !== undefined) && (b !== undefined))
  {
    for(var i = 0; i < paths.length; i++)
    {
      var path = paths[i];
      var text_a = JSON.stringify(extract(path, a, ""));
      var text_b = JSON.stringify(extract(path, b, ""));
      if(text_a != text_b)
      {
        diff.push(path);
      }
    }
  }
  else if((a !== undefined) && (b === undefined))
  {
    diff = paths;
  }
  else if((a === undefined) && (b !== undefined))
  {
    diff = paths;
  }
  else
  {
    diff = [];
  }
  return diff;
};
