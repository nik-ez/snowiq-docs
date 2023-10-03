---
layout: page
title: Truck Management
author: EastBanc Technologies
name: EastBanc Technologies
email: contact@eastbanctech.com
parent: Storm Operations Center
nav_order: 8
platform: false
comments: true
---



## Truck Management

The Truck Management module allows managing truck information, where the user can add profiles and update truck details, along with inspection and Certify/Decertify information.

![Truck Management](/images/soc/soc-truck-management/truck-management.png){: .width-xl}{: data-lightbox="1"}


### Filters

Using the filters at the top of the screen allows filtering of the trucks list by Truck Type, Status or Class.

### Sorting

Sorting of the truck list can be applied by clicking on the table headers. The truck list can be sorted by the following criteria: System ID, Internal Truck ID, Type, Company Name, Equipment Class, License plate, USDOT #, and Make.

### Adding a Truck

To add a new truck to the system, select the blue 'Add Truck' button on the top left part of the screen. On the new page, enter all truck details in the form and upload the truck picture and registration. Then select the 'Add Truck' button to save the truck in the system. If the form has been filled out correctly, the system will display the message "Truck successfully added".


## Truck Profile

Each truck has a profile in the system with details related to vehicle inspection, registration, and certification information. To open the truck profile, access the Truck Management page and select a Truck's line in the list.

![Truck Profile](/images/soc/soc-truck-management/truck-profile.png){: .width-xl}{: data-lightbox="2"}



### Editing Truck Information

To edit existing truck details, select the "Edit Truck Profile" button. Make necessary corrections in the form and then select 'Save Changes'. The system will display 'Success'. If the truck is currently in use on the active event, it cannot be edited and system will display an error message.

### Certify or Decertify a Truck

A newly created truck is certified by default. To certify a truck, Select the 'Certify' button. To decertify a truck, select the "Decertify" button. A decertification reason is mandatory to finish Decertification.

Depending on certification status, a truck can have different statuses:

| Active | Truck successfully passed inspection and has been certified by Supervisor. |
| Inactive | Truck has been uncertified because of a failed inspection. |
| In Review | Contractor's truck has been created and is waiting pending certification by the Contractor manager. |

