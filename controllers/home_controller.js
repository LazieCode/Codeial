module.exports.home = function(req,res){
  return res.render('home', {
      title: "Home",
      
  });  
};

module.exports.cutText = function(req,res){
    return res.end("<h1>Express is up and running in Codeial</h1>");
};