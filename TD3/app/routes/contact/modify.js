import Route from '@ember/routing/route';
import {copy} from '@ember/object/internals';
import {get,set} from '@ember/object';


export default Route.extend({
	templateName:'contact/add',
	model(params){
		let contact=this.store.findRecord('contact',params.contact_id);
		return {
			id:contact_id,
			firstname:contact.firstname,
			lastname:contact.lastname,
			email:contact.email
		};
	},
	actions:{
		save(contact){
			contact.save().then(()=>{
				this.transitionTo("contact");
			});
		}
	}
});
