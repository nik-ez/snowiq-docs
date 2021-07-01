---
layout: page
title: Login and Navigation
author: EastBanc Technologies
name: EastBanc Technologies
email: contact@eastbanctech.com
parent: Driver App
nav_order: 2
platform: true
---
<section id="Login-and-Navigation" markdown="1">
# Login and Navigation

<section id="Login" markdown="1">
## Login<a name="Login"></a>
The login screen below allows Driver users to enter the SNOWiQ Driver Application (DA). Click the appropriate 'Login' button to be re-routed to enter the assigned username and password for the application.

<img src="/image/driver/login.png"/>

Once logged into the DA, Drivers will see the screen below. The screens display two types of Drivers logged in, a County Driver and a Contractor. The difference is identified in the status of the Driver. The County Driver, on the left, has a status of 'Ready' whereas the Contractor, on the right, is in 'Standby.' The circle next to the profile picture indicates that this a County Driver and a square indicates a Contractor. These icons are color coded to match the status.

<img src="/image/driver/login1-ios.png" class="ios"/>
<img src="/image/driver/login1-android.png" class="android"/>

<img src="/image/driver/login2-ios.png" class="ios"/>
<img src="/image/driver/login2-android.png" class="android"/>

</section>

<section id="Navigation" markdown="1">
## Navigation<a name="-Navigation"></a>
The diagram below highlights basic navigation controls and map elements of the Driver App.

<img src="/image/driver/navigation-ios.png" class="ios"/>
<img src="/image/driver/navigation-android.png" class="android"/>

1. User Profile Picture, Name, and Status – pressing on the Profile picture opens the Navigation Drawer 
2. Weather widget – automatically updated based on location
3. Status bar  
   * If it is on active assignment, as seen in this diagram, the status bar includes the route number or address being worked, number of miles on the assignment, percentage completed, status of the assignment, and progress bar

   * If it is in between assignments or no assignments, the system will display the appropriate notification to the user. 
5. Map – based on the TBD
6. "My current location on the map" pin
7. Button to create Road Hazards
8. Navigate button to get directions to the location from Google Maps
9. Another Driver marker in near-real time with current status color coded 
10. Route segments assigned to the Driver to work on. Routes are represented by different types of route segments: 
    * Emergency - red
    * Primary - blue
    * Neighborhood - orange
  
12. Breadcrumbs (green colored) appear in near-real time over the Route that the Driver has worked on already 
13. Road hazard marker
14. Button "Find my location on the map"

<section id="Navigation-Drawer" markdown="1">
### Navigation Drawer<a name="-Navigation-Drawer"></a>
Users can open the Navigation Drawer by pressing the User Profile picture icon as specified in the diagram above. The panel is divided into three sections:

<section id="User-Profile-Details" markdown="1">
#### User Profile Details<a name="-User-Profile-details"></a>
This section lists the profile details of logged in driver. To edit them, the user can press 'Profile' in the section below.
</section>

<section id="Supervisor-Details" markdown="1">
#### Supervisor Details<a name="Supervisor-details"></a>
Each driver has a Supervisor they report to and who assigns them work. The Supervisor's name and phone number are listed in this section, with the ability to contact the Supervisor directly from within the app, by pressing the green phone icon.
</section>

<section id="Operations-Menu" markdown="1">
#### Operations Menu<a name="Operations"></a>
The Operations Menu as seen above is for a Driver without any active or future assignments. If a driver receives an assignment or needs to complete an active assignment, an actionable option will be added to the menu, which can be seen here.

<img src="/image/driver/navigation-drawer-ios.png" class="ios"/>
<img src="/image/driver/navigation-drawer-android.png" class="android"/>
</section>
</section>

<section id="Assignments" markdown="1">
### Assignments<a name="Assignments"></a>
A user can press on 'Assignments' to view the Active Assignment, if there is one, any Future Assignments in the queue, and the History of assignments the driver worked on.

<img src="/image/driver/assignments-ios.png" class="ios"/>
<img src="/image/driver/assignments-android.png" class="android"/>
</section>

<section id="Profile" markdown="1">
### Profile<a name="Profile"></a>
A user can press on 'Profile' to edit their name, phone number, and User Picture.

<img src="/image/driver/profile-ios.png" class="ios"/>
<img src="/image/driver/profile-android.png" class="android"/>
</section>

<section id="Salt-Management" markdown="1">
### Salt Management<a name="Salt-Management"></a>
A Driver user can press on 'Salt Management' to record how much salt was loaded and returned by pressing 'Add Salt Usage Info.' The historical usage is saved in the list, as seen below. 

<img src="/image/driver/salt-management-ios.png" class="ios"/>
<img src="/image/driver/salt-management-android.png" class="android"/>
</section>

<section id="About" markdown="1">
### About<a name="-About"></a>
Displays the current version of the app.
</section>

<section id="Logout" markdown="1">
### Logout<a name="-Logout"></a>
A user must logout at the end of each workday.
</section>

</section>
</section>
