<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# serviceNow related model question paper with answers ( for CSA and CAD serviceNow exams purpose) ---- give model question paper 1 -- related to javascript

Based on the information gathered about ServiceNow CSA and CAD exams with a focus on JavaScript, here is a comprehensive model question paper covering JavaScript-related topics for ServiceNow certification exams.[^1][^2][^3]

***

# ServiceNow Model Question Paper 1: JavaScript Fundamentals

## For CSA and CAD Certification Exams

### Section A: JavaScript Basics and APIs (40 marks)

**Question 1:** What is the scripting language used in ServiceNow?[^4]

a) Java
b) AngularJS
c) JavaScript
d) Jelly

**Answer:** c) JavaScript

***

**Question 2:** Which server-side object provides methods for working with dates when writing a script in a privately scoped application?[^2]

a) GlideDateTime
b) GlideRecord
c) GlideSystem
d) current

**Answer:** a) GlideDateTime

***

**Question 3:** Which of the following scripts do not always run on the server side?[^2]

a) Script Includes
b) Business Rule
c) UI Action
d) Script Action

**Answer:** c) UI Action

***

**Question 4:** When writing a Client Script to provide feedback targeted at a specific field, which method should be used?[^2]

a) g_form.showInfoMessage()
b) g_form.showFieldMsg()
c) g_form.addInfoMessage()
d) g_form.addFieldMsg()

**Answer:** b) g_form.showFieldMsg()

***

### Section B: GlideRecord Queries (60 marks)

**Question 5:** What is the correct syntax to create a GlideRecord object for the incident table?[^5][^6]

a) `var gr = GlideRecord('incident');`
b) `var gr = new GlideRecord('incident');`
c) `var gr = new glideRecord('incident');`
d) `var gr = GlideRecord.new('incident');`

**Answer:** b) `var gr = new GlideRecord('incident');`

***

**Question 6:** Which method is used to execute a GlideRecord query?[^5]

a) execute()
b) query()
c) run()
d) fetch()

**Answer:** b) query()

***

**Question 7:** What method would you use to retrieve a single record when you know its sys_id?[^5]

```javascript
var gr = new GlideRecord('incident');
gr.______(sys_id);
```

a) fetch()
b) retrieve()
c) get()
d) find()

**Answer:** c) get()

***

**Question 8:** How would you query for all incidents where priority is greater than 1?[^6]

```javascript
var gr = new GlideRecord('incident');
gr.addQuery('priority', '___', 1);
gr.query();
```

a) 'GT'
b) '>'
c) 'GREATER'
d) '=>'

**Answer:** b) '>'

***

**Question 9:** Which method is used to iterate through GlideRecord results?[^5]

```javascript
var gr = new GlideRecord('incident');
gr.query();
while(gr.______()) {
    // Process records
}
```

a) hasNext()
b) next()
c) iterate()
d) moveNext()

**Answer:** b) next()

***

**Question 10:** How do you add an OR condition to a GlideRecord query?[^5]

```javascript
var gr = new GlideRecord('incident');
gr.addQuery('priority', 1).________('priority', 2);
gr.query();
```

a) addOrQuery()
b) orCondition()
c) addOrCondition()
d) addOR()

**Answer:** c) addOrCondition()

***

### Section C: Client-Side vs Server-Side Scripting (40 marks)

**Question 11:** Which API cannot be used on the client side?[^7][^1]

a) g_form
b) GlideRecord (synchronous)
c) g_user
d) alert()

**Answer:** b) GlideRecord (synchronous) - Best practice is to avoid synchronous GlideRecord on client side

***

**Question 12:** Which of the following is a server-side scripting option?[^8][^7]

a) Client Scripts
b) UI Policies
c) Business Rules
d) UI Actions (client-side)

**Answer:** c) Business Rules

***

**Question 13:** What is the best practice for querying database records from a client script?[^6]

a) Use GlideRecord directly in the client script
b) Use GlideAjax to call a Script Include
c) Use g_form.getValue() for all queries
d) Directly access the database using SQL

**Answer:** b) Use GlideAjax to call a Script Include

***

**Question 14:** Which client-side API is used to get the current logged-in user's name?[^7]

a) gs.getUser()
b) g_user.getUserName()
c) current.user_name
d) g_form.getUser()

**Answer:** b) g_user.getUserName()

***

### Section D: GlideRecord Operations (60 marks)

**Question 15:** What is the correct way to insert a new incident record?[^5]

```javascript
var gr = new GlideRecord('incident');
gr.________();
gr.short_description = 'Network issue';
gr.insert();
```

a) create()
b) initialize()
c) new()
d) prepare()

**Answer:** b) initialize()

***

**Question 16:** Which method is used to update a record without triggering business rules?[^5]

a) gr.updateWithoutRules()
b) gr.setWorkflow(false)
c) gr.skipBusinessRules(true)
d) gr.disableRules()

**Answer:** b) gr.setWorkflow(false)

***

**Question 17:** How do you delete multiple records matching a query?[^5]

```javascript
var gr = new GlideRecord('incident');
gr.addQuery('active', false);
gr._________();
```

a) deleteAll()
b) deleteMultiple()
c) removeAll()
d) deleteRecords()

**Answer:** b) deleteMultiple()

***

**Question 18:** Which method limits the number of records returned by a query?[^5]

a) setMaxRows()
b) limitResults()
c) setLimit()
d) maxRecords()

**Answer:** c) setLimit()

***

**Question 19:** What method returns the count of records in a query result?[^5]

a) getCount()
b) countRows()
c) getRowCount()
d) size()

**Answer:** c) getRowCount()

***

**Question 20:** How do you query for records where a field is empty?[^5]

```javascript
var gr = new GlideRecord('incident');
gr.________('short_description');
gr.query();
```

a) addEmptyQuery()
b) addNullQuery()
c) isNull()
d) checkNull()

**Answer:** b) addNullQuery()

***

### Section E: Advanced GlideRecord Concepts (50 marks)

**Question 21:** What is an encoded query used for?[^5]

a) Encrypting sensitive data
b) Creating complex query strings from filters
c) Encoding special characters
d) Compressing query results

**Answer:** b) Creating complex query strings from filters

***

**Question 22:** Which method would you use to apply an encoded query string?[^5]

```javascript
var gr = new GlideRecord('incident');
var query = 'active=true^priority=1';
gr._________(query);
gr.query();
```

a) setEncodedQuery()
b) applyQuery()
c) addEncodedQuery()
d) useEncodedQuery()

**Answer:** c) addEncodedQuery()

***

**Question 23:** What does the GlideAggregate class extend?[^5]

a) GlideSystem
b) GlideRecord
c) GlideElement
d) GlideQuery

**Answer:** b) GlideRecord

***

**Question 24:** Which aggregation function is NOT supported by GlideAggregate?[^5]

a) COUNT
b) SUM
c) MEDIAN
d) AVG

**Answer:** c) MEDIAN

***

**Question 25:** How do you get a reference record from a reference field?[^5]

```javascript
var caller = current.caller_id._________();
```

a) getReference()
b) getRefRecord()
c) getReferenceRecord()
d) fetchReference()

**Answer:** b) getRefRecord()

***

### Section F: Scenario-Based Questions (50 marks)

**Question 26:** You need to update all active incidents to inactive without triggering business rules or updating system fields. Which combination of methods should you use?[^5]

a) setWorkflow(true), autoSysFields(true)
b) setWorkflow(false), autoSysFields(false)
c) skipRules(true), skipSysFields(true)
d) disableWorkflow(), disableAutoFields()

**Answer:** b) setWorkflow(false), autoSysFields(false)

***

**Question 27:** Which operator would you use to find all incidents where the short description contains the word "Error"?[^5]

a) LIKE
b) INCLUDES
c) CONTAINS
d) HAS

**Answer:** c) CONTAINS

***

**Question 28:** You want to order incident records by priority (ascending) and then by created date (descending). What is the correct syntax?[^5]

```javascript
var gr = new GlideRecord('incident');
gr.______('priority');
gr._______('sys_created_on');
gr.query();
```

a) orderBy(), orderByDesc()
b) sortBy(), sortByDesc()
c) orderAsc(), orderDesc()
d) sort(), sortDesc()

**Answer:** a) orderBy(), orderByDesc()

***

**Question 29:** In what order are ServiceNow Access Controls evaluated?[^2]

a) field, table
b) table, field
c) record, field
d) table, record

**Answer:** b) table, field

***

**Question 30:** What is the purpose of the setForceUpdate() method?[^5]

a) To force an update even when field values haven't changed
b) To override security restrictions
c) To update records faster
d) To force business rules to execute

**Answer:** a) To force an update even when field values haven't changed

***

### Section G: Scripting Best Practices (30 marks)

**Question 31:** According to the CAD exam focus areas, which topic receives the most questions?[^1]

a) REST/SOAP Web Services
b) Client vs Server side APIs
c) Data Import processes
d) Flow Designer

**Answer:** b) Client vs Server side APIs

***

**Question 32:** Which is the best practice when writing GlideRecord queries?[^7][^5]

a) Always use addEncodedQuery for all queries
b) Query on the client side for faster performance
c) Use server-side scripts for database operations
d) Avoid using addQuery() method

**Answer:** c) Use server-side scripts for database operations

***

**Question 33:** What happens when you use the INSTANCEOF operator?[^5]

a) Creates a new instance of a class
b) Retrieves only records of a specified class for extended tables
c) Checks if a variable is an instance of an object
d) Instantiates a new GlideRecord

**Answer:** b) Retrieves only records of a specified class for extended tables

***

### Section H: Code Analysis (40 marks)

**Question 34:** What will this code return?[^5]

```javascript
var gr = new GlideRecord('incident');
gr.addQuery('active', true);
gr.addQuery('priority', '>', 3);
gr.query();
gs.log(gr.getRowCount());
```

a) The number of active incidents with priority greater than 3
b) The number of active incidents
c) All incident records
d) A syntax error

**Answer:** a) The number of active incidents with priority greater than 3

***

**Question 35:** Identify the error in this code:[^5]

```javascript
var gr = new GlideRecord('incident');
gr.addQuery('active', true);
while(gr.next()) {
    gs.log(gr.number);
}
```

a) Missing gr.query() before while loop
b) Should use gr.hasNext() instead
c) Cannot use gs.log() in a loop
d) No error

**Answer:** a) Missing gr.query() before while loop

***

**Question 36:** What does this code accomplish?[^5]

```javascript
var gr = new GlideRecord('incident');
gr.addQuery('priority', 1).addOrCondition('priority', 2);
gr.query();
```

a) Finds incidents with priority 1 AND 2
b) Finds incidents with priority 1 OR 2
c) Finds incidents with priority between 1 and 2
d) Syntax error

**Answer:** b) Finds incidents with priority 1 OR 2

***

**Question 37:** This code is designed to set a reference field to null. Is it correct?[^5]

```javascript
var gr = new GlideRecord('incident');
gr.get(sys_id);
gr.assigned_to = null;
gr.update();
```

a) Yes, it's correct
b) No, should use gr.assigned_to = "NULL"
c) No, should use gr.assigned_to.setNull()
d) No, should use gr.clearValue('assigned_to')

**Answer:** b) No, should use gr.assigned_to = "NULL"

***

### Answer Key Summary

| Question | Answer | Question | Answer | Question | Answer | Question | Answer |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| 1 | c | 11 | b | 21 | b | 31 | b |
| 2 | a | 12 | c | 22 | c | 32 | c |
| 3 | c | 13 | b | 23 | b | 33 | b |
| 4 | b | 14 | b | 24 | c | 34 | a |
| 5 | b | 15 | b | 25 | b | 35 | a |
| 6 | b | 16 | b | 26 | b | 36 | b |
| 7 | c | 17 | b | 27 | c | 37 | b |
| 8 | b | 18 | c | 28 | a |  |  |
| 9 | b | 19 | c | 29 | b |  |  |
| 10 | c | 20 | b | 30 | a |  |  |


***

### Exam Preparation Tips

**Key Focus Areas for JavaScript in ServiceNow:**[^3][^1]

- **GlideRecord operations** - The most fundamental JavaScript API in ServiceNow for database operations
- **Client-side vs Server-side scripting** - Understanding when and where to use different APIs
- **Business Rules and Script Includes** - Server-side logic implementation
- **Client Scripts and UI Policies** - Client-side form manipulation
- **GlideSystem (gs) methods** - System-level operations and logging
- **GlideDateTime** - Date and time manipulation
- **GlideAjax** - Client-to-server communication

**Study Resources:**[^3]

- Complete Application Development Fundamentals course on Now Learning
- Practice with GlideRecord queries in background scripts
- Understand data model relationships and table structures
- Focus on scripting best practices and performance optimization

This model paper covers essential JavaScript concepts tested in both CSA and CAD exams, with emphasis on practical GlideRecord operations, API usage, and best practices.[^1][^3][^2]
<span style="display:none">[^10][^11][^12][^13][^14][^15][^16][^17][^18][^19][^20][^9]</span>

<div align="center">⁂</div>

[^1]: https://www.reddit.com/r/servicenow/comments/mh68vp/i_passed_cad_exam_today/

[^2]: https://www.processexam.com/servicenow/servicenow-cad-certification-exam-sample-questions

[^3]: https://www.servicenow.com/community/common-service-data-model-forum/cad-exam-questions/m-p/3072493

[^4]: https://www.processexam.com/servicenow/servicenow-csa-certification-exam-sample-questions

[^5]: https://servicenowguru.com/scripting/gliderecord-query-cheat-sheet/

[^6]: https://www.servicenow.com/community/developer-forum/i-had-question-recently-asked-me-in-an-interview-and-the/m-p/2184390

[^7]: https://infocenter.io/servicenow-code-and-beyond-client-side-vs-server-side-scripting-in-servicenow/

[^8]: https://www.servicenow.com/community/incident-management-forum/questions-on-client-scripts/m-p/2640761

[^9]: https://www.validexamdumps.com/servicenow/csa-dumps

[^10]: https://www.reddit.com/r/servicenow/comments/15o92e7/csa_practice_quiz/

[^11]: https://www.servicenow.com/community/training-and-certifications/servicenow-csa-exam-updated-questions-practice-material/m-p/365081

[^12]: https://www.examtopics.com/exams/servicenow/csa/

[^13]: https://www.youtube.com/watch?v=-GPjps0r0KI

[^14]: https://servicenowspectaculars.com/servicenow-scripting-interview-questions-2024-part-1/

[^15]: https://www.servicenow.com/community/developer-articles/gliderecord-hints-tips-common-issues-and-good-practices/ta-p/2323766

[^16]: https://snbuddy.com/snib_client_script_queries.php

[^17]: https://www.youtube.com/watch?v=2KrQnYDbjww

[^18]: https://www.servicenow.com/community/developer-articles/community-code-snippets-a-gliderecord-survey-part-1-beginner/ta-p/2330323

[^19]: https://www.scribd.com/document/855575655/100-Scenario-Based-ServiceNow-Scripting-Questions

[^20]: https://www.examtopics.com/exams/servicenow/cad/

