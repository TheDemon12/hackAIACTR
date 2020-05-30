# Smart IV

<img src = "/images/logo_round.png" height = "200" width="200" align="left" hspace="10" vspace="10">

An IoT based automatic alerting device that consists of laser and a precise Light Dependent Resistor to detect the laser which is employed to constantly monitor the fluid level. When the fluid level is below the critical level which will be defined by laser, it will alert the patient through buzzer, nurses, doctors and the central control room using web app.The application allows the entry of a new patient, viewing profile facilities and deleting a node assignment to a patient.The application's objective is to become a helping hand to the healthcare workers to monitor the drip system connected to several patients.

<br>

**Link for web application**

Web App: [Smart-IV Server](http://www.thedemon12.xyz)

*-Boxes with **Red shadow** on DRIP STATUS activity represents that IV bottle is about to get emptied.*

*-Boxes with **Green shadow** on DRIP STATUS activity represents that IV bottle still contains adequate amount of fluid.*

**Hardware Components Used**

1.NodeMCU

2.Light dependent resistor(LDR)

3.Laser

4.Buzzer

5.Power supply

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
<tr>
  
  
**Implementation:**

•	Using IoT, we can solve the problem of 'empty bottles’. We’re using LDR sensor which is connected to NodeMcu.

•	LDR will help us detect if the fluid is below a critical level.

•	The NodeMCU will then send their data to the firebase.

•	Buzzer will even notify the patient about the fluid level.

•	The data from the firebase will then be accessed by the web application.

•	The nurse and doctors will be notified about the fluid level using web application.

<img src = "/images/smartiv-git.PNG" height = "200" width="800" align="center" hspace="10" vspace="10">

The cost of the hardware product is estimated to be not more than Rs. 400 which makes it highly economical to be employed in the hospitals.
