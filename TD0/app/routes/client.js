import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return {nom:"Téo",details:"Details du client ..."};
  }
});
