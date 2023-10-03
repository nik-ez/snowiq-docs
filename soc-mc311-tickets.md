---
layout: page
title: Tickets
author: EastBanc Technologies
name: EastBanc Technologies
email: contact@eastbanctech.com
parent: Storm Operations Center
nav_order: 3
platform: false
comments: true
---

<section id="Service-Tickets-Request-Management" markdown="1">
# Service Tickets Request Management

The MC311 system is used by Montgomery County, MD to process ticket requests that come in during the snow storm. The SNOWiQ's MC311 Tickets page allows Admin users to send the ticket requests imported from MC311 to Supervisors who will in turn assign them to Drivers during an event. Additionally, users are able to create emergency request tickets for specific addresses.

There are two ways to view the tickets: the List view and the Map View, as shown below:

<section id="Ticket-List-View" markdown="1">
## Ticket List View

This view is a standard table that allows users to close (blue 'Close' button) or assign (blue 'Send' button) tickets to Supervisors. Additionally, there are multiple filters available to narrow down the list displayed: Service Request (SR) ID, Route Name/Number, Depot, Supervisors the ticket is assigned to, Status Indicator, and Type of Ticket. A user can also filter the tickets by the time they were opened and/or closed.  

![MC311 Ticket Management](/images/soc/soc-mc311-tickets/mc311-ticket-management.png){: .width-xl}{: data-lightbox="1"}

<section id="Ticket-Type" markdown="1">
### Ticket Type

The Ticket Type filter allows users to view the two different types of tickets. 

* Residential (a blue circle next to the SR ID on the list): Imported MC311 tickets.
* Emergency Tickets (a red asterisk next to the SR ID on the list): Requests from emergency services (EMS, Fire Dept), emergency tickets created by an Admin user in Storm Operations Center, or specific requests created by a Supervisor user in Supervisor App.

A checkmark on either type of ticket indicates that the ticket is closed and has a Closed date, along with the user that closed the ticket. 

![Ticket Type](/images/soc/soc-mc311-tickets/ticket-type.png){: .width-xs}
</section>

<section id="Ticket-Status" markdown="1">
### Ticket Status

The Ticket Status filter allows users to view any ticket set to a specific status. 

* **New (311 and Emergency):** The system has validated the 311 ticket for assignment, or a new emergency ticket was created but not yet sent out for assignment. 
* **Sent:** The Admin user reviewed the ticket and has sent it to a Supervisor App (SA) for assignment creation.
* **Assigned:** The Supervisor has created the Assignment in the SA and has sent it to the Driver, but the work has yet to begin.
* **In Progress:** The Driver is working on the ticket assignment.
* **Closed:** 
   1. An Admin user manually closes a ticket that they deem invalid or that doesn't need work.
   1. The system has checked the service request and found it invalid and has set the ticket to closed.
   1. The assigned driver has completed the task and marked the assignment as completed, and the ticket has been closed throughout all systems.
* **Pending:** The system found the ticket to be invalid and is preparing to close the ticket.
</section>

<section id="Ticket-Import-Validation-Rules" markdown="1">
### Ticket Import Validation Rules

The System identifies the route by the address of the ticket and performs checks if the route is being treated/plowed. The system takes the following actions based on this check:

* If the route is not yet started (= unassigned, pending or assigned status) - Auto-close the ticket.
* If the route has been started (=started state) but there're no breadcrumbs near the address in the ticket - Auto-close the ticket.
* If the route is started and there are breadcrumbs near the address on the ticket, or the route is in completed/inspected status - 311 ticket will remain open (i.e., will not auto-close tickets for areas that not yet been serviced).
</section>
</section>

<section id="Ticket-Map-View" markdown="1">
## Ticket Map View

This view provides a panel on the left that lists tickets and their statuses along with a visual on the map of color coded markers which informs users where tickets are located in the service area. Additionally, clusters are visible when the map is zoomed out.

Clicking on the blue arrow next to the ticket in the left panel or on the marker on the map will display a popup with the ticket details, as shown below. It also allows the user to either Close or Send a ticket.

![Ticket Map View](/images/soc/soc-mc311-tickets/ticket-map-view.png){: .width-xl}{: data-lightbox="3"}

<section id="Clusters" markdown="1">
### Clusters

When a user zooms outs, markers with numbers inside them are displayed called 'clusters' that de-clutter the map and group together as markers. Clicking on a cluster allows the user to zoom in on that area and view the separated markers on the map. 
</section>
</section>

<section id="Sending-Ticket-Requests" markdown="1">
## Sending Ticket Requests

In order for the ticket to be worked on, it must go through a sequence of steps, the first of which is to send the ticket to the Supervisor to create an assignment by doing the following:

* Locate the ticket in either the List View or the Map View
* Select the blue 'Send' button, which is located on the List View on the right of the ticket, or on the Map View in the popup details for the ticket
* Enter any notes in the Note field, select a Supervisor from the dropdown, and then select 'Send', as shown below.

* Once the ticket is sent, the Supervisor will continue through the SNOWiQ iPad Supervisor App to assign drivers to a ticket. (THis process is described  here.)
</section>

<section id="Closing-Tickets" markdown="1">
## Closing Tickets

An Admin user can manually close the ticket if the ticket is deemed to be invalid, by doing the following:

* Locate the ticket in either the List View or the Map View 
* Click the blue 'Close' button which is located on the List View on the right of the ticket, or on the Map View in the popup details for the ticket, as shown below.
* Select 'Yes' on the validation popup.

If the status of the ticket is 'Assigned' or 'In Progress', a warining prompt will display as shown below:

</section>

<section id="Creating-Emergency-Ticket-Requests" markdown="1">
## Creating Emergency Ticket Requests

An Admin user can manually create an Emergency Ticket by doing the following:

* Navigate to either the Active Storm Ops Map View or the MC311 Tickets Map View.
* Click on the magnifying glass icon for the search bar to open on the map, as shown below.

![Emergency Ticket](/images/soc/soc-mc311-tickets/emergency-ticket.png){: .width-md}{: data-lightbox="7"}

* Enter the address and select Enter, which will prompt the system to locate the address and, if located, the address will display below the search bar.
* Select the address and the system will display the address on the map with the Red location marker, as shown below:

![Emergency Ticket1](/images/soc/soc-mc311-tickets/emergency-ticket1.png){: .width-md}{: data-lightbox="8"}

* Click on the marker and the system will display the following prompt.

* Enter any notes in the Notes field and then select a Supervisor to send it to.

* If the ticket was created while on the MC311 Tickets Map View, the newly created ticket is added to the list on the panel to the left with a red asterisk as  an Emergency Ticket. Its status is set to 'Sent' which indicates the process of sending it to the Supervisor has been completed.
</section>
</section>




