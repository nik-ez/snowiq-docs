---
layout: page
title: Guide and Term Dictionary
author: EastBanc Technologies
name: EastBanc Technologies
email: contact@eastbanctech.com
parent: SNOWiQ Overview
nav_order: 1
platform: false
---
<section id="Guide-and-Term-Dictionary" markdown="1">
# Guide and Term Dictionary


<section id="What-is-SNOWiQ" markdown="1">
## What is SNOWiQ?
    
SNOWiQ is a snowplow fleet management and reporting tool for municipalities, snow plow operators, and the public. Based on our TERRAiQ platform, SNOWiQ uses a combination of smartphone-based GPS and cloud technology, delivering a 360-degree view of individual contractor vehicles and your overall snow removal fleet, without costly hardware investments.  Your team and drivers simply log into the SNOWiQ app from the smartphones and devices they already own. SNOWiQ is a Software as a Service (SaaS) solution that combines your internal reporting needs with the convenience of a public dashboard—two mobile applications and a citizen web portal that satisfies all your vehicle tracking, business intelligence, and communication needs. SNOWiQ is designed to meet the unique needs of fleet supervisors, snowplow operators, and the public they serve.

**For Storm Operations Managers/Supervisors** - SNOWiQ’s easy-to-use application lets you visualize your contractor fleet in real-time, from city-wide fleet activity, down to individual neighborhoods. Prioritize fleet movements, dynamically assign, re-route, redeploy, or add drivers, from within the app. You can also enforce quality control, improve performance, time management, and customer service. 

**For Snowplow Operators** - Municipal and contractor drivers can use smartphones they already own to advertise their availability, receive notifications when routes are assigned to them, seamlessly switch to Google Maps for directions, and confirm when routes are completed.  

**For the Public** - SNOWiQ’s public portal provides residents and businesses with much-needed transparency into snow removal efforts. One portal shows when streets will be plowed, weather updates, and snow removal statistics.
</section>

<section id="Application-Summaries" markdown="1">
## Application Summaries

<section id="Storm-Operations-Center-SOC" markdown="1">
### Storm Operations Center (SOC)
**Audience: Storm Operations Managers and Supervisors**

This application is primarily used for planning purposes by the SOC Manager to plan and create storm events, review and send 311 tickets to their respective depots, and view the current progress of all actions currently involved in the county. This application is Web-based but can be accessed on mobile devices (iPads, tablets, etc.), if needed. Old documentation refers to this web applications as Admin Portal.
</section>

<section id="Supervisor-App-SA" markdown="1">
### Supervisor App (SA)
**Audience: Supervisors and Inspectors**

This mobile application is used to create driver assignments for upcoming storm events, create address specific route assignments, view and manage driver assignment progress, and view and manage 311 tickets that are assigned by Storm Operations Managers/Supervisors from the SOC.
</section>

<section id="Driver-App-DA" markdown="1">
### Driver App (DA)
**Audience: Drivers**

This mobile application is accessed on plow drivers’ (contractor or county employee) mobile device. This application allows drivers to view their current assigned routes, their progress, and set the status of their route to "Completed" in order to move on to their next assignment.
</section>

<section id="Resident-Portal-RP" markdown="1">
### Resident Portal (RP)

This web-based application allows residents of the county to view statistics about the current storm event and view data on the progress of different phases (salting, plowing, etc.).

</section>
</section>

<section id="Roles-in-SNOWiQ-SOC-User-Management" markdown="1">
## Roles in SNOWiQ (SOC-User Management)
<section id="Admin" markdown="1">
### Admin

The Admin's primary role is to plan upcoming storm events once storm season begins. They are responsible for creating the events in the Snow Operations Center (SOC), along with setting up the phases for supervisors to create assignments for drivers. They will mainly use the SNOWiQ SOC for planning and management.
</section>

<section id="Supervisor" markdown="1">
### Supervisor

Supervisors are managers over specific depots (potentially more than one) and are responsible for the management of phases and driver assignments. Supervisors also work with the Storm Operations Managers during storm events planning to create phases and driver assignments. Supervisors have access to the SNOWiQ SOC for planning and the SNOWiQ Supervisor Application (SA) to create assignments, stop and start phases, and review 311 tickets for assignment. Supervisors can only view routes assigned to their depot, which is automatically set to their default depot. 
</section>

<section id="Inspector" markdown="1">
### Inspector

Inspectors are responsible for the management of assignments and ensuring the completion of those assignments by reviewing the work done by the drivers on site once the job is completed. Supervisors primarily work in the SNOWiQ Supervisor Application (SA) to manage specific routes and to review 311 Requests to create assignments for drivers.

Currently Supervisors and Inspectors have the same access (both SA and SOC). The difference is primarily in who they manage (Inspectors manage Contractors, Supervisors primarily manage County Drivers, and Chief Supervisors are responsible for the whole Depot).
</section>

<section id="Driver" markdown="1">
### Driver

Drivers are responsible for assignments sent to them by Storm Operations Managers, supervisors, or inspectors. This could include a pre-determined route, a specific address, or queued assignments for multiple phases during a storm event. Assignments may include plowing, salting, a combination of plowing and salting, or multi-pass assignments. Drivers will use the SNOWiQ Driver App on their mobile device to receive assignments and act on those assignments to completion.
</section>

<section id="Resident" markdown="1">
### Resident

Residents have the ability to log into the SNOWiQ Resident Portal to view statistics of the current storm event for the entire county, a specific service area (depot), or a route that their address is associated with. This allows users to get a better understanding of what actions are currently underway in reference to the current situation.
</section>
</section>

<section id="SNOWiQ-Vocabulary" markdown="1">
## SNOWiQ Vocabulary

<section id="Season" markdown="1">
### Season

When a Season is referenced in conjunction with SNOWiQ, it typically means a period of time in which there is an increased chance of snowfall in the area and personnel should be available for snow cleanup and emergency request duties.
</section>

<section id="Event" markdown="1">
### Event

An Event is a single entity created by a Storm Operations Manager to create a plan for an upcoming snow storm (typically 1-2 weeks before the actual storm).
</section>

<section id="Phase" markdown="1">
### Phase

Phases are used during a Storm Event to define certain Activities to be done by the drivers at a specific time. An example of a Phase would be 'Plowing' - a Phase with an Activity set to 'Plowing' would set all assignments to this activity and drivers included in this phase would need to plow their assigned routes. One phase must be completed before the next can begin as they cannot overlap.
</section>

<section id="Depot" markdown="1">
### Depot

A Depot is a centralized hub that manages a number of routes in the service area. Typically, a single Supervisor manages a depot. A Depot can potentially have multiple Inspectors that manage individual routes within the service area.
</section>

<section id="Driver-1" markdown="1">
### Driver

See ‘Driver’ Definition under the ‘Roles’ section above. When logged into the app, Storm Operations Managers, supervisors, and inspectors will be able to see the driver markers on an interactive map along with their current status at the time (notated by a color specified in Status below). County employees can be found on the map with a circular snowplow marker while contractors will be found with a square marker.

<section id="Driver-Status" markdown="1">
#### Driver Status
  * Logged in (Contractor Only) –  is for Contract Drivers who have logged into the system, but have not accepted any new assignments and are not working on any active assignments. This status is for drivers awaiting a new status after logging in. (This status means no payment is being calculated for the driver, whether they just logged on or have been released.)
  * Standby (Contractor Only) – is for Contract Drivers who are in position, awaiting assignment. This status is applied manually to a driver by their supervisor. (This status allows for calculation of payment by half of their rate.)  
  * Ready – is the default status for County Drivers after logging on. For Contract Drivers, it is applied manually by their supervisor to indicate that the driver is ready to begin work on another assignment. (This status allows for calculation of payment in the Contract Driver's full rate.)
  * Address Assignment – is for Drivers working on an address specific assignment.
  * In Service – is for Drivers who have accepted and started an assignment on a route.
  * Paused – is for when a supervisor manually pauses a driver. This puts all assignments in the driver's queue on hold until the Supervisors resumes the driver manually.
  * Offline – is for users that are not logged into the SNOWiQ Driver Application, drivers that are out of range of the service area (out of range), or any drivers that are not able to broadcast/receive GPS coordinates to the system (out of service).

  ![Driver Status](/images/home/guide-and-term-dictionary/driver-status.png){: .width-lg}
</section>
</section>

<section id="Route" markdown="1">
### Route

A numbered geo-located path line within a depot that was previously uploaded into SOC that is used in assignments to drivers along with a status indicator (color-coded based on route status). Route is a combination of route segments with one or more segment type (emergency, primary or neighborhood). A Route can have multiple assignments and drivers attached to it.

<section id="Route-Type" markdown="1">
#### Route Type

**Emergency:** These routes have priority over Residential routes - when selected in an assignment these routes are to be worked first. Depending on the active route plan settings, emergency route could be represented by either just emergency (red) road segments or  combination of emergency (red) road segments and primary (blue) road segments.

**Residential:** These routes have lower priority and are to be worked after Emergency routes are completed. Depending on the active route plan settings (uploaded into the system in Route Plans), residential route could be represented by either just neighborhood (orange) road segments or combination of neighborhood (orange) road segments and primary (blue) road segments.
</section>

<section id="Route-Status" markdown="1">
#### Route Status
* Unassigned - When there are no assignments created for the route
* In Progress - The route has one of the four status below. This aggregated status is used when using filters throughout all applications for simplification.
    * Pending - When there is at least one assignment but it hasn't been accepted by the Driver yet.
    * Assigned - When there is at least one accepted assignment for the route.
    * Started - When there is at least one started assignment for the route.
    * Complete Pending - When there is at least one completed pass on a multi-pass assignment and it's awaiting action from Supervisor.
* Completed - The route has had its assignment(s) completed by assigned driver(s) or the inspector/supervisor manually set the route to 'completed'.
* Inspected - The route has had its assignment verified and finilized by an inspector.


![Route Status](/images/home/guide-and-term-dictionary/route-status.png){: .width-xs}
</section>
</section>  

<section id="Assignment" markdown="1">
### Assignment

An Assignment is a task created within a phase by a supervisor and assigned to a driver to be completed. An assignment can be for an existing route, an address specific route, or a 311 ticket, and it can be an active assignment that the driver is working on or a future one.

<section id="Assignment-Status" markdown="1">
#### Assignment Status
* Paused - When a Supervisor pauses a Driver and if the Driver had an Active Assignment that is paused as well.
* Pending - When a Supervisor creates a new Assignment that hasn't been accepted by the Driver.
* Accepted - When a Driver has accepted the assignment.
* Started - When a Driver has arrived at the destination, manually started the assignment, or resumed the assignment from a paused state.
* Completed - When a Driver manually has completed the assignment or the supervisor has marked the route as complete/set all assignments for this route as completed.
    * Completed Pending - When a Driver manually completed a pass on a multi-pass assignment (the assignment is pending a review by the Supervisor to determine if another pass is needed)
* Cancelled - When the Supervisor cancels the assignment, either active or future.

![Assignment Status](/images/home/guide-and-term-dictionary/assignment-status.png){: .width-xs}
</section>
</section>

<section id="MC311-Request-and-Emergency-Tickets" markdown="1">
### MC311 Request and Emergency Tickets

MC311 ticket requests are imported from the Montgomery County 311 system where residents report snow-related issues, whereas emergency tickets are specific requests from 3rd parties like emergency services to plow a route to a specific location.
* SR ID - Service Request ID.
* Description - request details.
* Ticket Types:
    * Residential Tickets - imported MC311 tickets.
    * Emergency Tickets - requests from emergency services (EMS, Fire Dept) or address specific requests created by an Admin user.
* Address - address of the ticket request.
* Supervisor - who the ticket has been assigned to.
* Opened - date the ticket was opened. 
* Depot - the depot this ticket belongs to. 
* Route ID - which route is associated with the ticket.

<section id="Ticket-Status" markdown="1">
#### Ticket Status

* New - The system checked that the 311 ticket is valid for assignment or a new emergency ticket was created but not sent out for assignment yet.
* Sent - The Admin user reviewed the ticket and sent it to Supervisor App (SA) for assignment creation.
* Assigned - The Supervisor created the Assignement in the SA and sent it to the Driver, but the work hasn't began yet.
* In Progress - The Driver began working on the ticket assignment.
* Closed:
    1. An Admin user manually closes a ticket that they deem invalid or that doesn't need work
    1. The system has checked the sevice request and found it invalid and set the ticket to closed
    1. The assigned driver has completed the task and marked the assignment as completed - which closes the ticket throughout all systems.
* Pending - The system found the ticket to be invalid and is preparing to close the ticket. 

![Ticket Status](/images/home/guide-and-term-dictionary/ticket-status.png){: .width-sm}
</section>
</section> 
</section>
</section>
