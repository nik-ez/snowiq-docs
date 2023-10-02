---
layout: page
title: Resources Tab View
author: EastBanc Technologies
name: EastBanc Technologies
email: contact@eastbanctech.com
parent: Supervisor App
nav_order: 5
platform: false
comments: true
---
<section id="Resources-Tab-View" markdown="1">
# Resources Tab View

The Resources panel displays a list of resources active in the system with the name and current status of each resource. A Driver marker is displayed on the map (color coded based on status), and above the list a set of filters is displayed: by Depot, Route Type, and Route Status. Selecting a Driver in the panel on the left takes the user to the [Driver Details](#Driver-Details)

<img src="images/supervisor/sa-drivers-tab-view/drivers-tab.png" class="ios width-xl" data-lightbox="2" />

Select the Resource marker on the map (the snowplow icon) displays a prompt on the map with additional Resource details, as shown below. Selecting a name in the prompt takes the user to the **Resource Details panel**

<section id="Resources-Filters" markdown="1">
## Resources Filters

Using the filters above, the Drivers list allows users to filter down what is displayed on the map. Setting a filter can add or remove map elements such as Driver types or Drivers with different statuses. The filters and their options are listed below.

<section id="Depot" markdown="1">
### Depot

The by Depot filter defaults to the depot a Supervisor user is assigned to, and only the Drivers associated with that depot will be displayed. 
</section>

<section id="Resource-Type" markdown="1">
### Resource Type

The Route Type filter allows users to filter by County or Contractor employees. County employees are displayed on the map with a circular snowplow marker, <img src="images/supervisor/sa-drivers-tab-view/driver-logo.png" class="ios" style="min-width:18px; width:18px; border:none;"/> while contractors will be displayed by a square marker <img src="images/supervisor/sa-drivers-tab-view/driver-logo1.png" class="ios" style="min-width:18px; width:18px; border:none;"/>.
</section>

<section id="Resource-Status" markdown="1">
### Resource Status

The Resource Status filter allows users to view Resources with a specific status.

* Logged in (Contractor Only) –  Displays Contract Resources who have logged into the system, but have not accepted any new assignments or working on any active assignments. This status is for Drivers awaiting a new status after logging in. (This status means no payment is being calculated for the Driver, whether they just logged on or have been released.)
* Standby (Contractor Only) – Displays Contract Resources who are in position and awaiting assignment. This status is applied manually to a Driver by their Supervisor. (This status allows for calculation of payment by half of their rate.)   
* Ready – Displays default status for County Drivers after logging on. For Contract Drivers, it is applied manually by their Supervisor to indicate that the Driver  is ready to begin work on another assignment. (This status allows for calculation of payment at the Contract Driver's full rate.)
* Address Assignment – Displays Drivers working on an address-specific assignment.
* In Service – Displays Drivers who have accepted and started an assignment on a route.
* Paused  – Displays Drivers that have been paused by a Supervisor. Pausing a Driver puts all assignments in the Driver's queue on hold until the Supervisor resumes the Driver manually. 
* Offline  – Displays users that are not logged into the SNOWiQ Driver Application, Drivers that are out of range of the service area, or Drivers that are not able to broadcast/receive GPS coordinates to the system (out of service).
</section>
</section>

<section id="Resource-Details" markdown="1">
## Resource Details

The Resource Details panel focuses on one selected Driver on the map and on the left-hand panel, along with Driver details including any Active Assignments along with a Driver's progress, history of previous assignments, and future assignments. Here, the Supervisor is also able to 
1. 'Pause' an Active Assignment, which notifies a Driver in the Driver App that their Assignment has been paused, and also allows a Supervisor to Resume a Driver's assignment.  
1. 'Add Task' to the selected Resource, which notifies a Driver in the Driver App that the Driver has a new task. 

<img src="images/supervisor/sa-drivers-tab-view/driver-details.png" class="ios width-xl" data-lightbox="6" />

Clicking the 'i' (information) icon displays the 'Detail information' profile page of the Resource with the Driver's contact information, as shown below:

<img src="images/supervisor/sa-drivers-tab-view/driver-details1.png" class="ios width-xl" data-lightbox="8" />
</section>
</section>
