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

| New | Newly created, not activated Phase. |
| Active | Manually activated Phase (event can have several active phases at the time). |
| Completed | Manually completed by Supervisor user. |
| Archived | Status after event archivation. |

<section id="Phase-Creation" markdown="1">

## Phase Creation

The "Monitoring" Phase for each depot is created automatically with each event.

The Phase creation process has two steps: specify Phase details and Assignments Planning.

To create a new phase click on the "Add Phase" button.

![Phase Creation](/images/soc/soc-event-management/add-phase.png){: .width-xl}{: data-lightbox="7"}

Fill out all the information on the form and click the "Add Phase" button. The system will then redirect you to the Assignment Planning screen.

</section>



<section id="Assignments-Planning" markdown="1">

## Assignments Planning

The Assignments Planning screen allows the user to plan and specify work on routes.

It is a necessary step during the phase creation process.

It has two view modes: "By Route" and "By Resource".

### By Route

The By Route screen is a default view mode.

![By Route Assignments](/images/soc/soc-event-management/edit-driver-assignments.png){: .width-xl}{: data-lightbox="8"}

The By Route screen allows a user to add Resources to Routes and specify Inspectors.


### By Resource

To display the "By Resource" view mode, click on the switch under the Phase details in the top left corner of the screen.

![By Resource Assignments](/images/soc/soc-event-management/edit-driver-assignments1.png){: .width-xl}{: data-lightbox="9"}

On the By Resource screen, a user can add resources to the event and specify routes for each resource to work on.
Additionally, after adding a resource, a track can be assigned here if a driver doesn't have a truck.

To complete the assignment planning process, click on the "Save Assagnments" button, and Progress will be saved in the system. 

If the assignment planning was part of the phase creation process, clicking the "Save Assignments" button uses will redirect the user to the Phase Management screen and a new phase will be created and will appear in the list.

</section>




<section id="Phase-Activation" markdown="1">

## Phase Activation

Phases can be activated only when the storm event they belong to is active.

All default 'Monitoring' phases in all depots will be activated automatically with a storm event.

Typically, it will be the Depot Supervisor's duty to move the phases forward during an Event. Once one Phase is completed, all Supervisors are notified in the Supervisor App (SA) on the iPad the phase is completed.

To activate a newly created phase, click the Play button.

![Phase Activation](/images/soc/soc-event-management/phase-activation.png){: .width-xl}{: data-lightbox="11"}

Several phrases can be active simultaneously.
However, during the phase activation process a user can complete an active phase by checking it. This is a convenient way to move through the phase management workflow.


### Phase Pause

Phases can also be paused. This allows retention of the states of all assignments. When a Phase is resumed, all assignments will resume from their previous state. Pausing an Active Phase is used in case something occurred during a snow event that required moving to the next phase quickly while allowing the user to return and resume work on a previous phase. 

### Phase Completion

A Phase can be completed manually by clicking on the Complete button.
When a storm event is completed, all the phases belonging to this event complete automatically.

</section>
</section>


<section id="Commit-Routes" markdown="1">

## Commit Routes

During phase activation process, Supervisors are able to make a decision which routes they would like to commit for work (such routes become committed).
Once the phase is active, supervisors/inspectors are able to commit more routes for work or choose to commit all non-committed routes within the phase for work as an event progresses.

![Commit Routes](/images/soc/soc-event-management/commit-routes.png){: .width-xl}{: data-lightbox="8"}

</section>
