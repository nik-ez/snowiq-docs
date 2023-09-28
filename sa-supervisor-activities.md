---
layout: page
title: Supervisor Activities
author: EastBanc Technologies
name: EastBanc Technologies
email: contact@eastbanctech.com
parent: Supervisor App
nav_order: 3
platform: false
comments: true
---
<section id="Supervisor-Activities" markdown="1">
# Supervisor Activities

<section id="Creating-New-Assignments" markdown="1">
## Creating New Assignments

There are three ways of creating new assignments within the SA: 
1. From the Routes tab by pressing 'Assign new Resource'. 
2. From the Resource Details panel by pressing 'Add Task'.  
3. From the Map Monitoring view on either the Routes or Resource

<section id="Assigning-New-Resources" markdown="1">

### Assigning Resource to a Route

A Supervisor can assign a new resource to a route by following the steps below:

* From the 'Routes Details' panel, tap 'Assign Resource' as shown below.

 
<img src="images/supervisor/sa-supervisor-activities/assigning-new-drivers.png" class="android width-xl" data-lightbox="1" />

* In the 'Assign Resource' dialogue complete the following:
  * Select type of Activity
  * Specify whether the assignment is Single-Pass or Multi-Pass (switch the toggle on for Multi-Pass)
  * Specify whether it is a priority task (switch the toggle on to indicate yes)
  * Type a note to the Resource
  * Select Resource by either searching for a driver name in the search bar, or by selecting from the Resources available based on selected filters: Depot (defaulted to the Supervisor's Depot), and Resource Type: County or Contractor

* Tap 'Assign'
* This will add the assignment to the Route Details with the name of the Driver, along with an Assignment status of 'Pending' to indicate that the Assignment has been sent to the Driver but not accepted yet. It also adds the Assignment to the Future list of Assignments for the Resource, as can be seen in the next section. It also prompts the Driver in the Driver App (DA) to accept the Assignment


<section id="Adding-Tasks" markdown="1">
### Adding Task to a Resource

A Supervisor can add a new task to a Resource, by preforming the following the steps:

* From the Resource Details panel, tap 'Add Task'

<img src="images/supervisor/sa-supervisor-activities/adding-tasks.png" class="ios width-xl" data-lightbox="6" />

* In the 'Create Resource Assignment' dialogue, complete the following:
  * Select type of Activity
  * Specify whether the assignment is Single-Pass or Multi-Pass (switch the toggle on for Multi-Pass)
  * Specify whether it is a priority task (switch the toggle on to indicate yes: this moves the assignment to the top of the queue of the Future list of assignments for the driver)
  * Type a note to the driver
  * Select the route by either searching for a route number or picking from the routes available based on the selected Depot filter Depot (which defaults to the Supervisor's Depot)
* Tap 'Assign'


* This will add the assignment to the Future list for the Driver with a status of 'Pending' which will indicate that the assignment has been sent to the Driver but not yet accepted. The system will prompt the Driver in the Driver App (DA) to accept the Assignment.

</section>

<section id="Creating-Address-Specific-Assignment" markdown="1">
### Creating Address Specific Assignment

A Supervisor can create an Assignment related to a specific address by following the steps below:

* From the Map Monitoring view (either tab: Routes, Resources, or Tickets), tap the magnifying glass or search bar and enter the address for the assignment

<img src="images/supervisor/sa-supervisor-activities/specific-assignment.png" class="ios width-xl" data-lightbox="12" />

* The system will display a location marker on the map
* Tap the marker and fill out the address specific assignment prompt, as seen below
  * Select type of Activity
  * Specify whether it is a priority task (switch the toggle on to indicate yes: this moves the assignment to the top of the queue of the Future list of assignments for the Resource)
  * Type a note to the Resource
  * Select the Resource by either searching for a driver by name in the search bar or pick from the Resource available based on the selected filters: Depot, defaulted to the Supervisor's Depot, and Resource Type: County or Contractor
* Tap 'Assign'

* This will add the assignment
</section>
</section>

<section id="Completing-Assignments-for-Multi-Passes" markdown="1">

## Completing Assignments for Multi-Passes

A multi-pass Assignment (an assignment was created when the multi-pass toggle was switched to On) requires a Supervisor to determine the next step after each pass is completed by the Driver. Once the Driver completes a pass, a Supervisor receives a 'Pass Completion Notice' prompt with  details about the assignment, including the number of passes made, as seen below. A Supervisor has two options:  
1. Tap 'Another Pass' to notify the Driver to continue working on the assignment, or
1. Tap 'Complete' to complete the multi-pass assignment. 

If a Supervisor selects 'Option 1' the system notifies the Driver to continue working on the assignment (i.e. make another pass. With 'Option 2), the system marks the multi-pass Assignment as Completed and removes it from the Resource Active Assignments into the History tab.

</section>

<section id="Cancelling-Assignments" markdown="1">

## Cancelling Assignments

Supervisors can cancel assignments by following these steps:

* Tap the Resource from the Manage Resource menu 
* Tap the Resource filter
* Tap the Resource for the assignment
* Swipe the Assignment to cancel to the left
* Tap on Yes button

<img src="images/supervisor/sa-supervisor-activities/cancelling-assignments.png" class="ios width-xl" data-lightbox="18-group" />

</section>

<section id="Routes" markdown="1">
## Routes
<section id="Inspecting-Routes" markdown="1">
### Inspecting Routes

Once a Route has all its assignments completed, a Supervisor needs to change the status of that route to 'Inspected' to verify that the route is finished. To do this navigate to the Route Details panel and select 'Change Status' and then select 'Inspected' on the prompt.
 
<img src="images/supervisor/sa-supervisor-activities/inspecting-routes.png" class="ios width-xl" data-lightbox="20" />

</section>
</section>

<section id="Resource" markdown="1">

## Resource

<section id="Changing-Resource-Status" markdown="1">

### Changing Resource Status

A Supervisor can change the status of a contractor resource.

<section id="Assigning-Resource-to-Tickets" markdown="1">

### Assigning Resource to Tickets

A Supervisor can assign an existing ticket to a Resource, by following the steps below:

* Navigate to the Tickets tab
* Select the ticket to assign
* On the 'Routes Details' panel, tap 'Assign Resource'.

<img src="images/supervisor/sa-supervisor-activities/assigning-drivers.png" class="ios width-xl" data-lightbox="24" />

* In the 'Assign Resource' dialogue complete the following:
   * Select type of Activity
   * Specify whether it is a priority task (switch the toggle on to indicate Yes: this moves the assignment to the top of the queue of the Future Assignments of the Driver)
   * Type a note to the driver
   * Select a Resource by either searching for a driver by name in the search bar or select from a list of available drivers which can be filtered by Depot, defaulted to the Supervisor's Depot, and Driver Type: County or Contractor
* Tap 'Assign'

This will remove the 'New' tag from the ticket on the ticket list and change the color of the ticket marker on the map to yellow <img src="images/supervisor/sa-supervisor-activities/yellow-logo.png" class="android" style="min-width:18px; width:18px; border:none;" /> to indicate that the ticket status is 'Assigned' but not yet accepted by the Driver. It will also notify the Driver to accept the ticket assignment.

</section>

<section id="Pausing-or-Resuming-Resource" markdown="1">
### Pausing or Resuming Resource

A Supervisor may want to pause an assignment for a number of reasons (e.g., resource must refill salt or go to gas station to document that no work is being performed on the route), and to assure that off-route travel is not included in route information). When the Resource status is 'In Service', a Supervisor can pause an Active Assignment that a Driver has accepted or is working on, or resume it after it's been paused by following the steps below:

* From the Driver Details panel, tap 'Pause' and then 'Yes' on the verification prompt
* The system pauses the Resource (status is changed to 'Paused') and notifies the Driver in the Driver App that their Assignment has been paused and to wait for further instructions
* To resume the assignment, tap 'Resume' on the Resource that's been paused.

 </section>
 </section>
 </section>

<section id="Road-Hazards" markdown="1">
## Road Hazards

<section id="Creating-Road-Hazards" markdown="1">
### Creating Road Hazards

A Supervisor can create a road hazard on the map to warn Drivers of the hazards on their routes, by following the steps below:
* From the Map Monitoring view (either tab: Routes, Resource, or Tickets), tap on the map where the road hazard is located
* The system will display the following 'New road hazard' prompt
* Tap the type of road hazard from the list and tap 'Yes' to confirm the creation of a new road hazard on the next prompt

<img src="images/supervisor/sa-supervisor-activities/creating-road-hazards.png" class="ios width-xl" data-lightbox="30" />

* The system will display the hazards as either a road plate or a warning, as seen below:
  * Road plates (orange stacked layes marker): permanent hazard on the road
  * Temporary hazard (orange warning triangle marker): tree down/power line down, accident, etc.
    **Note:** These hazards will appear on the map for all Supervisors and Drivers that are working in the same service area

<img src="images/supervisor/sa-supervisor-activities/creating-road-hazards1.png" class="ios width-sm" data-lightbox="32" />

</section>

<section id="Deleting-Road-Hazards" markdown="1">
### Deleting Road Hazards

A Supervisor can delete an existing road hazard from the map if it doesn't exist anymore by doing the following:

  * Press on an existing road hazard from the map if it doesn't exist anymore:

<img src="images/supervisor/sa-supervisor-activities/deleting-road-hazards.png" class="ios width-sm" data-lightbox="34" />

  * The system will display the following 'Road hazard info' prompt
  * Press 'Delete' and press 'Yes' on the next prompt to confirm deletion of the road hazard
  * Once deleted, the marker is removed from the map for everyone

</section>
</section>
</section>
