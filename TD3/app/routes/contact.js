import Route from '@ember/routing/route';
import EmberObject,{computed,get,set} from '@ember/object';

let Contact = EmberObject.extend({
	datas: null,
	contact:computed('datas.@each.isDeleted',function(){
				return this.datas.filter((item=>!item.get('isDeleted')))
			})
});

export default Route.extend({
	model(){
		return Contact.create({
			datas:this.store.findAll('contact')
		});
	},
	actions:{
		delete(contact){
			contact.deleteRecord();
			contact.get('isDeleted');
			contact.save();
		},
		edit(contact){
			contact.set('nom','Meurdrac');
			contact.set('prenom','Téo');
			contact.set('email','teomeurdrac@hotmail.fr');
		}
	}
});
