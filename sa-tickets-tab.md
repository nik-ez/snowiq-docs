---
layout: page
title: Tickets Tab View
author: EastBanc Technologies
name: EastBanc Technologies
email: contact@eastbanctech.com
parent: Supervisor App
nav_order: 6
platform: false
comments: true
---
<section id="Tickets-Tab-View" markdown="1">

# Tickets Tab View

When an Admin sends a new ticket to a Supervisor, it will be appear as a ticket count on the Ticket tab for the Supervisor, as shown below.

After selecting the Tickets tab, the Tickets panel displays a list of tickets and markers on the map that represent those tickets and their statuses. This allows users to view where tickets are located in the service area. Above the list, there is a set of filters: by Depot, Route, Ticket Status, and Ticket Type. 
   
A new Ticket is notated with a 'New' tag and identified with a red asterisk marker on the map.. A checkmark on any type of ticket indicates that the ticket is closed.

<img src="images/supervisor/sa-tickets-tab/tickets-tab.png" class="ios width-xl" data-lightbox="4" />

<section id="Ticket-Filters" markdown="1">
## Ticket Filters

Using the filters on the side panel allows Supervisors a more focused view of MC311 tickets. Setting a filter can add or remove map elements to limit the area displayed on the map to the depot selected, route outlines, ticket status, or ticket types. The filters and their options are described below.

<section id="Depot" markdown="1">
### Depot

The depot filter defaults to the depot the Supervisor it is assigned to and only displays the tickets within that Depot's service area. 
</section>

<section id="Route" markdown="1">
### Route

The route filter allows users to filter tickets by a specific route number, and will only display tickets in proximity to that route. 
</section>

<section id="Ticket-Status" markdown="1">
### Ticket Status

The Ticket Status filter allows users to view any ticket set to a specific status.

  * New: The system has checked that the 311 ticket is valid for assignment or a new emergency ticket was created, but has not yet been sent out for assignment 
  * Sent: The Admin user has reviewed the ticket and sent it to a Supervisor App (SA) for assignment creation
  * Assigned: The Supervisor has created the Assignment in the SA and sent it to the Driver, but the work has not started
  * In Progress: The Driver has started working on the ticket assignment
  * Closed: 
  1. An Admin user manually closes a ticket that they have deemed invalid or is not neccessary. 
  2. The system has checked the service request and found it invalid and has closed the ticket. 
  3. The assigned driver has completed the task and marked the assignment as completed (which closes the ticket throughout all systems).
  * Pending: The system has found the ticket to be invalid and is preparing to close the ticket.
</section>

<section id="Ticket-Type" markdown="1">
### Ticket Type

The Ticket Type filter allows users to filter by two different types of tickets. 

  * Residential (a blue circle next to the SR ID on the list): Imported MC311 tickets. 
  * Emergency Tickets (a red asterisk next to the SR ID on the list): Requests from emergency services, (EMS, Fire Dept) emergency tickets created by an Admin user in Storm Operations Center, or address-specific requests created by a Supervisor user in the Supervisor App.

A Checkmark on either type of ticket indicates that the ticket is closed.

<img src="images/supervisor/sa-tickets-tab/ticket-type.png" class="ios width-xs" />

</section>
</section>

<section id="Ticket-Details" markdown="1">
## Ticket Details

Selecting a ticket label from the list focuses on that single ticket on the map and opens the 'Ticket details' panel. The panel includes all the relevant ticket information and allows the Supervisor to 'Assign Resources' to that ticket. 

<img src="images/supervisor/sa-tickets-tab/tickets-details.png" class="ios width-xl" data-lightbox="8" />

</section>
</section>
