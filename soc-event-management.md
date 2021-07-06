---
layout: page
title: Event Management
author: EastBanc Technologies
name: EastBanc Technologies
email: contact@eastbanctech.com
parent: Storm Operations Center
nav_order: 4
platform: false
comments: true
---

<section id="Event-Management" markdown="1">
# Event Management<a name="Event-Management"></a>

The Event Management page allows Admin users to create new storm events, edit Event details, create Phases, Activities for Depots during an event, as well as view Event Logs and Reports for each Event. 


![Screenshot 2021-03-05 080423](/image/portal/event-management.png)

<section id="Event-Creation" markdown="1">
## Event Creation<a name="Event-Creation"></a>

When a snow storm is approaching, to plan the event before it occurs (there are no restrictions in the system – 48 hours ahead should suffice), an Admin user can create a new storm event on the Event Management page by following the steps below:

  * Click the orange 'Create New Storm Event' button seen in the screenshot above. 
  * Enter values in all data fields in the prompt for 'New Event.' Click 'Create.'

![Screenshot 2021-03-05 080448](/image/portal/event-creation.png)

**Note:** Because the newly created Event isn't Active yet, editing (pencil icon), or deleting it ('Delete' icon), are available, as seen below. Once the Event is Active, these are no longer an option. 

![Screenshot 2021-03-05 080526](/image/portal/event-creation1.png)

**Event Statuses**

  * New - not activated
  * Archived - only viewable after archived
  * Active - only one active event at a time

<section id="Phase-Creation-and-Management" markdown="1">
### Phase Creation and Management<a name="Phase-Creation-and-Management"></a>

Phases are used during a storm Event to define specific Activities that allow proper planning of Assignments for Drivers. Once the newly created Event is on the list, as described in the previous section, the Admin user can create and manage Phases by following the steps below:

  * Click the blue 'Phases' button as seen below. This will navigate the user to the Phase Management page.

  **Note:** Although 'Phases' button is available for all Events listed, an Admin user can only create and manage Phases for Events with statuses 'New'and 'Active'

  **New - not activated.** 

  **Archived - once event archived it's just viewable.** 

  **Active - only 1 at a time.**

  ![Screenshot 2021-03-05 080601](/image/portal/phase-creation.png)

  * Once on the Phase Management page, the Admin user will see the screen below, with an already created Phase 'Monitoring.' 

  **Note:** All Depots will have the Monitoring Phase created automatically. The Monitoring Phase is for Depots and their teams to plan out the remaining phases and to observe the effects of the beginning of a Storm.
      
  * Click the orange 'Create New Phase' button at the top right of the page as seen below. 

  ![Screenshot 2021-03-05 080627](/image/portal/phase-creation1.png)

  * Enter values in all data fields in the prompt for 'New Phase.' Click 'Next.' See below on specific fields.
    * Activity: the dropdown specifies the types of activities that should occur within this Phase. An example of a Phase would be 'Plowing' - a Phase with an Activity set to 'Plowing' would prompt all Assignments and Drivers included in this phase to plow the routes.

  ![Screenshot 2021-03-05 080651](/image/portal/phase-creation2.png) 

 **Plan:** The dropdown currently includes two static plans with no ability to create others. A plan specifies to the system the types of roads to highlight on the route map and provides the ability to create assignments on the routes.

* Plan I - Salting
  * Step 1: Emergency+Primary
  * Step 2: Secondary
* Plan II - Plowing
   * Step 1: Emergency
    * Step 2: Primary+Secondary 

**Start Date and Completion Date:** Phases cannot overlap, so select the date and time of the new phase so it doesn't overlap with an already existing Phase (in this case, it would be the Monitoring Phase, but there can be more than just one existing Phase). Completion Date is an estimate in the system.

   ![Screenshot 2021-03-05 080720](/image/portal/phase-creation3.png)

  * On the next prompt 'Edit Driver Assignments,' click 'Add' to assign a specific Route to Drivers attached to the Depot. Routes are pre-populated based on the selected Depot from the previous step. Select multiple Drivers where appropriate.
    * If a Route Assignment may require several passes of the same activity, then check the 'Multi-Pass' box. Routes can be filtered by Emergency or Residential.

    ![Screenshot 2021-03-05 080742](/image/portal/edit-driver-assignments.png)

  * Once all Assignments are added, click 'Save Phase' to create the Phase in the Phase Management table.

    ![Screenshot 2021-03-05 080808](/image/portal/edit-driver-assignments1.png)

  * This will navigate back to Phase Management page, where the newly created Phase is listed with the status 'New.' The following Phase management options are available: edit the Phase details (pencil icon), edit driver assignments (snow plow icon), activate the phase (play icon), and delete a phase (X icon).

    ![Screenshot 2021-03-05 080838](/image/portal/phase-creation4.png)
</section>
</section>

<section id="Event-Activation-and-Phase-Activation" markdown="1">
## Event Activation and Phase Activation<a name="Event-Activation-and-Phase-Activation"></a>

Once the creation of Phases and Assignments is completed, the next step is to activate the Event, by following the steps below:

* Navigate back to the Event Management page.
* Click 'Activate' as seen below. Click 'Activate' on the prompt.  

  ![Screenshot 2021-03-05 080930](/image/portal/event-activation.png)   

* This step will activate the initial 'Monitoring' Phase in all of the depots. Now that the Event is Active, the next step is to click 'Phases,' which opens the Phase Management page. 

  ![Screenshot 2021-03-05 080954](/image/portal/phase-activation.png)

* On the Phase Management page, click 'Activate/Resume Phase' (play button icon), as shown below, to activate the other phase to move forward from the initial 'Monitoring Phase.'

  **Typically, it will be the Depot Supervisor's duty to move the phases forward during an Event. Once one Phase is completed, all Supervisors are notified in the Supervisor App (SA) on the iPad the phase is completed.**

  **Only one active event can occur at a time, therefore if the play buttons are grayed out, that means another Event is already Active.**

    
   ![Screenshot 2021-03-05 081024](/image/portal/phase-activation1.png)

* If another Phase is Active at the time of activation, like the initial 'Monitoring' Phase in this case (status 'Active' in the screenshot above), a prompt will be shown to either complete the current active phase or pause it. Click 'Complete Active.' The Monitoring Phase must always be manually completed. 

* Pausing an Active Phase allows to retain the states of all assignments, including breadcrumbs. If the Phase is resumed, all assignments will resume from their previous state. Pausing an Active Phase is used in case something occurred during a snow event that required moving to the next phase quickly but still needing to go back to it. 

  ![Screenshot 2021-03-05 081046](/image/portal/phase-activation2.png)

* This completes the Event Activation. This means the Supervisor can begin monitoring the Event and Drivers can begin accepting Assignments. 
</section>

<section id="Event-Archiving" markdown="1">
## Event Archiving<a name="Event-Archiving"></a>

Once the Event has been completed to the Admin's specifications, the Event can be closed out by clicking the 'Archive' button, as shown below. Archiving officially closes the Event in the system and allows activation of another event. 

![Screenshot 2021-03-05 081139](/image/portal/archiving-event1.png)

If there are active assignments, the system will prompt with a warning as shown below. If the user clicks 'Archive' on this prompt, the system, in addition to closing out the Event, will close out and mark as 'completed' all outstanding phases and assignments that were still in progress.

![Screenshot 2021-03-05 081216](/image/portal/archiving-event.png)
</section>

<section id="Event-Log" markdown="1">
## Event Log<a name="Event-Log"></a>

The Event Log button, as shown below, allows users to view all actions taken during a Storm Event, wqhich includes assignment/event status changes, driver status changes, etc. More details can be found on **SOC - Active Storm Log/Report**

![Screenshot 2021-03-05 081243](/image/portal/event-log1.png)
</section>

<section id="Event-Report" markdown="1">
## Event Report<a name="Event-Report"></a>

The Reports button, as shown below, provides a visual representation of statistical data in a dashboard format for the selected Event. More details can be found on **SOC - Active Storm Log/Report**

![Screenshot 2021-03-05 081310](/image/portal/event-report.png)
</section>
</section>
