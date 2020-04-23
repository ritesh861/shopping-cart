var Product=require('../models/product');

var mongoose =require('mongoose');

//had to use the below connection function for mongoose. it is diff from the video (to avoid error).
mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true ,useUnifiedTopology: true});
var products=[

new Product({
  imagePath:'https://cdn.ndtv.com/tech/gadgets/league_of_legends.jpg',
  title:'Thumbnail label',
  description:"random description here",
  price:12
}),
new Product({
  imagePath:'https://woodsboroworld.com/wp-content/uploads/2018/04/fortnite.jpeg',
  title:'Thumbnail label',
  description: 'random description here',
  price:10
}),
new Product({
  imagePath:'https://res.cloudinary.com/jerrick/image/upload/q_auto,w_720/w0e4q2axcxsvyl3kt5tq.png',
  title:'Thumbnail label',
  description: 'random description here',
  price:10
}),
new Product({
  imagePath:'https://i0.wp.com/www.tizenhelp.com/wp-content/uploads/2018/12/bastion-game-xbox-one-powerup21214008821..jpg?resize=640%2C319&ssl=1',
  title:'Thumbnail label',
  description: 'random description here',
  price:10
}),
new Product({
  imagePath:'https://hampansi-cdn.sirv.com/WP_gamewarrior.net/2019/01/top-game-rise-of-angels-1.png?scale.width=1024&scale.height=1024',
  title:'Thumbnail label',
  description: 'random description here',
  price:10
}),
new Product({
  imagePath:'https://www.dailydot.com/wp-content/uploads/2019/08/best_action_adventure_games_devil_may_cry_5-1024x512.jpg',
  title:'Thumbnail label',
  description: 'random description here',
  price:10
})];
var done=0;
for(var i=0;i<products.length;i++)
{
  products[i].save(function(err,result){
    done++;
    if(done==products.length)
    {
      exit();
    }
  });
}
function exit() {
  mongoose.disconnect();

}
