---
layout: page
title: Event Management
author: EastBanc Technologies
name: EastBanc Technologies
email: contact@eastbanctech.com
parent: Storm Operations Center
nav_order: 5
platform: false
comments: true
---

<section id="Event-Management" markdown="1">

# Event Management

The Event Management page allows Admin users to create new storm events, edit Event details, create Phases and Activities for Depots during an event, and to view Event Logs and Reports for each Event. 


![Event Management](/images/soc/soc-event-management/event-management.png){: .width-xl}{: data-lightbox="1"}

**Event Statuses**

| New | Not activated |
| Archived | Only viewable after archived |
| Active | Only one active event at a time |

<section id="Event-Creation" markdown="1">

## Event Creation

When a snow storm is approaching, to plan the event before it occurs (there are no restrictions in the system – 48 hours ahead should suffice), an Admin user can create a new storm event on the Event Management page by following the steps below:

  * Click the orange 'Create New Storm Event' button seen in the screenshot above. 
  * Enter values in all data fields in the prompt for 'New Event.' Click 'Create.'

![Event Creation](/images/soc/soc-event-management/event-creation.png){: .width-sm}{: data-lightbox="2"}

**Note:** Because the newly created Event isn't Active yet, it can be edited or deleted. Once the Event is Active, these these options are no longer available. 

<section id="Event-Activation" markdown="1">

## Event Activation

Once the creation of Phases and Assignments is completed, the next step is to activate the Event by following the steps below:

* Navigate back to the Event Management page.
* Click 'Activate' as seen below. Click 'Activate' on the prompt.  

  ![Event Activation](/images/soc/soc-event-management/event-activation.png){: .width-xl}{: data-lightbox="11"}

* This step will activate the initial 'Monitoring' Phase in all of the depots. Now that the Event is Active, the next step is to click 'Phases,' which opens the Phase Management page. 


* On the Phase Management page, click 'Activate/Resume Phase' (play button icon), as shown below, to activate the other phase to move forward from the initial 'Monitoring Phase.'

  **Typically, it will be the Depot Supervisor's duty to move the phases forward during an Event. Once one Phase is completed, all Supervisors are notified in the Supervisor App (SA) on the iPad that the phase is completed.**

  **Only one active event can occur at a time, therefore if the play buttons are grayed out, that means another Event is already Active.**

* If another Phase is Active at the time of activation, like the initial 'Monitoring' Phase in this case (status 'Active' in the screenshot above), a prompt will be shown to either complete the current active phase or pause it. Click 'Complete Active.' The Monitoring Phase must always be manually completed. 

* Pausing an Active Phase allows the system to retain the states of all assignments, including breadcrumbs. If the Phase is resumed, all assignments will resume from their previous state. Pausing an Active Phase is used when something occurs during a snow event that requires moving to the next phase quickly while retaining the ability to resume the previous phase. 

* This completes the Event Activation. This means the Supervisor can begin monitoring the Event and Drivers can begin accepting Assignments. 


<section id="Event-Archivation" markdown="1">

## Event Archivation

Once the Event has been completed to the Admin's specifications, the Event can be closed by clicking the 'Archive' button, as shown below. Archiving officially closes the Event in the system and allows activation of another event. 

If there are active assignments, the system will prompt with a warning as shown below. If the user clicks 'Archive' on this prompt, the system, in addition to closing out the Event, will close out and mark as 'completed' all outstanding phases and assignments that were still in progress.

</section>
</section>
</section>
</section>
