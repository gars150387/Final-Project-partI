const url = "https://assets.breatheco.de/apis/fake/contact/";
const getState = ({ getStore, setStore, getActiosn }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			getContactFromFB: async ()=>{
				try{
					const getContacts = firebase.firebase().collection("contacts");
					const response = await getContacts.get();

					response.forEach(contact => {
						getStore({
						contacsFB: [...getStore().contactsFB, {...contact.data(), id: contact.id}]
					});
				});
				console.log("data from Firebase", getStore().contactsFB);
			}catch (e) {
				console.log(e);
			}
		},
		addContactFB: (name,phone,email,address)=>{
			firebase.firebase().collection("contacts")
		},
		addContact: (nmae,phone,email,address){
			
		}
		};

export default getState;
