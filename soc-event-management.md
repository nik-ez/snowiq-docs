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

The Event Management page allows Admins to create new storm events, edit Event details, create Phases and Activities for Depots during an event, and to view Event Logs and Reports for each Event. 


![Event Management](/images/soc/soc-event-management/event-management.png){: .width-xl}{: data-lightbox="1"}

**Event Statuses**

| New | Not activated |
| Archived | Only viewable after archived |
| Active | Only one active event at a time |

<section id="Event-Creation" markdown="1">

## Event Creation

When a snow storm is approaching, to plan the event before it occurs (there are no restrictions in the system – 48 hours ahead should suffice), Admins can create a new storm event on the Event Management page by doing the following:

  * Click the orange 'Create New Storm Event' button as shown above. 
  * Enter details for the new event and select 'Create.'

![Event Creation](/images/soc/soc-event-management/event-creation.png){: .width-sm}{: data-lightbox="2"}

**Note:** Because the newly created Event is not yet active, it can be edited or deleted. Once the Event is Active, these these options are no longer available. 

<section id="Event-Activation" markdown="1">

## Event Activation

Once the creation of Phases and Assignments is completed, the next step is to activate the Event by doing the following:

* Navigate back to the Event Management page.
* Click 'Activate' as shown below and then select 'Activate' on the prompt.  

  ![Event Activation](/images/soc/soc-event-management/event-activation.png){: .width-xl}{: data-lightbox="11"}

* This step will activate the initial 'Monitoring' Phase in all of the depots. Now that the Event is Active, the next step is to select 'Phases,' which opens the Phase Management page. 


* On the Phase Management page, select the 'Activate/Resume Phase' (play button icon) as shown below to progress from the 'Monitoring Phase' to the next phase. 

  **Typically, it will be the Depot Supervisor's duty to move the phases forward during an Event. Once one Phase is completed, all Supervisors are notified in the Supervisor App (SA) on the iPad that the phase is completed.**

  **Only one active event can occur at a time; therefore, if the play buttons are grayed out, this indicates that another Event is already Active.**

* If another Phase is Active at the time of activation, such as the initial 'Monitoring' Phase in this case (status 'Active' as shown above), a prompt will be displayed to either complete the current active phase or pause it. Select 'Complete Active.' The Monitoring Phase must always be manually completed. 

* Pausing an Active Phase allows the system to retain the states of all assignments, including breadcrumbs. If the Phase is resumed, all assignments will resume from their previous state. Pausing an Active Phase is used when something occurs during a snow event that requires moving to the next phase quickly while retaining the ability to resume the previous phase. 

* This completes the Event Activation. A Supervisor can now begin monitoring the Event and Drivers can begin accepting Assignments. 


<section id="Event-Archivation" markdown="1">

## Event Archivation

Once the Event has been completed to an Admin's specifications, the Event can be closed by selecting the 'Archive' button, as shown below. Archiving officially closes the Event in the system and allows activation of another event. 

If there are active assignments, the system will display the prompt/warning shown below. If the user clicks 'Archive' on this prompt, the system, in addition to closing out the Event, will close out and mark as 'completed' all outstanding phases and assignments that were still in progress.

</section>
</section>
</section>
</section>
