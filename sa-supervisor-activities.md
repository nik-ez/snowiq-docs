---
layout: page
title: Supervisor Activities
author: EastBanc Technologies
name: EastBanc Technologies
email: contact@eastbanctech.com
parent: Supervisor App
nav_order: 2
platform: true
---
<section id="Supervisor-Activities" markdown="1">
# Supervisor Activities<a name="Supervisor-Assignments"></a>

<section id="Creating-New-Assignments" markdown="1">
## Creating New Assignments<a name="Creating-New-Assignments"></a>

There are three ways of creating new assignments within the SA: 
1. From the Routes tab by pressing 'Assign new drivers'. 
2. From the Driver Details panel by pressing 'Add Task'.  
3. From the Map Monitoring view on either the Routes or Drivers

<section id="Assigning-New-Drivers" markdown="1">
### Assigning New Drivers<a name="Assigning-New-Drivers"></a>

A Supervisor can assign a new driver to a route, by following the steps below:

* From 'Routes Details' panel, tap 'Assign new drivers' as shown below

 
<img src="/image/supervisor/assigning-new-drivers-android.png" class="android"/>
<img src="/image/supervisor/assigning-new-drivers-ios.png" class="ios"/>

* In the 'Assign Drivers' dialogue complete the following:
  * Select type of Activity
  * Specify whether the assignment is Single-Pass or Multi-Pass  (switch the toggle on for Multi-Pass)
  * Specify whether it is a priority task (switch the toggle on to indicate yes)
  * Type a note to the driver
  * Select driver by either searching for a driver name in the search bar or pick from the drivers available based on the selected filters: Depot, defaulted to the Supervisor's Depot, and Driver Type: County or Contractor

* Tap 'Assign'

<img src="/image/supervisor/assigning-new-drivers1-android.png" class="android"/>
<img src="/image/supervisor/assigning-new-drivers1-ios.png" class="ios"/>

* This will add the assignment to the Route Details with the name of the Driver and the Assignment status of 'Pending' to indicate that the Assignment has been sent to the Driver but not accepted yet. It also adds the Assignment to the Future list of Assignments for the Driver, as can be seen in the next section. It also prompts the Driver in the Driver App (DA) to accept the Assignment
</section>

<section id="Adding-Tasks" markdown="1">
### Adding Tasks<a name="Adding-Tasks"></a>

A Supervisor can add a new task to a Driver, by preforming the following the steps below:

* From the Driver Details panel, tap 'Add Task'

<img src="/image/supervisor/adding-tasks-android.png" class="android"/>
<img src="/image/supervisor/adding-tasks-ios.png" class="ios"/>

* In the 'Create Driver Assignment' dialogue complete the following:
  * Select type of Activity
  * Specify whether the assignment is Single-Pass or Multi-Pass (switch the toggle on for Multi-Pass)
  * Specify wheter it is a priority task (switch the toggle on to indicate yes: this moves the assignment to the top of the queue of the Future list of assignments for the driver)
  * Type a note to the driver
  * Select the route by either searching for a route number or pick from the routes available based on the selected Depot filter Depot, which defaults to the Supervisor's Depot
* Tap 'Assign'

<img src="/image/supervisor/adding-tasks1-android.png" class="android"/>
<img src="/image/supervisor/adding-tasks1-ios.png" class="ios"/>

* This will add the assignment to the Future list for the Driver, as seen below, with status of 'Pending' to indicate that the assignment has been sent to the Driver but not accepted yet. The system will prompt the Driver in the Driver App (DA) to accept the Assignment

<img src="/image/supervisor/adding-tasks2-android.png" class="android"/>
<img src="/image/supervisor/adding-tasks2-ios.png" class="ios"/>
</section>

<section id="Creating-Address-Specific-Assignment" markdown="1">
### Creating Address Specific Assignment<a name="-Creating-Address-Specific-Assignment"></a>

A Supervisor can create an Assignment related to a specific address by following the steps below:

* From the Map Monitoring view (either tab: Routes, Drivers, or Tickets), tap the magnifying glass or search bar and enter the address for the assignment

<img src="/image/supervisor/specific-assignment-android.png" class="android"/>
<img src="/image/supervisor/specific-assignment-ios.png" class="ios"/>

* The system will display a location marker on the map
* Tap the marker and fill out the address specific assignment prompt, as seen below
  * Select type of Activity
  * Specify whether it is a priority task (switch the toggle on to indicate yes: this moves the assignment to the top of the queue of the Future list of assignments for the driver)
  * Type a note to the driver
  * Select the driver by either searching for a driver by name in the search bar or pick from the drivers available based on the selected filters: Depot, defaulted to the Supervisor's Depot, and Driver Type: County or Contractor
* Tap 'Assign'

<img src="/image/supervisor/specific-assignment1-android.png" class="android"/>
<img src="/image/supervisor/specific-assignment1-ios.png" class="ios"/>

* This will add the assignment
</section>
</section>

<section id="Completing-Assignments-for-Multi-Passes" markdown="1">
## Completing Assignments for Multi-Passes<a name="Completing-Assignment-for-Multi-Passes"></a>

A multi-pass Assignment (when assignment was created, the multi-pass toggle was switched to On) requires a Supervisor to determine the next step after each pass completed by the Driver. Once the Driver completes a pass, a Supervisor receives a 'Pass Completion Notice' prompt with the details about the assignment, including the number of passes made, as seen below. A Supervisor has two options: either 
1. Tap 'Another Pass' to notify the Driver to continue working on the assignment or
1. Tap 'Complete' to complete the multi-pass assignment. 

If a Supervisor selects 'Option 1' the system notifies the Driver to continue working on the assignment, i.e. make another pass. With 'Option 2' the system marks the multi-pass Assignment as Completed and removes it from the Driver's Active Assignments into the History tab

<img src="/image/supervisor/completing-multi-passes-android.png" class="android"/>
<img src="/image/supervisor/completing-multi-passes-ios.png" class="ios"/>
</section>

<section id="Cancelling-Assignments" markdown="1">
## Cancelling Assignments<a name="Cancelling-Assignments"></a>

Supervisor can cancel assignments following these steps:

* Tap the driver from the Manage Drivers menu 
* Tap the Drivers filter
* Tap the driver you want to cancel the assignment
* Swipe the Assignment you want to cancel to the left
* Tap on Yes button

<img src="/image/supervisor/cancelling-assignments-android.png" class="android"/>
<img src="/image/supervisor/cancelling-assignments-ios.png" class="ios"/>
<img src="/image/supervisor/cancelling-assignments1-android.png" class="android"/>
<img src="/image/supervisor/cancelling-assignments1-ios.png" class="ios"/>
</section>

<section id="Routes" markdown="1">
## Routes<a name="Routes"></a>
<section id="Inspecting-Routes" markdown="1">
### Inspecting Routes<a name="-Inspecting-Routes"></a>

Once a Route has all its assignments completed, a Supervisor needs to change the status of that route to 'Inspected' to verify that the route is finished, by navigating to the Route Details panel and pressing 'Change Status' and then pressing 'Inspected' on the prompt.
 
<img src="/image/supervisor/inspecting-routes-android.png" class="android"/>
<img src="/image/supervisor/inspecting-routes-ios.png" class="ios"/>
</section>
</section>

<section id="Drivers" markdown="1">
## Drivers<a name="Drivers"></a>

<section id="Changing-Driver-Status" markdown="1">
### Changing Driver Status<a name="Changing-Driver-Status"></a>

<section id="Assigning-Drivers-to-Tickets" markdown="1">
#### Assigning Drivers to Tickets<a name="Assigning-Drivers-to-Tickets"></a>

A Supervisor can assign an existing ticket to a Driver, by following the steps below:

* Navigate to the Tickets tab
* Select the ticket to assign
* From 'Routes Details' panel, tap 'Assign Drivers'as shown below

<img src="/image/supervisor/assigning-drivers-android.png" class="android"/>
<img src="/image/supervisor/assigning-drivers-ios.png" class="ios"/>

* In the 'Assign Drivers' dialogue complete the following:
   * Select type of Activity
   * Specify whether it is a priority task (switch the toggle on to indicate Yes: this moves the assignment to the top of the queue of the Future Assignments of the Driver)
   * Type a note to the driver
   * Select Driver by either searching for a driver by name in the search bar or pick from the drivers available based on the selected filters: Depot, defaulted to the Supervisor's Depot, and Driver Type: County or Contractor
* Tap 'Assign'

<img src="/image/supervisor/assigning-drivers1-android.png" class="android"/>
<img src="/image/supervisor/assigning-drivers1-ios.png" class="ios"/>

This will remove the 'New' tag from the ticket on the ticket list and change the color of the ticket marker on the map to yellow to indicate that the ticket status is 'Assigned' but not accepted by the Driver yet. It will also notify the Driver to accept the ticket assignment.

<img src="/image/supervisor/yellow-logo.png"/>
</section>

<section id="Pausing-or-Resuming-Drivers" markdown="1">
#### Pausing or Resuming Drivers<a name="Pausing-or-Resuming-Drivers"></a>

A Supervisor can pause an active Assignment that a Driver is working on by following the steps below: (the reasons to pause: refil salt or go to gas station to document that no work is being performed on the route – no breadcrumbs are accumulated) 

When the Driver status is 'In Service', a Supervisor can pause an Active Assignment that a Driver has accepted/ is working on or resume it after it's been paused by following the steps below:

* From the Driver Details panel, tap 'Pause' and then 'Yes' on the verification prompt

<img src="/image/supervisor/pausing-resuming-drivers-android.png" class="android"/>
<img src="/image/supervisor/pausing-resuming-drivers-ios.png" class="ios"/>

* The system pauses the Driver (status is changed to 'Paused') and notifies the Driver in the Driver App that their Assignment has been paused and to wait for further instructions
* To resume the assignment, tap 'Resume' on the Driver that's been paused, as seen below

<img src="/image/supervisor/pausing-resuming-drivers1-android.png" class="android"/>
<img src="/image/supervisor/pausing-resuming-drivers1-ios.png" class="ios"/>

 </section>
 </section>
 </section>

<section id="Road-Hazards" markdown="1">
## Road Hazards<a name="Road-Hazards"></a>

<section id="Creating-Road-Hazards" markdown="1">
### Creating Road Hazards<a name="Creating-Road-Hazards"></a>

A Supervisor can create a road hazard on the map to warn Drivers of the hazards on their routes, by following the steps below:
* From the Map Monitoring view (either tab: Routes, Drivers, or Tickets), tap on the map where the road hazard is located
* The system will display the following 'New road hazard' prompt
* Tap the type of road hazard from the list and tap 'Yes' to confirm the creation of a new road hazard on the next prompt

<img src="/image/supervisor/creating-road-hazards.png"/>

* The system will display the hazards as either a road plate or a warning as seen below:
  * Road plates (orange stacked layes marker): permanent hazard on the road
  * Temporary hazard (orange warning triangle marker): tree down/power line down, accident, etc.
    **Note:** These hazards will appear on the map for all Supervisors and Drivers that are working in the same service area

<img src="/image/supervisor/creating-road-hazards1.png"/>
</section>

<section id="Deleting-Road-Hazards" markdown="1">
### Deleting Road Hazards<a name="Deleting-Road-Hazards"></a>

A Supervisor can delete an existing road hazard from the map if it doesn't exist anymore:

  * Press on an existing road hazard from the map if it doesn't exist anymore:

<img src="/image/supervisor/deleting-road-hazards.png"/>

  * The system will display the following 'Road hazard info' prompt
  * Press 'Delete' and press 'Yes' on the next prompt to confirm deletion of the road hazard

<img src="/image/supervisor/deleting-road-hazards.png"/>

  * Once deleted, the marker is removed from the map for everyone

</section>
</section>
</section>
