---
layout: page
title: Phase Management
author: EastBanc Technologies
name: EastBanc Technologies
email: contact@eastbanctech.com
parent: Storm Operations Center
nav_order: 6
platform: false
comments: true
---

<section id="Phase-Management" markdown="1">

## Phase Management

Phases are used during a storm Event to define specific Activities that allow planning of Assignments for Resources. Once a new Event is created, the Admin user can create and manage Phases.

![Phases](/images/soc/soc-event-management/phase-management.png){: .width-xl}{: data-lightbox="4"}


**Phase Statuses:**

| New | Newly created not activated Phase. |
| Active | Manually activated Phase (event can have several active phases at the time). |
| Completed | Manually completed by Supervisor user. |
| Archived | Status after event archivation. |

<section id="Phase-Creation" markdown="1">

## Phase Creation

"Monitoring" Phase for each depot is created automatically with event.

Phase creation process contains two steps: specify Phase details and Assignments Planning.

To create a new phase click on the "Add Phase" button.

![Phase Creation](/images/soc/soc-event-management/add-phase.png){: .width-xl}{: data-lightbox="7"}

Fill out all the properties of the form and click "Add Phase" button. After that system will redirect you to the Assignment Planning screen.

</section>



<section id="Assignments-Planning" markdown="1">

## Assignments Planning

Assignments Planning screen allows to plan and specify work on routes.

It is a necessary step during the phase creation process.

It has two view modes: "By Route" and "By Resource".

### By Route

By Route screen is a default view mode.

![By Route Assignments](/images/soc/soc-event-management/edit-driver-assignments.png){: .width-xl}{: data-lightbox="8"}

On By Route screen user can add Resources to Routes and specify Inspectors.


### By Resource

To see "By Resource" view mode click on the switch under the Phase details in the top left corner of the screen.

![By Resource Assignments](/images/soc/soc-event-management/edit-driver-assignments1.png){: .width-xl}{: data-lightbox="9"}

On the By Resource screen user can add resources to the event and specify routes for each resource to work on.
Also after adding a resource, if some driver doesn't have a truck assigned truck can be assigned here.

To complete assignment planning process click on "Save Assagnments" button Progress will be saved in the system. 

If the assignment planning was part of the phase creation process, after clicking on "Save Assagnments" button uses will be redirected to the Phase Management screen and a new phase will be created and appeared in the list.

</section>




<section id="Phase-Activation" markdown="1">

## Phase Activation

Phases can be activated only when the storm event they belong to is active.

All the default 'Monitoring' phases in all of the depots will be activated automatically with storm event.

Typically, it will be the Depot Supervisor's duty to move the phases forward during an Event. Once one Phase is completed, all Supervisors are notified in the Supervisor App (SA) on the iPad the phase is completed.

To activate a newly created phase click Play button.

![Phase Activation](/images/soc/soc-event-management/phase-activation.png){: .width-xl}{: data-lightbox="11"}

Several phrases can be active simultaneously.
However, during the phase activation process user can complete previous active phases by checking it. This is the convenient way to move work forward consequently.


### Phase Pause

Phases also can be paused, this allows to retain the states of all assignments. When Phase is resumed, all assignments will resume from their previous state. Pausing an Active Phase is used in case something occurred during a snow event that required moving to the next phase quickly but still needs to go back to it. 

### Phase Completion

Phase can be completed manually by clicking on the complete button.
When a storm event is completed, all the phases belonging to this event complete automatically.

</section>
</section>


<section id="Commit-Routes" markdown="1">

## Commit Routes

During phase activation process, Supervisors are able to make a decision which routes they would like to commit for work (such routes become committed).
Once the phase is active, supervisors/inspectors are able to commit more routes for work or choose to commit all non-committed routes within the phase for work as event progresses.

![Commit Routes](/images/soc/soc-event-management/commit-routes.png){: .width-xl}{: data-lightbox="8"}

</section>