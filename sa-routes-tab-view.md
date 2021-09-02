---
layout: page
title: Routes Tab View
author: EastBanc Technologies
name: EastBanc Technologies
email: contact@eastbanctech.com
parent: Supervisor App
nav_order: 4
platform: true
comments: true
---
<section id="Routes-Tab-View" markdown="1">
# Routes Tab View

A panel on the left has three tabs: Routes, Drivers, and Tickets. The app opens to Routes, as seen below.

The Route panel displays a list of routes with their corresponding route name/number, percentage of completion if there is an active assignment, the total number of miles on the route, and status indicator (color coded on the map). Above the list there is a set of filters: by Depot, Route Type, and Route Status.  

<img src="images/supervisor/sa-routes-tab-view/routes-tab-android.png" class="android" data-lightbox="1" />
<img src="images/supervisor/sa-routes-tab-view/routes-tab-ios.png" class="ios" data-lightbox="2" />

<section id="Route-Filters" markdown="1">
## Route Filters

Using the filters above the route list allows users to narrow down what is seen on the map. Setting a filter can add or remove map elements such as route outlines, routes of different types (priorities), or routes with different statuses. The filters and their options are listed below:

<section id="Depot" markdown="1">
### Depot

The depot filter defaults to the depot the Supervisor is assigned to and only the routes associated with that depot will be displayed. 
</section>

<section id="Route-Type-Priority" markdown="1">
### Route Type (Priority)

The Route Type filter allows users to filter out route outlines that belong to specific route priorities (not to be confused with route segment type). Route is a combination of route segments with one or more segment type (emergency, primary or neighborhood).

**Emergency:** These routes have priority over Residential routes - when selected in an assignment these routes are to be worked first. Depending on the active route plan settings, emergency routes could be represented by either just emergency (red) road segments or a combination of emergency (red) road segments and primary (blue) road segments.

**Residential:** These routes have lower priority and are to be worked on after Emergency routes are completed. Depending on the active route plan settings, residential route could be represented by either just neighborhood (orange) road segments or combination of neighborhood (orange) road segments and primary (blue) road segments.
</section>

<section id="Route-Status" markdown="1">
### Route Status

The Route Status filter allows users to view any routes set to a specific status during an assignment.

* Unassigned – When there are no assignments created for the route.
* In Progress – When a route has at least one assignment attached to it that hasn't been completed yet.
* Completed – The route has had its assignment(s) completed by assigned driver(s) or the inspector/supervisor manually set the route to 'Completed' 
* Inspected – The route has had its assignment verified and finalized by an inspector.
</section>
</section>
<section id="Route-Details" markdown="1">
## Route Details

Selecting a route label from the list focuses on that single route on the map, as shown below, and brings up the 'Route Details' panel on the left. The panel includes percentage of completion for a route if it's being worked on, progress bar of completion, the driver(s) assigned to the route, the driver's contact information, and the status of the route along with a timestamp of that status. On this 'Route Details' panel, the user is also able to 'Assign new drivers' to this route and review the near-real time progress of the driver by looking at the breadcrumbs on the route. Breadcrumbs appear as the driver completes the route as shown below. 

<img src="images/supervisor/sa-routes-tab-view/routes-details-android.png" class="android" data-lightbox="3" />
<img src="images/supervisor/sa-routes-tab-view/routes-details-ios.png" class="ios" data-lightbox="4" />
</section>
</section>