import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return [
      {num:"client",id:"TD0"},
      {num:"client.details",id:"TD1"}
      ]
  }
});
