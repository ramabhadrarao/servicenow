<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# give another set of question paper

Based on the information gathered, here is a comprehensive second model question paper for ServiceNow CSA and CAD certification exams with a focus on JavaScript concepts.[^1][^2][^3]

***

# ServiceNow Model Question Paper 2: Advanced JavaScript Concepts

## For CSA and CAD Certification Exams

### Section A: Business Rules (50 marks)

**Question 1:** What is a Business Rule in ServiceNow?[^1]

a) A client-side script that validates form data
b) A server-side script that runs when specific conditions are met
c) A UI component that controls field visibility
d) A workflow activity that automates processes

**Answer:** b) A server-side script that runs when specific conditions are met

***

**Question 2:** When does a "Before" Business Rule execute?[^1]

a) Before the form is displayed to the user
b) After the user submits the form but before any database action occurs
c) After the record is saved to the database
d) When the scheduler processes a job

**Answer:** b) After the user submits the form but before any database action occurs

***

**Question 3:** What is the purpose of an "After" Business Rule?[^1]

a) To validate data before saving
b) To execute after the record is saved to the database
c) To display messages on the form
d) To prevent form submission

**Answer:** b) To execute after the record is saved to the database

***

**Question 4:** Which of the following is a limitation of asynchronous Business Rules?[^1]

a) They cannot access database tables
b) They do not have access to the previous version of a record
c) They always execute before synchronous rules
d) They cannot use GlideRecord

**Answer:** b) They do not have access to the previous version of a record

***

**Question 5:** What method should be used to avoid recursive Business Rules?[^1]

```javascript
var gr = new GlideRecord('incident');
gr.get(sys_id);
gr.priority = 1;
gr.________();
gr.update();
```

a) setRecursive(false)
b) setWorkflow(false)
c) disableRules()
d) stopRecursion()

**Answer:** b) setWorkflow(false)

***

**Question 6:** What is the purpose of the g_scratchpad object?[^1]

a) To temporarily store deleted records
b) To pass data from the server to the client in display rules
c) To cache database queries
d) To store user preferences

**Answer:** b) To pass data from the server to the client in display rules

***

**Question 7:** How do you prevent automatic updates to system fields in a Business Rule?[^1]

a) current.skipSysFields()
b) current.autoSysFields(false)
c) current.disableSystemFields()
d) gs.setAutoFields(false)

**Answer:** b) current.autoSysFields(false)

***

**Question 8:** What is the correct way to abort a database operation in a Business Rule?[^1]

a) return false;
b) gs.abortAction();
c) current.setAbortAction(true);
d) current.cancel();

**Answer:** c) current.setAbortAction(true);

***

**Question 9:** Which method is used to add an error message and prevent form submission?[^1]

a) gs.addMessage()
b) gs.addErrorMessage()
c) g_form.addErrorMessage()
d) current.addError()

**Answer:** b) gs.addErrorMessage()

***

**Question 10:** What is the "Order" field used for in Business Rules?[^1]

a) To organize rules alphabetically
b) To determine the sequence of execution when multiple rules are present
c) To prioritize rules based on importance
d) To sort rules by creation date

**Answer:** b) To determine the sequence of execution when multiple rules are present

***

### Section B: Script Includes (40 marks)

**Question 11:** Which script always executes on the server side?[^3]

a) Client Scripts
b) UI Policies
c) Business Rules
d) UI Actions (client-side)

**Answer:** c) Business Rules

***

**Question 12:** What is the primary purpose of a Script Include?[^3]

a) To execute client-side validation
b) To provide a centralized location for reusable functions
c) To define UI components
d) To create database tables

**Answer:** b) To provide a centralized location for reusable functions

***

**Question 13:** How many functions can be stored in a classless Script Include?[^3]

a) Unlimited
b) Only one function
c) Up to five functions
d) At least two functions

**Answer:** b) Only one function

***

**Question 14:** What is true about a Script Include with a Protection Policy value of "Protected"?[^3]

a) Any user can edit it
b) It can only be edited by users with the admin role
c) The Protection Policy is applied only if the application is downloaded from the ServiceNow App Store
d) It is automatically encrypted

**Answer:** c) The Protection Policy is applied only if the application is downloaded from the ServiceNow App Store

***

**Question 15:** When should Script Includes be used instead of global Business Rules?[^2][^1]

a) When you need to execute on every page load
b) Script Includes are loaded only on request, improving performance
c) When you need to access the current object
d) Script Includes are faster than Business Rules

**Answer:** b) Script Includes are loaded only on request, improving performance

***

**Question 16:** What is NOT required when creating a Utils Script Include?[^3]

a) Create a class
b) Script the function(s)
c) Identify the table
d) Create a prototype object from the new class

**Answer:** c) Identify the table

***

### Section C: UI Policies and UI Actions (50 marks)

**Question 17:** What is the purpose of UI Policies in ServiceNow?[^4][^5]

a) To control server-side business logic
b) To dynamically change form behavior based on conditions
c) To create custom reports
d) To manage user permissions

**Answer:** b) To dynamically change form behavior based on conditions

***

**Question 18:** Which statement is true about UI Policy execution order?[^3]

a) Scripts execute before Actions
b) Actions execute before Scripts
c) They execute simultaneously
d) Execution order is random

**Answer:** b) Actions execute before Scripts

***

**Question 19:** What can UI Policies control? (Choose three)[^6][^5]

a) Field visibility
b) Field mandatory state
c) Database record creation
d) Field read-only state

**Answer:** a, b, and d

***

**Question 20:** Which of the following is NOT a UI Action type?[^3]

a) Form button
b) List banner button
c) List choice
d) Form choice

**Answer:** d) Form choice

***

**Question 21:** Where can UI Actions be placed?[^6]

a) Only on forms
b) Only on lists
c) On forms, lists, and related lists
d) Only on context menus

**Answer:** c) On forms, lists, and related lists

***

**Question 22:** Which script type does NOT always run on the server side?[^3]

a) Business Rules
b) UI Actions
c) Script Actions
d) Scheduled Jobs

**Answer:** b) UI Actions

***

### Section D: Client-Side APIs and Debugging (50 marks)

**Question 23:** Which of the following is part of the client-side scripting API?[^3]

a) GlideSystem Object (gs)
b) GlideUser Object (g_user)
c) current and previous objects
d) workflow.scratchpad

**Answer:** b) GlideUser Object (g_user)

***

**Question 24:** Which is NOT a valid debugging strategy for client-side scripts?[^7][^3]

a) g_form.addInfoMessage()
b) Field Watcher
c) jslog()
d) gs.log()

**Answer:** d) gs.log()

***

**Question 25:** Which method prints a message on a blue background to the top of a form?[^3]

a) g_form.addInfoMsg()
b) g_form.addInfoMessage()
c) g_form.showFieldMessage()
d) g_form.showFieldMsg()

**Answer:** b) g_form.addInfoMessage()

***

**Question 26:** Where can GlideUser (g_user) methods be used?[^3]

a) Client Scripts and UI Policies only
b) Business Rules only
c) Client Scripts, UI Policies, and UI Actions
d) Business Rules and Script Includes

**Answer:** c) Client Scripts, UI Policies, and UI Actions

***

**Question 27:** Which method returns true only if the logged-in user has the catalog_admin role and no other roles?[^3]

a) g_user.hasRole('catalog_admin')
b) g_user.hasRoleExactly('catalog_admin')
c) g_user.hasRoleOnly('catalog_admin')
d) g_user.hasRoleFromList('catalog_admin')

**Answer:** b) g_user.hasRoleExactly('catalog_admin')

***

**Question 28:** In a Business Rule, which method checks if the currently logged-in user has the admin role?[^3]

a) g_form.hasRoleExactly('admin')
b) gs.hasRole('admin')
c) g_form.hasRole('admin')
d) g_user.hasRole('admin')

**Answer:** b) gs.hasRole('admin')

***

**Question 29:** Which objects can be used in a Scheduled Script Execution (Scheduled Job) script?[^3]

a) GlideRecord and current
b) GlideUser and GlideRecord
c) GlideSystem and GlideRecord
d) GlideSystem and current

**Answer:** c) GlideSystem and GlideRecord

***

**Question 30:** Which object does a Display Business Rule NOT have access to?[^3]

a) previous
b) GlideSystem
c) g_scratchpad
d) current

**Answer:** a) previous

***

### Section E: Access Controls and Application Scope (50 marks)

**Question 31:** When evaluating Access Controls, ServiceNow searches:[^3]

a) Only for matches on the current table
b) Only for matches on the current field
c) From the most specific match to the most generic match
d) From the most generic match to the most specific match

**Answer:** c) From the most specific match to the most generic match

***

**Question 32:** Which methods are useful in Access Control scripts?[^3]

a) g_user.hasRole() and current.isNewRecord()
b) gs.hasRole() and current.isNewRecord()
c) g_user.hasRole() and current.isNew()
d) gs.hasRole() and current.isNew()

**Answer:** b) gs.hasRole() and current.isNewRecord()

***

**Question 33:** What is the baseline behavior of a table in a privately-scoped application?[^3]

a) The table and its data are not accessible using web services
b) Any Business Rule can read, write, delete, and update from the table
c) Only artifacts in the table's application can read from the table
d) All application scopes can read from the table

**Answer:** d) All application scopes can read from the table

***

**Question 34:** How must Application Access be configured to prevent all other private application scopes from creating configuration records?[^3]

a) Create Access Controls to prevent all other application scopes
b) Set Accessible from to "All application scopes" and deselect Can create
c) Set Accessible from to "This application scope only" and deselect web services option
d) Set Accessible from to "This application scope only"

**Answer:** d) Set Accessible from to "This application scope only"

***

**Question 35:** What is NOT the purpose of application scoping?[^3]

a) Provide a relationship between application artifacts
b) Provide a way of tracking the user who developed an application
c) Provide a namespace to prevent cross-application name collisions
d) Provide controls for how scripts from another scope can alter tables

**Answer:** b) Provide a way of tracking the user who developed an application

***

**Question 36:** When creating new application files in a scoped application, cross-scope access is turned on by default for:[^3]

a) REST messages
b) Tables
c) Script Includes
d) Workflows

**Answer:** b) Tables

***

### Section F: Data Management and Integration (40 marks)

**Question 37:** Which platform feature determines the relationship between a field in an import set table and a field in an existing ServiceNow table?[^3]

a) Business Service Management Map
b) Transform Map
c) Data Sources
d) CI Relationship Builder

**Answer:** b) Transform Map

***

**Question 38:** What is one use of the ServiceNow REST API Explorer?[^3]

a) Practice using REST to interact with public data providers
b) Find resources on the web for learning about REST
c) Convert SOAP Message functions to REST methods
d) Create sample code for sending REST requests to ServiceNow

**Answer:** d) Create sample code for sending REST requests to ServiceNow

***

**Question 39:** When ServiceNow requests information from a web service, ServiceNow is the web service:[^3]

a) Publisher
b) Specialist
c) Provider
d) Consumer

**Answer:** d) Consumer

***

**Question 40:** When configuring a REST Message, the Endpoint is:[^3]

a) The commands to the REST script to stop execution
b) The URI of the data to be accessed, queried, or modified
c) Information about the format of the returned data
d) The response from the provider indicating there is no data to send back

**Answer:** b) The URI of the data to be accessed, queried, or modified

***

### Section G: Advanced Topics (50 marks)

**Question 41:** What is the fastest way to create and configure a Record Producer?[^3]

a) Create a Catalog Category and select Add New Record Producer
b) Use the Record Producer module and add all variables manually
c) Open the table and select the Add to Service Catalog Related Link
d) Right-click on the form header and select Create Record Producer

**Answer:** c) Open the table and select the Add to Service Catalog Related Link

***

**Question 42:** What syntax is used in a Record Producer script to access values from form fields?[^3]

a) producer.field_name
b) producer.variable_name
c) current.variable_name
d) current.field_name

**Answer:** b) producer.variable_name

***

**Question 43:** Which client-side script applies to Record Producers?[^3]

a) Catalog Client Scripts and Catalog UI Policies
b) UI Scripts and UI Actions
c) UI Scripts and Record Producer Scripts
d) Client Scripts and UI Policies

**Answer:** a) Catalog Client Scripts and Catalog UI Policies

***

**Question 44:** In an Email Notification, what is NOT true for the Weight field?[^3]

a) Only notifications with the highest weight for the same record and recipients are sent
b) A Weight value of zero means that no email should be sent
c) The Weight value defaults to zero
d) A Weight value of zero means the notification is always sent when criteria is met

**Answer:** b) A Weight value of zero means that no email should be sent

***

**Question 45:** What syntax references event properties in Email Notification content?[^3]

a) \${event.<property name>}
b) \${current.<property name>}
c) \${property name>.getDisplayValue()}
d) \${gs.<property name>}

**Answer:** a) \${event.<property name>}

***

**Question 46:** A scoped application containing Flow Designer content dedicated to a particular application is called a(n):[^3]

a) Spoke
b) Bundle
c) Action Way
d) Flow

**Answer:** a) Spoke

***

**Question 47:** The source control operation used to store local changes on an instance for later application is called:[^3]

a) Tag
b) Stash
c) Update Set
d) Branch

**Answer:** b) Stash

***

**Question 48:** Which role grants access to source control repository operations?[^3]

a) Admin and source_control
b) Git_admin
c) Source_control_admin
d) Repository_admin

**Answer:** a) Admin and source_control

***

**Question 49:** What is NOT required to link a ServiceNow application to a Git repository?[^3]

a) Password
b) URL
c) User name
d) Application name

**Answer:** d) Application name

***

**Question 50:** In ServiceNow Studio, once an application is linked to source control, what is the default branch value?[^3]

a) Master
b) sn_instance/<instance_name>
c) sn_instance/master
d) <instance_name>

**Answer:** b) sn_instance/<instance_name>

***

### Section H: Scenario-Based Questions (40 marks)

**Question 51:** You need to validate incident data before saving and prevent submission if urgency is less than 1. Which Business Rule type should you use?[^1]

a) After
b) Before
c) Async
d) Display

**Answer:** b) Before

***

**Question 52:** A developer wants to send notifications after an incident is resolved. Which Business Rule timing is most appropriate?[^1]

a) Before
b) Display
c) After
d) Query

**Answer:** c) After

***

**Question 53:** You need to pass data from server to client when a form loads. What should you use?[^1]

a) GlideAjax
b) g_scratchpad in Display Business Rule
c) current object
d) GlideRecord query

**Answer:** b) g_scratchpad in Display Business Rule

***

**Question 54:** What is true about extending an existing table?[^3]

a) The parent table's Access Controls are evaluated
b) The new table inherits the functionality built into the parent table
c) The new table inherits all fields from the parent table
d) You must script and configure all required behaviors

**Answer:** Options a, b, and c are true; d is NOT true

***

**Question 55:** Which cannot be debugged using Field Watcher?[^3]

a) Business Rules
b) Script Includes
c) Client Scripts
d) Access Controls

**Answer:** b) Script Includes

***

### Answer Key Summary

| Question | Answer | Question | Answer | Question | Answer | Question | Answer |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| 1 | b | 15 | b | 29 | c | 43 | a |
| 2 | b | 16 | c | 30 | a | 44 | b |
| 3 | b | 17 | b | 31 | c | 45 | a |
| 4 | b | 18 | b | 32 | b | 46 | a |
| 5 | b | 19 | a,b,d | 33 | d | 47 | b |
| 6 | b | 20 | d | 34 | d | 48 | a |
| 7 | b | 21 | c | 35 | b | 49 | d |
| 8 | c | 22 | b | 36 | b | 50 | b |
| 9 | b | 23 | b | 37 | b | 51 | b |
| 10 | b | 24 | d | 38 | d | 52 | c |
| 11 | c | 25 | b | 39 | d | 53 | b |
| 12 | b | 26 | c | 40 | b | 54 | d |
| 13 | b | 27 | b | 41 | c | 55 | b |
| 14 | c | 28 | b | 42 | b |  |  |


***

### Key Focus Areas for Exam Preparation

**Business Rules Mastery:**[^2][^1]

- Understanding execution timing (Before, After, Async, Display)
- Preventing recursive business rules with setWorkflow(false)
- Using current, previous, and g_scratchpad objects effectively
- Implementing proper error handling and validation

**Script Includes Best Practices:**[^3]

- Creating reusable server-side functions
- Understanding classless vs. class-based Script Includes
- Performance optimization through lazy loading
- Protection policies and application scoping

**UI Components:**[^5][^4][^6]

- Differentiating between UI Policies and UI Actions
- Understanding execution order of Actions vs. Scripts
- Controlling field visibility, mandatory state, and read-only attributes
- Creating dynamic form behaviors without scripting

**Client vs. Server-Side Scripting:**[^8][^3]

- Identifying appropriate APIs for each environment
- Understanding debugging strategies for both sides
- Using g_user, g_form (client) vs. gs, current (server)
- Implementing proper data passing between client and server

**Application Scope and Security:**[^3]

- Configuring Application Access settings properly
- Understanding Access Control evaluation order
- Managing cross-scope access and permissions
- Implementing role-based security checks

This model paper covers the most critical JavaScript-related topics tested in both CSA and CAD exams, with emphasis on practical Business Rules, Script Includes, UI components, and application development best practices.[^8][^1][^3]
<span style="display:none">[^10][^11][^12][^13][^14][^15][^16][^17][^18][^19][^20][^9]</span>

<div align="center">⁂</div>

[^1]: https://servicenowspectaculars.com/servicenow-scripting-interview-questions-2025-part-3/

[^2]: https://servicenowspectaculars.com/servicenow-scripting-interview-questions-2024-part-2/

[^3]: https://www.basicoservicenowlearning.in/2025/01/servicenow-cad-exam-practice.html

[^4]: https://www.finalroundai.com/interview-questions/servicenow-dev-ui-policies-actions

[^5]: https://www.youtube.com/watch?v=gtBsqbNOqKk

[^6]: https://www.scribd.com/presentation/667144242/2-UI-Policy-UI-Action

[^7]: https://www.examcollection.com/CAD-dumps.html

[^8]: https://www.reddit.com/r/servicenow/comments/mh68vp/i_passed_cad_exam_today/

[^9]: https://www.youtube.com/watch?v=Qg8-AtgrR7Q

[^10]: https://www.examtopics.com/discussions/servicenow/view/70920-exam-csa-topic-1-question-98-discussion/

[^11]: https://www.servicenow.com/community/developer-forum/business-rule-interview-questions/m-p/2688425

[^12]: https://nowfindsolution.com/business-rules-servicenow-interview-questions/

[^13]: https://www.finalroundai.com/blog/servicenow-interview-questions

[^14]: https://www.servicenow.com/docs/bundle/washingtondc-application-development/page/build/professional-developer-guide/concept/business-rules-and-script-includes.html

[^15]: https://www.servicenow.com/community/developer-forum/ui-policy-best-practice-question/m-p/1346311

[^16]: https://www.scribd.com/document/562984385/ServiceNow-Certified-System-Administrator-CSA-Practice-Test-Set-18

[^17]: https://www.youtube.com/watch?v=03OVp4vzO7Q

[^18]: https://snbuddy.com/snib_ui_policy_queries.php

[^19]: https://www.dumpsbase.com/freedumps/servicenow-cad-dumps-v15-02-with-real-cad-exam-questions-for-learning-read-cad-free-dumps-part-1-q1-q40.html

[^20]: https://snbuddy.com/snib_script_include_questions.php

