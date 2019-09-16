import { Component } from '@angular/core';
import { Contacts, Contact, ContactName, ContactField } from '@ionic-native/contacts/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: [ 'home.page.scss' ],
  providers: [Contacts]
})
export class HomePage {

  myContacts: Contact[] = [];

  //init vars
  ContactList: any;
  abc:any;
  newArray:any;
  checkBoxList:any;
  data:any;
  LoadingView: boolean = true;
  data1: any;

  data2: any;

  constructor(private contacts: Contacts, private callNumber: CallNumber, private sms: SMS, private toastCtrl: ToastController) { 

    //load ctcts

            //var fieldTypes: ContactFieldType[] = ["phoneNumbers", "displayName"];
		    var options = {
		      fields: ['displayName', 'name' , 'emails', 'addresses'],
		      filter: '',
		      multiple: true,
		      hasPhoneNumber: true
		    };

		   //this.contacts.find(['*'], options).then((contacts: Contact[]) => {
		    this.contacts.find(['displayName', 'name' , 'emails', 'addresses'], options).then((contacts: Contact[]) => {
		    this.myContacts = contacts;

		    
		    //let data1 =JSON.stringify({contacts})
		    //let data2 =JSON.parse({data1})
		    //alert(data2['phoneNumbers[0].value']);
		      alert(JSON.stringify(contacts[0]));
		    
    });

  }

  loadContactsFromOnline() {
/*
  //iterate through those contacts which are from online and add an isCheckedFlag

	       this.http.get('http://xxxx.com/xxxxxx/xxxx/getAllContact.php')
	            .map(res => res.json())
	            .subscribe(data => {
	                    this.abc=data.ContactList;
		        }),
		    err => {
		        console.log("Oops!");
		    } 

    	for (let entry of ContactList){
			
			this.checkBoxList = [
							      {
							        value:"entry.phoneNumbers[0].value",
							        isChecked:false
							      }
							   ];
		} */
  }


  combineContactsAndDisplay() {

  }


}