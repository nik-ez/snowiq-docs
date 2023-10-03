---
layout: page
title: Active Storm Ops
author: EastBanc Technologies
name: EastBanc Technologies
email: contact@eastbanctech.com
parent: Storm Operations Center
nav_order: 2
platform: false
comments: true
---

<section id="Active-Storm-Ops" markdown="1">
# Active Storm Ops

<section id="Map-Monitoring-View" markdown="1">
## Map Monitoring View

The Map Monitoring view is the first page that users see when logging in, and can also be accessed from the navigation menu on the left under 'Active Storm Ops' option. This page is used to view near-real time visual updates during a storm event. The Map Monitoring view consists of the following elements:

  * A map based on the service area that is covered, with the borders and boundaries of a county (or other entity such as district, city, state, etc.), along with borders of depots within that entity
  * A visual of markers on the map that represent Drrivers, routes, road hazards, tickets, and clusters when the map is zoomed out
  * A panel to the left of the map with two tabs for Routes and their current status, along with Drivers and their current status
  * A set of filters above the map that allow to narrow or expand what is displayed on the map

  ![Map Monitoring View](/images/soc/soc-active-storm-ops/map-monitoring-view.png){: data-lightbox="1"}

<section id="Routes-Tab" markdown="1">

### 1. Routes Tab

The Routes tab located to the left of the map as shown below and displays a list of routes with their corresponding route name and number, along with a status indicator (color coded – see markers), the total number of miles on the route, and the percentage of completion if there is an active assignment. Applying Filters above the map will filter the routes on this tab as well. Selecting any of the route labels within the tab focuses on that single route on the map.

</section>


<section id="Resources-Tab" markdown="1">

### 2. Resources Tab

The Resources tab to the right of the Routes tab is shown below and displays a list of Resources with their names and statuses (color coded – see markers and Status Descriptions). When selecting a Resource from the list, resource details will be displayed above their icon which is located on the ma,p as shown below. This provides additional details like the Driver's photo, Supervisor name, and the last time the Driver was seen using the Driver App (DA). 

Clicking on the Blue arrow to the right of the Driver name produces the Driver's Profile panel, with additional details.

</section>

<section id="Resources-Tab" markdown="1">

### 3. Inspectors Tab

The Inspectors tab contains a list of all the Inspectors, along with filtering options.
</section>

<section id="Filters" markdown="1">

### 4. Filters

Using the filters at the top of the Map Monitoring view allows users to filter what is seen on the map. Setting a filter can add or remove map elements such as route outlines, routes of different priorities, and routes or drivers that belong to a specific depot. Below are the filters and their options:
</section>

<section id="Map-Legend" markdown="1">

### 5. Map Legend

Selecting the arrow in the lower part of the map opens the slider with a map legend where the user can turn the display of boundaries segments on or off.
</section>

<section id="Markers" markdown="1">
## Markers

### Drivers

| Icon | Status | 
|:-|:---|
| ![1-contractor-loggedin](/images/soc/soc-active-storm-ops/drivers/1-contractor-loggedin.png) | Contractor Logged-In |
| ![2-contractor-standby](/images/soc/soc-active-storm-ops/drivers/2-contractor-standby.png) | Contractor StandBy|
| ![3-ready](/images/soc/soc-active-storm-ops/drivers/3-ready.png) | Ready |
| ![4-in-service](/images/soc/soc-active-storm-ops/drivers/4-in-service.png) | In Service |
| ![5-in-service-address](/images/soc/soc-active-storm-ops/drivers/5-in-service-address.png) | In Service on Address Assignment |
| ![6-paused](/images/soc/soc-active-storm-ops/drivers/6-paused.png) | Paused |
| ![7-offline](/images/soc/soc-active-storm-ops/drivers/7-offline.png) | Offline |

### Tickets

| Icon | Status | 
|:-----|:-------|
| ![1-new-311-ticket](/images/soc/soc-active-storm-ops/tickets/1-new-311-ticket.png) | New 311 Ticket |
| ![2-new-emergency-ticket](/images/soc/soc-active-storm-ops/tickets/2-new-emergency-ticket.png) | New Emergency Ticket |
| ![3-ticket_sent](/images/soc/soc-active-storm-ops/tickets/3-ticket_sent.png) | Sent |
| ![4-ticket_assigned](/images/soc/soc-active-storm-ops/tickets/4-ticket_assigned.png) | Assigned |
| ![5-ticket_inprogress](/images/soc/soc-active-storm-ops/tickets/5-ticket_inprogress.png) | In Progress |
| ![6-ticket_pending](/images/soc/soc-active-storm-ops/tickets/6-ticket_pending.png) | Pending |
| ![7-ticket_completed](/images/soc/soc-active-storm-ops/tickets/7-ticket_completed.png) | Completed |

</section>

<section id="Clusters" markdown="1">
## Clusters

On the Map Monitoring view,  when a user zooms outs, markers with numbers inside them are displayed called 'clusters' that de-clutter the map and group together as markers. Clicking on a cluster allows the user to zoom in on that area and view the separated markers on the map.

| Icon | Description | 
|:---|:---|
| ![drivers](/images/soc/soc-active-storm-ops/clusters/1-drivers.png) | Drivers |
| ![routes](/images/soc/soc-active-storm-ops/clusters/2-routes.png) | Routes |
| ![tickets](/images/soc/soc-active-storm-ops/clusters/3-tickets.png) | Tickets |

</section>
</section>
