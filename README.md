# Smart IV
(IV stands for intravenous fluids)
<img src = "/images/logo_round.png" height = "200" width="200" align="left" hspace="10" vspace="10">

An IoT based automatic alerting device that consists of laser and a precise Light Dependent Resistor to detect the laser which is employed to constantly monitor the fluid level. When the fluid level is below the critical level which will be defined by laser, it will alert the patient through buzzer, nurses, doctors and the central control room using web app.The application allows the entry of a new patient, viewing profile facilities and deleting a node assignment to a patient.The application's objective is to become a helping hand to the healthcare workers to monitor the drip system connected to several patients.

<br>

**Link for web application**

Web App: [Smart-IV Server](http://www.thedemon12.xyz)

*-Boxes with **Red shadow** on DRIP STATUS activity represents that IV bottle is about to get emptied.*

*-Boxes with **Green shadow** on DRIP STATUS activity represents that IV bottle still contains adequate amount of fluid.*

**Advantages of Smart-IV**

In time of emergencies like Covid-19,our solution has numerous advantages.

• Reduced work (as staff will not have to monitor IV bottles manually.)

• Reduced hazards (as inefficient manual monitoring of IV bottles can lead to hazards like reverse flow of blood or immediate deaths.)

• Increased accuracy in medical industry

• Highly economic IoT device (as it was build in not more than Rs 400 by us.)

• Usage of Realtime database leads to no refreshing of pages on web application.Hence, application becomes easy to use.



**Hardware Components Used**

1.NodeMCU

2.Light dependent resistor(LDR)

3.Laser

4.Buzzer

5.Power supply

  
**Implementation:**

•	Using IoT, we can solve the problem of 'empty bottles’. We’re using LDR sensor which is connected to NodeMcu.

•	LDR will help us detect if the fluid is below a critical level.

•	The NodeMCU will then send their data to the firebase.

•	Buzzer will even notify the patient about the fluid level.

•	The data from the firebase will then be accessed by the web application.

•	The nurse and doctors will be notified about the fluid level using web application.

<img src = "/images/smartiv-git.PNG" height = "200" width="800" align="center" hspace="10" vspace="10">

The cost of the hardware product is estimated to be not more than Rs. 400 which makes it highly economical to be employed in the hospitals.

**IoT Device Setup**

<table align="center">

 <tr>
 	<td>
   	<img src="/images/hardware/1.PNG" height="180" width="350">
		</td>
		<td><img src="/images/hardware/2.PNG" height="180" width="350">
		</td>
 </tr>
	<tr>
		<td><img src="/images/hardware/3.PNG" height="180" width="350">
		</td>
		<td><img src="/images/hardware/4.PNG" height="180" width="350">
		</td>
	</tr>
</table>

**Working of web application**

With the new entry of a patient is created using web application, a record is generated with a unique patientID which is stored in a firebase-database which will help hospitals in managing records in more manageable manner. Similarly, whenever a "drip entry" is created using the application, the corresponding data is stored in active drip database. The creation of drip entry assigns a IoT device with the highest priority and we are good to go. And the application consists of monitoring drip status and delete entry options too. Monitoring drip status will allow hospital staff to keep track of the IV bottles connected to the patients.Detach drip option will remove the details of patient from active drip database. Delete entry option can be used when patient gets discharged and patient can only be discharged when any drip isn't attached to the patient. Delete entry option will remove the entries from active drip database and patient database hence move all the details to the archive database for future use.
  
<table align="center">
	<tr>
		<td>
			Login Page
		</td>
		<td>
			Home Page(Options:1)
		</td>
 </tr>
 <tr>
 	<td>
   	<img src="/images/webserver/login.PNG" height="180" width="350">
		</td>
		<td><img src="/images/webserver/options1.PNG" height="180" width="350">
		</td>
 </tr>
 <tr>
 <td>
			Home Page(options:2)
		</td>
		<td>
			Add new entry Page
		</td>
	</tr>
	<tr>
		<td><img src="/images/webserver/options2.PNG" height="180" width="350">
		</td>
		<td><img src="/images/webserver/add_new.PNG" height="180" width="350">
		</td>
	</tr>
<tr>
 <td>
			Attach drip Page
		</td>
		<td>
			Successful attached drip Page
		</td>
	</tr>
	<tr>
		<td><img src="/images/webserver/attach1.PNG" height="180" width="350">
		</td>
		<td><img src="/images/webserver/attach2.PNG" height="180" width="350">
		</td>
	</tr>
<tr>
 <td> 	              Detach drip Page
		</td>
	 <td> 	              Successful detach drip Page
		</td>
	</tr>
	<tr>
		<td><img src="/images/webserver/detach1.PNG" height="180" width="350">
		</td>
		<td><img src="/images/webserver/detach2.PNG" height="180" width="350">
		</td>
	</tr>
<tr>
 <td> 	             Check for assistance Page
		</td>
	 <td> 	      Patient discharge Page
		</td>
	</tr>
	<tr>
		<td><img src="/images/webserver/show-status.PNG" height="180" width="350">
		</td>
		<td><img src="/images/webserver/discharge1.PNG" height="180" width="350">
		</td>
	</tr>
	<tr>
 <td> 	             Successful patient discharge Page
		</td>
	 <td> 	      Unsuccessful patient discharge Page
		</td>
	</tr>
	<tr>
		<td><img src="/images/webserver/discharge3.PNG" height="180" width="350">
		</td>
		<td><img src="/images/webserver/discharge2.PNG" height="180" width="350">
		</td>
	</tr>
</table>

**Technology Stack**

 - Internet of Things
 - Embedded c
 - Firebase
 - Firebase Real Time Database
 - HTML,CSS
 - Javascript
 - AWS Server - Apache 2
 
 **Dependencies**

1.Firebase

2.Internet connection

**Future Aspects**

1.This setup can also be used to measure the drip rate using the same Laser - LDR principle which is needed to be set by nurse according to the value calculated using formula. If the drip rate changes in the course of transfusion, then it will notify the staff which in turn can take the necessary steps.

2.Additionally, the QR/Barcode Scanner included in the app can be used to check the validity of the drip bottles present in hospitals. QR/Barcode can even be used to manage the database of supply of IV fluids in the hospital.

3.We'll build mobile application for more efficiency.

**According to the Bloomberg healthiest country index, India has slipped down to the position 120 out of 169 countries. As the dire need of drip system is evident in most medical facilities, the usage of Smart-IV is limitless.In order to outperform our current potential in future emergencies it's important to use technologically advanced solution in the medical industry.**
