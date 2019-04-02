import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		return this.store.createRecord('contact',{
			nom:'José'
		});
	},
	actions: {
		addContact(contact){
			alert(contact.nom);
			var self=this;
			if (!contact.nom){
				contact.save().then(
					()=>{self.transitionTo('contact');}
				);
			}
		}
	}
});
