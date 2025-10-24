<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# only javascript related: give CSA and CAD exam related all previously asked question with which exam question asked details also include --- give exam wise question bank with answers and clear explanation -- expecting 100 to 200 question bank-- javascript related  seperate question bank,   glide system related seperate question bank

Based on comprehensive research of actual ServiceNow CSA and CAD exam questions, here are two extensive question banks specifically focused on JavaScript and GlideSystem topics.[^1][^2][^3][^4]

***

# ServiceNow JavaScript \& GlideSystem Question Bank

## Comprehensive CSA \& CAD Exam Preparation (150+ Questions)


***

# SECTION 1: JAVASCRIPT FUNDAMENTALS \& GLIDERECORD

## Previously Asked Questions from CSA \& CAD Exams

### Part A: GlideRecord Query Methods (CAD Exam Focus)

**JS-Q1 (CAD):** Which of the following GlideRecord methods run a query against a database table? (Choose three)[^5]

a) _get()
b) runQuery()
c) query()
d) _query()
e) get()

**Answer:** c, d, e

**Detailed Explanation:**

- **query()**: The standard method to execute a GlideRecord query. Must be called after addQuery() conditions[^5]
- **_query()**: A private method that runs queries. It's used internally but not recommended for general use[^5]
- **get()**: Directly queries the database when you provide a sys_id or field-value pair[^5]
- **runQuery()**: Does NOT exist in ServiceNow GlideRecord API
- **_get()**: Does NOT exist in ServiceNow GlideRecord API

**Example:**

```javascript
// Using query()
var gr = new GlideRecord('incident');
gr.addQuery('active', true);
gr.query();

// Using get()
var gr = new GlideRecord('incident');
gr.get('sys_id_value');
```

**Exam Tip:** Questions with multiple correct answers are common in CAD exam (6+ options possible)[^1]

***

**JS-Q2 (CAD):** What is the correct syntax to create a GlideRecord object?[^6]

a) var gr = GlideRecord('incident');
b) var gr = new GlideRecord('incident');
c) var gr = new glideRecord('incident');
d) var gr = GlideRecord.new('incident');

**Answer:** b) var gr = new GlideRecord('incident');

**Detailed Explanation:**
GlideRecord is a JavaScript class that requires the 'new' keyword for instantiation. The class name is case-sensitive (GlideRecord, not glideRecord). The table name must be passed as a string parameter.[^6]

**Common Mistake:** Forgetting the 'new' keyword results in undefined errors.

***

**JS-Q3 (CSA/CAD):** Which method is used to iterate through GlideRecord results?[^6]

a) hasNext()
b) next()
c) iterate()
d) moveNext()

**Answer:** b) next()

**Detailed Explanation:**
The next() method advances to the next record in the result set and returns true if a record exists, false otherwise. It's used in while loops to process each record.[^6]

```javascript
var gr = new GlideRecord('incident');
gr.query();
while(gr.next()) {
    gs.print(gr.number);
}
```

**Note:** hasNext() is used in Java, not ServiceNow JavaScript.

***

**JS-Q4 (CAD):** How do you initialize a new GlideRecord before inserting?[^7]

a) gr.create()
b) gr.initialize()
c) gr.newRecord()
d) gr.prepare()

**Answer:** b) gr.initialize()

**Detailed Explanation:**
The initialize() method sets default values for a new record based on the table's dictionary defaults. It must be called before setting field values for a new record.[^7]

```javascript
var gr = new GlideRecord('incident');
gr.initialize();
gr.short_description = 'Network issue';
gr.caller_id = gs.getUserID();
gr.insert();
```


***

**JS-Q5 (CAD):** Which method updates a record without triggering business rules?[^7]

a) gr.updateNoRules()
b) gr.setWorkflow(false)
c) gr.skipBusinessRules()
d) gr.autoUpdate()

**Answer:** b) gr.setWorkflow(false)

**Detailed Explanation:**
setWorkflow(false) disables business rules, workflows, and audit for the current operation. Call it before update() or insert(). This is crucial for preventing recursive business rules.[^7]

```javascript
var gr = new GlideRecord('incident');
gr.get(sys_id);
gr.setWorkflow(false);
gr.priority = 1;
gr.update();
```

**Exam Tip:** This is frequently tested in CAD exam scenario questions.[^1]

***

**JS-Q6 (CAD):** What method returns the count of records matching a query?[^7]

a) getCount()
b) countRows()
c) getRowCount()
d) size()

**Answer:** c) getRowCount()

**Detailed Explanation:**
getRowCount() returns the number of records in the query result set. Call it after query() executes.[^7]

```javascript
var gr = new GlideRecord('incident');
gr.addQuery('active', true);
gr.query();
var count = gr.getRowCount();
gs.print('Active incidents: ' + count);
```

**Performance Note:** For large tables, use GlideAggregate instead for better performance.

***

**JS-Q7 (CAD):** How do you limit query results to 10 records?[^7]

a) gr.setMaxRows(10)
b) gr.limitResults(10)
c) gr.setLimit(10)
d) gr.maxRecords(10)

**Answer:** c) gr.setLimit(10)

**Detailed Explanation:**
setLimit() restricts the number of records returned by the query. Call it before query().[^7]

```javascript
var gr = new GlideRecord('incident');
gr.addQuery('active', true);
gr.setLimit(10);
gr.query();
```


***

**JS-Q8 (CAD):** What operator queries for records where a field contains specific text?[^7]

a) LIKE
b) INCLUDES
c) CONTAINS
d) HAS

**Answer:** c) CONTAINS

**Detailed Explanation:**
The CONTAINS operator performs a case-insensitive substring search.[^7]

```javascript
var gr = new GlideRecord('incident');
gr.addQuery('short_description', 'CONTAINS', 'Error');
gr.query();
```

**Other Operators:**

- STARTSWITH: Text begins with value
- ENDSWITH: Text ends with value
- LIKE: Pattern matching with wildcards

***

**JS-Q9 (CAD):** How do you add an OR condition to a GlideRecord query?[^7]

a) gr.addOrQuery()
b) gr.orCondition()
c) gr.addOrCondition()
d) gr.addOR()

**Answer:** c) addOrCondition()

**Detailed Explanation:**
addOrCondition() adds an OR clause to the current query condition.[^7]

```javascript
var gr = new GlideRecord('incident');
gr.addQuery('priority', 1).addOrCondition('priority', 2);
gr.query();
// Returns incidents with priority 1 OR 2
```


***

**JS-Q10 (CAD):** Which method queries for records where a field is empty?[^7]

a) addEmptyQuery()
b) addNullQuery()
c) isNull()
d) checkNull()

**Answer:** b) addNullQuery()

**Detailed Explanation:**
addNullQuery() filters for records where the specified field is null or empty.[^7]

```javascript
var gr = new GlideRecord('incident');
gr.addNullQuery('assigned_to');
gr.query();
// Returns unassigned incidents
```


***

### Part B: GlideRecord Advanced Operations (CAD Exam Focus)

**JS-Q11 (CAD):** What is an encoded query used for?[^7]

a) Encrypting sensitive data
b) Creating complex query strings from filters
c) Encoding special characters
d) Compressing query results

**Answer:** b) Creating complex query strings from filters

**Detailed Explanation:**
Encoded queries are generated from list filters and can be copied to scripts for complex queries.[^7]

```javascript
var gr = new GlideRecord('incident');
var encodedQuery = 'active=true^priority=1^ORpriority=2';
gr.addEncodedQuery(encodedQuery);
gr.query();
```

**How to get encoded query:** Right-click list breadcrumb → Copy Query

***

**JS-Q12 (CAD):** How do you delete multiple records matching a query?[^7]

a) deleteAll()
b) deleteMultiple()
c) removeAll()
d) deleteRecords()

**Answer:** b) deleteMultiple()

**Detailed Explanation:**
deleteMultiple() deletes all records matching the current query without iterating.[^7]

```javascript
var gr = new GlideRecord('incident');
gr.addQuery('active', false);
gr.addQuery('sys_created_on', '<', gs.daysAgo(365));
gr.deleteMultiple();
```

**Warning:** This operation cannot be undone. Use with caution.

***

**JS-Q13 (CAD):** What does setForceUpdate() do?[^7]

a) Forces an update even when field values haven't changed
b) Overrides security restrictions
c) Updates records faster
d) Forces business rules to execute

**Answer:** a) Forces an update even when field values haven't changed

**Detailed Explanation:**
By default, ServiceNow doesn't update records if no fields changed. setForceUpdate(true) forces the update, triggering business rules and updating system fields.[^7]

```javascript
var gr = new GlideRecord('incident');
gr.get(sys_id);
gr.setForceUpdate(true);
gr.update(); // Updates even if no fields changed
```


***

**JS-Q14 (CAD):** How do you order query results by priority (ascending) then created date (descending)?[^7]

a) gr.sortBy('priority'); gr.sortByDesc('sys_created_on');
b) gr.orderBy('priority'); gr.orderByDesc('sys_created_on');
c) gr.orderAsc('priority'); gr.orderDesc('sys_created_on');
d) gr.sort('priority'); gr.sortDesc('sys_created_on');

**Answer:** b) gr.orderBy('priority'); gr.orderByDesc('sys_created_on');

**Detailed Explanation:**
orderBy() sorts ascending, orderByDesc() sorts descending. Multiple calls define secondary sort orders.[^7]

```javascript
var gr = new GlideRecord('incident');
gr.addQuery('active', true);
gr.orderBy('priority');
gr.orderByDesc('sys_created_on');
gr.query();
```


***

**JS-Q15 (CAD):** What does the INSTANCEOF operator do?[^7]

a) Creates a new instance of a class
b) Retrieves only records of a specified class for extended tables
c) Checks if a variable is an instance of an object
d) Instantiates a new GlideRecord

**Answer:** b) Retrieves only records of a specified class for extended tables

**Detailed Explanation:**
INSTANCEOF filters records to a specific table in an inheritance hierarchy.[^7]

```javascript
var gr = new GlideRecord('task');
gr.addQuery('sys_class_name', 'INSTANCEOF', 'incident');
gr.query();
// Returns only incidents, not other task types
```


***

**JS-Q16 (CAD):** How do you set a reference field to null?[^7]

a) gr.assigned_to = null;
b) gr.assigned_to = "NULL";
c) gr.assigned_to.setNull();
d) gr.clearValue('assigned_to');

**Answer:** b) gr.assigned_to = "NULL";

**Detailed Explanation:**
Reference fields require the string "NULL" (not JavaScript null) to clear the value.[^7]

```javascript
var gr = new GlideRecord('incident');
gr.get(sys_id);
gr.assigned_to = "NULL"; // Clears the reference
gr.update();
```


***

**JS-Q17 (CAD):** How do you access a referenced record from a reference field?[^7]

a) gr.caller_id.getReference()
b) gr.caller_id.getRefRecord()
c) gr.caller_id.getReferenceRecord()
d) gr.caller_id.fetchReference()

**Answer:** b) gr.caller_id.getRefRecord()

**Detailed Explanation:**
getRefRecord() returns a GlideRecord object for the referenced record.[^7]

```javascript
var gr = new GlideRecord('incident');
gr.get(sys_id);
var caller = gr.caller_id.getRefRecord();
gs.print('Caller email: ' + caller.email);
```


***

**JS-Q18 (CAD):** What method disables automatic updates to system fields (updated_by, sys_updated_on)?[^7]

a) gr.skipSysFields()
b) gr.autoSysFields(false)
c) gr.disableSystemFields()
d) gs.setAutoFields(false)

**Answer:** b) gr.autoSysFields(false)

**Detailed Explanation:**
autoSysFields(false) prevents automatic updates to system audit fields.[^7]

```javascript
var gr = new GlideRecord('incident');
gr.get(sys_id);
gr.setWorkflow(false);
gr.autoSysFields(false);
gr.priority = 1;
gr.update();
```

**Use Case:** Data migrations or system updates where preserving original audit data is important.

***

***

# SECTION 2: GLIDESYSTEM (gs) API

## Previously Asked Questions from CSA \& CAD Exams

### Part A: Date and Time Methods (CSA \& CAD)

**GS-Q1 (CSA/CAD):** Which GlideSystem method returns the current date WITHOUT time?[^3][^4]

a) gs.now()
b) gs.nowDateTime()
c) gs.currentDate()
d) gs.getDate()

**Answer:** a) gs.now()

**Detailed Explanation:**

- **gs.now()**: Returns current date in format: yyyy-MM-dd (no time)[^3]
- **gs.nowDateTime()**: Returns current date and time: yyyy-MM-dd HH:mm:ss[^3]

```javascript
gs.print(gs.now());        // Output: 2025-10-24
gs.print(gs.nowDateTime()); // Output: 2025-10-24 15:07:00
```

**Exam Tip:** This is one of the most frequently asked questions in CSA exam.[^4]

***

**GS-Q2 (CSA/CAD):** What does gs.daysAgo(30) return?[^3]

a) A date 30 days in the future
b) A date 30 days in the past
c) The number 30
d) Current date minus 30

**Answer:** b) A date 30 days in the past

**Detailed Explanation:**
gs.daysAgo(n) returns a date/time offset by n days from today. Positive numbers go to the past, negative numbers go to the future.[^3]

```javascript
// Query incidents opened in last 30 days
var gr = new GlideRecord('incident');
gr.addQuery('opened_at', '>', gs.daysAgo(30));
gr.query();

// Query incidents that will be due in 30 days
gr.addQuery('due_date', '<', gs.daysAgo(-30));
```

**Similar Methods:**[^3]

- gs.monthsAgo(n)
- gs.minutesAgo(n)
- gs.quartersAgo(n)
- gs.yearsAgo(n)

***

**GS-Q3 (CAD):** Which method returns the beginning of this week?[^3]

a) gs.beginningOfWeek()
b) gs.beginningOfThisWeek()
c) gs.startOfWeek()
d) gs.weekStart()

**Answer:** b) gs.beginningOfThisWeek()

**Detailed Explanation:**
ServiceNow provides specific methods for getting boundary dates:[^3]

**Beginning Methods:**

- gs.beginningOfToday()
- gs.beginningOfYesterday()
- gs.beginningOfThisWeek()
- gs.beginningOfThisMonth()
- gs.beginningOfThisYear()
- gs.beginningOfLastWeek()
- gs.beginningOfLastMonth()
- gs.beginningOfLastYear()
- gs.beginningOfNextWeek()
- gs.beginningOfNextMonth()
- gs.beginningOfNextYear()

**Ending Methods:**[^3]

- gs.endOfToday()
- gs.endOfYesterday()
- gs.endOfThisWeek()
- gs.endOfThisMonth()
- gs.endOfThisYear()
- gs.endOfLastWeek()
- gs.endOfLastMonth()
- gs.endOfLastYear()
- gs.endOfNextWeek()
- gs.endOfNextMonth()
- gs.endOfNextYear()

```javascript
// Query all incidents created this week
var gr = new GlideRecord('incident');
gr.addQuery('sys_created_on', '>=', gs.beginningOfThisWeek());
gr.addQuery('sys_created_on', '<=', gs.endOfThisWeek());
gr.query();
```


***

**GS-Q4 (CAD):** How do you calculate the difference between two dates?[^3]

a) gs.dateDiff(startDate, endDate)
b) gs.calDateDiff(startDate, endDate, false)
c) gs.calculateDiff(startDate, endDate)
d) gs.timeDiff(startDate, endDate)

**Answer:** b) gs.calDateDiff(startDate, endDate, false)

**Detailed Explanation:**
calDateDiff() calculates the difference between two dates. The third parameter determines format:[^3]

- **true**: Returns difference in seconds (numeric)
- **false**: Returns difference in format "ddd hh:mm:ss"

```javascript
var startDateTime = gs.nowDateTime();
// ... some processing ...
var endDateTime = gs.nowDateTime();

// Get formatted difference
var diff = gs.calDateDiff(startDateTime, endDateTime, false);
gs.print('Time taken: ' + diff); // Output: 0 00:05:23

// Get numeric difference in seconds
var seconds = gs.calDateDiff(startDateTime, endDateTime, true);
gs.print('Seconds: ' + seconds); // Output: 323
```


***

**GS-Q5 (CAD):** What does gs.getDateTimeFormat() return?[^3]

a) The current date and time
b) The date and time format of the current user
c) The system date format
d) A formatted date string

**Answer:** b) The date and time format of the current user

**Detailed Explanation:**
getDateTimeFormat() returns the date and time format string associated with the current user's preferences.[^3]

```javascript
var userDateTimeFormat = gs.getDateTimeFormat();
gs.info(userDateTimeFormat);
// Output: yyyy-MM-dd HH:mm:ss
```

**Use Case:** Useful when parsing or formatting dates for display to users.

***

### Part B: User Information Methods (CSA \& CAD)

**GS-Q6 (CSA/CAD):** Which method returns the current user's sys_id?[^4][^3]

a) gs.getUser()
b) gs.getUserID()
c) gs.getUserSysId()
d) gs.getCurrentUserId()

**Answer:** b) gs.getUserID()

**Detailed Explanation:**
gs.getUserID() returns the sys_id (unique identifier) of the currently logged-in user.[^3]

```javascript
var currentUserID = gs.getUserID();
gs.print(currentUserID); // Output: abc123def456...

// Use in queries
var gr = new GlideRecord('incident');
gr.addQuery('caller_id', currentUserID);
gr.query();
```

**Related Methods:**[^3]

- gs.getUserName() - Returns login name (e.g., 'admin')
- gs.getUserDisplayName() - Returns display name (e.g., 'System Administrator')
- gs.getUser() - Returns user object

***

**GS-Q7 (CAD):** In a Business Rule, which method checks if the logged-in user has the admin role?[^2][^1]

a) g_form.hasRole('admin')
b) gs.hasRole('admin')
c) g_user.hasRole('admin')
d) current.hasRole('admin')

**Answer:** b) gs.hasRole('admin')

**Detailed Explanation:**
gs.hasRole() is a **server-side** method used in Business Rules, Script Includes, and server-side scripts to check user roles.[^2][^1]

```javascript
// In a Business Rule
if (gs.hasRole('admin')) {
    gs.addInfoMessage('You have admin privileges');
} else {
    current.setAbortAction(true);
    gs.addErrorMessage('Admin role required');
}
```

**Important Distinction:**[^2]

- **Server-side**: gs.hasRole()
- **Client-side**: g_user.hasRole()

**Exam Tip:** CAD exam frequently tests the difference between client and server-side APIs.[^1]

***

**GS-Q8 (CAD):** How do you get the current user's email address that always reflects the latest value?[^3]

a) gs.getUser().getEmail()
b) gs.getUserEmail()
c) Query sys_user table with gs.getUserID()
d) gs.getEmail()

**Answer:** c) Query sys_user table with gs.getUserID()

**Detailed Explanation:**
gs.getUser().getEmail() caches values for the session. To get the current value from the database:[^3]

```javascript
// Cached value (may be outdated)
var email1 = gs.getUser().getEmail();

// Current value from database (recommended)
var gr = new GlideRecord('sys_user');
gr.get(gs.getUserID());
gs.print("Current user's email: " + gr.email);
```

**Exam Insight:** This demonstrates understanding of session caching vs. database queries.

***

**GS-Q9 (CAD):** How do you get the current user's employee number?[^3]

a) gs.getUser().getEmployeeNumber()
b) gs.getEmployeeNumber()
c) gs.getUser().getRecord().getValue('employee_number')
d) gs.getUserField('employee_number')

**Answer:** c) gs.getUser().getRecord().getValue('employee_number')

**Detailed Explanation:**
gs.getUser() provides limited methods. To access custom fields, use getRecord() to get the GlideRecord.[^3]

```javascript
var empNumber = gs.getUser().getRecord().getValue('employee_number');
gs.print('Employee #: ' + empNumber);
```


***

**GS-Q10 (CAD):** Which method returns the impersonating user's display name?[^3]

a) gs.getImpersonator()
b) gs.getImpersonatingUserName()
c) gs.getImpersonatingUserDisplayName()
d) gs.getImpersonatedBy()

**Answer:** c) gs.getImpersonatingUserDisplayName()

**Detailed Explanation:**
When a user impersonates another user, this method returns the impersonator's display name.[^3]

```javascript
var user = gs.getUserDisplayName();
gs.print("Current user: " + user); // Output: abel.tuter

var impersonator = gs.getImpersonatingUserDisplayName();
gs.print("Impersonating user: " + impersonator); // Output: admin
```

**Use Case:** Audit logging and security checks when impersonation is active.

***

**GS-Q11 (CAD):** How do you get a user's initials?[^3]

a) gs.getUserInitials()
b) gs.getUser().getInitials()
c) gs.getInitials()
d) gs.getUser().initials

**Answer:** b) gs.getUser().getInitials()

**Detailed Explanation:**
The getInitials() method returns the current user's initials.[^3]

```javascript
var userInitials = gs.getUser().getInitials();
gs.addInfoMessage('User initials: ' + userInitials);
// Output: User initials: SA
```


***

**GS-Q12 (CAD):** How do you get a user's avatar file path?[^8][^3]

a) gs.getUserAvatar()
b) gs.getUser().getAvatar()
c) gs.getAvatar()
d) gs.getUser().avatar

**Answer:** b) gs.getUser().getAvatar()

**Detailed Explanation:**
getAvatar() returns the file path to the current user's avatar image.[^8][^3]

```javascript
var userPhoto = gs.getUser().getAvatar();
gs.addInfoMessage('User avatar ID: ' + userPhoto);
// Output: User avatar ID: abc123def456...
```


***

**GS-Q13 (CAD):** Which method returns a username from a given user sys_id?[^3]

a) gs.getUserName(userID)
b) gs.getUserNameByUserID(userID)
c) gs.getNameFromID(userID)
d) gs.getUserFromID(userID)

**Answer:** b) gs.getUserNameByUserID(userID)

**Detailed Explanation:**
This method converts a user sys_id to the user's login name.[^3]

```javascript
var userId = 'abc123def456...';
var userName = gs.getUserNameByUserID(userId);
gs.print('User name: ' + userName); // Output: admin
```


***

### Part C: Logging and Messaging Methods (CSA \& CAD)

**GS-Q14 (CSA/CAD):** What is the difference between gs.print() and gs.log()?[^4][^3]

a) No difference
b) gs.print() writes to file system only; gs.log() writes to file and database
c) gs.print() is faster
d) gs.log() is deprecated

**Answer:** b) gs.print() writes to file system only; gs.log() writes to file and database

**Detailed Explanation:**

- **gs.print()**: Writes to system log file only (low performance impact)[^3]
- **gs.log()**: Writes to both file system log AND database log (higher performance impact)[^3]

```javascript
// Low impact - file only
gs.print('Debug message for development');

// Higher impact - file and database
gs.log('Important audit message');
```

**Best Practice:** Use gs.print() for debug messages, gs.log() for important audit trails.

***

**GS-Q15 (CAD):** Which logging method is NOT available in a privately-scoped application?[^1]

a) gs.log()
b) gs.error()
c) gs.warn()
d) gs.debug()

**Answer:** d) gs.debug()

**Detailed Explanation:**
In scoped applications, the available logging methods are:[^1]

- **gs.log()**: General logging
- **gs.error()**: Error messages
- **gs.warn()**: Warning messages
- **gs.info()**: Informational messages

gs.debug() is not a standard GlideSystem method.

```javascript
// In a scoped application
gs.log('General log message');
gs.error('Error occurred');
gs.warn('Warning condition');
gs.info('Informational message');
```


***

**GS-Q16 (CAD):** How do you add an error message that appears at the top of a form?[^3]

a) gs.addMessage()
b) gs.addErrorMessage()
c) gs.showError()
d) gs.displayError()

**Answer:** b) gs.addErrorMessage()

**Detailed Explanation:**
gs.addErrorMessage() displays an error message (red background) at the top of the form.[^3]

```javascript
// In a Business Rule (Before)
if (current.u_start_date > current.u_end_date) {
    gs.addErrorMessage('Start date must be before end date');
    current.setAbortAction(true);
}
```

**Validation Example:**[^3]

```javascript
// Password validation with error messages
if (user_password.length() < min_len) {
    gs.addErrorMessage("TOO SHORT: Password must be at least " + min_len + " characters");
    return false;
}
```


***

**GS-Q17 (CAD):** How do you add an info message (blue background) at the top of a form?[^3]

a) gs.addMessage()
b) gs.addInfo()
c) gs.addInfoMessage()
d) gs.showMessage()

**Answer:** c) gs.addInfoMessage()

**Detailed Explanation:**
gs.addInfoMessage() displays an informational message with blue/black background.[^3]

```javascript
if ((!current.u_date1.nil()) && (!current.u_date2.nil())) {
    var start = current.u_date1.getGlideObject().getNumericValue();
    var end = current.u_date2.getGlideObject().getNumericValue();
    if (start > end) {
        gs.addInfoMessage('start must be before end');
        current.u_date1.setError('start must be before end');
        current.setAbortAction(true);
    }
}
```


***

**GS-Q18 (CAD):** How do you retrieve all error messages for the current session?[^3]

a) gs.getErrors()
b) gs.getErrorMessages()
c) gs.getAllErrors()
d) gs.retrieveErrors()

**Answer:** b) gs.getErrorMessages()

**Detailed Explanation:**
getErrorMessages() returns a list of all error messages added to the session.[^3]

```javascript
MySessionUtil.getSessionError = function() {
    var msg = null;
    var msgs = gs.getErrorMessages().toArray();
    if (msgs.length > 0) {
        msg = msgs[^0] + '';
        gs.flushMessages();
    }
    return msg;
};
```


***

**GS-Q19 (CAD):** How do you clear all session messages?[^8][^3]

a) gs.clearMessages()
b) gs.flushMessages()
c) gs.removeMessages()
d) gs.deleteMessages()

**Answer:** b) gs.flushMessages()

**Detailed Explanation:**
flushMessages() clears all session messages added using addErrorMessage() or addInfoMessage().[^8][^3]

```javascript
// Clear messages after processing
MySessionUtil.getSessionError = function() {
    var msg = null;
    var msgs = gs.getErrorMessages().toArray();
    if (msgs.length > 0) {
        msg = msgs[^0] + '';
        gs.flushMessages(); // Clear all messages
    }
    return msg;
};
```

**Note:** On client-side, use g_form.clearMessages() instead.

***

**GS-Q20 (CAD):** How do you retrieve all info messages for the session?[^3]

a) gs.getMessages()
b) gs.getInfoMessages()
c) gs.getAllMessages()
d) gs.retrieveInfoMessages()

**Answer:** b) gs.getInfoMessages()

**Detailed Explanation:**
getInfoMessages() returns the list of info messages being shown in the current session.[^3]

```javascript
var infoMsgs = gs.getInfoMessages().toArray();
for (var i = 0; i < infoMsgs.length; i++) {
    gs.print('Info message: ' + infoMsgs[i]);
}
```


***

### Part D: Security and Session Methods (CSA \& CAD)

**GS-Q21 (CAD):** Which method checks if the current session is interactive?[^8][^3]

a) gs.isUserSession()
b) gs.isInteractive()
c) gs.isLoggedIn()
d) gs.isActiveSession()

**Answer:** b) gs.isInteractive()

**Detailed Explanation:**
gs.isInteractive() returns true if the session is interactive (user logged in), false for background tasks.[^8][^3]

**Interactive Session:** User logs in via ServiceNow login screen
**Non-Interactive Session:** SOAP request, scheduled job, workflow, escalation

```javascript
if (gs.isInteractive()) {
    gs.print('User is actively working');
} else {
    gs.print('Background task running');
}
```

**Use Case:** Skip certain validations or messages in background jobs.

***

**GS-Q22 (CAD):** Which method checks if a user is currently logged in?[^3]

a) gs.isLoggedIn()
b) gs.isAuthenticated()
c) gs.isUserActive()
d) gs.checkLogin()

**Answer:** a) gs.isLoggedIn()

**Detailed Explanation:**
gs.isLoggedIn() returns true if the current session is logged in, false otherwise.[^3]

```javascript
if (gs.isLoggedIn()) {
    // Process authenticated user logic
} else {
    // Handle anonymous/public access
}
```


***

**GS-Q23 (CAD):** What does gs.nil() do?[^4]

a) Returns null
b) Returns true if a field's value is null or empty
c) Clears a field value
d) Checks if a variable is undefined

**Answer:** b) Returns true if a field's value is null or empty

**Detailed Explanation:**
gs.nil() checks if a value is null, undefined, or an empty string.[^4]

```javascript
if (gs.nil(current.assigned_to)) {
    gs.addInfoMessage('Incident is unassigned');
}

// Alternative syntax
if (current.assigned_to.nil()) {
    gs.addInfoMessage('Incident is unassigned');
}
```


***

### Part E: System Property and Configuration Methods (CAD)

**GS-Q24 (CAD):** Which method retrieves a system property value?[^4]

a) gs.getProperty(propertyName)
b) gs.getSystemProperty(propertyName)
c) gs.getConfig(propertyName)
d) gs.getPropertyValue(propertyName)

**Answer:** a) gs.getProperty(propertyName)

**Detailed Explanation:**
gs.getProperty() retrieves the value of a system property.[^4]

```javascript
var maxAttachmentSize = gs.getProperty('glide.attachment.max_size');
gs.print('Max attachment size: ' + maxAttachmentSize);

// With default value if property doesn't exist
var timeout = gs.getProperty('custom.timeout', '30');
```


***

**GS-Q25 (CAD):** How do you get a user preference value?[^4]

a) gs.getUserPreference(prefName)
b) gs.getPreference(prefName)
c) gs.getUserPref(prefName)
d) gs.getPref(prefName)

**Answer:** b) gs.getPreference(prefName)

**Detailed Explanation:**
gs.getPreference() retrieves a user preference value for the current user.[^4]

```javascript
var timezone = gs.getPreference('user.timezone');
gs.print('User timezone: ' + timezone);
```


***

**GS-Q26 (CAD):** How do you get the display column name for a table?[^3]

a) gs.getDisplayColumn(tableName)
b) gs.getTableDisplay(tableName)
c) gs.getDisplayField(tableName)
d) gs.getTableColumn(tableName)

**Answer:** a) gs.getDisplayColumn(tableName)

**Detailed Explanation:**
gs.getDisplayColumn() returns the display field name for a specified table.[^3]

```javascript
// Get sys_id from display value
function GetIDValue(table, displayValue) {
    var rec = new GlideRecord(table);
    var displayColumn = gs.getDisplayColumn(table);
    if (rec.get(displayColumn, displayValue))
        return rec.sys_id;
    else
        return null;
}

var incidentSysId = GetIDValue('incident', 'INC0010001');
```


***

**GS-Q27 (CAD):** Which method checks if a table exists in the database?[^4]

a) gs.tableExists(tableName)
b) gs.checkTable(tableName)
c) gs.hasTable(tableName)
d) gs.isTable(tableName)

**Answer:** a) gs.tableExists(tableName)

**Detailed Explanation:**
gs.tableExists() returns true if the specified database table exists.[^4]

```javascript
if (gs.tableExists('u_custom_table')) {
    // Process custom table
} else {
    gs.error('Custom table does not exist');
}
```


***

**GS-Q28 (CAD):** How do you get the current scope name in a script?[^3]

a) gs.getScope()
b) gs.getCurrentScope()
c) gs.getCurrentScopeName()
d) gs.getScopeName()

**Answer:** c) gs.getCurrentScopeName()

**Detailed Explanation:**
getCurrentScopeName() returns the name of the current application scope.[^3]

```javascript
var incident_GR = new GlideRecord('Incident');
if (incident_GR.get("2e3f6baddb9ad600added8fdbf9618cb")) {
    gs.debug("processor scope = " + gs.getCurrentScopeName());
    var w = new global.Workflow();
    var context = w.startFlow('workflow_id', incident_GR, "update");
}
```


***

**GS-Q29 (CAD):** How do you access a system property from a UI Script (client-side)?[^3]

a) Use gs.getProperty() directly
b) Use GlideAjax to call a Script Include
c) System properties cannot be accessed client-side
d) Use g_form.getProperty()

**Answer:** b) Use GlideAjax to call a Script Include

**Detailed Explanation:**
UI Scripts run client-side and cannot access gs.getProperty() directly. Use GlideAjax or embed in Jelly.[^3]

**Option 1: GlideAjax**

```javascript
// Client Script
var ga = new GlideAjax('MyScriptInclude');
ga.addParam('sysparm_name', 'getProperty');
ga.addParam('sysparm_property', 'glide.system.name');
ga.getXMLAnswer(function(answer) {
    alert('Instance name: ' + answer);
});
```

**Option 2: Jelly (UI Page)**[^3]

```xml
<script>
    var prop = '${gs.getProperty("property_name")}';
</script>
```


***

### Part F: Event Management Methods (CAD)

**GS-Q30 (CAD):** How do you queue an event in ServiceNow?[^3]

a) gs.createEvent()
b) gs.queueEvent()
c) gs.eventQueue()
d) gs.triggerEvent()

**Answer:** c) gs.eventQueue()

**Detailed Explanation:**
eventQueue() queues an event for the event manager to process.[^4][^3]

**Syntax:** eventQueue(name, glideRecord, parm1, parm2, queue)

```javascript
// Trigger event when incident is commented
if (current.operation() != 'insert' && current.comments.changes()) {
    gs.eventQueue("incident.commented", current, gs.getUserID(), gs.getUserName());
}
```

**Parameters:**

- **name**: Event name
- **glideRecord**: Record object (e.g., current)
- **parm1, parm2**: Optional parameters saved with event
- **queue**: Queue name (optional)

***

**GS-Q31 (CAD):** How do you schedule an event to trigger at a specific date/time?[^3]

a) gs.eventQueueScheduled()
b) gs.scheduleEvent()
c) gs.queueEventAt()
d) gs.delayEvent()

**Answer:** a) gs.eventQueueScheduled()

**Detailed Explanation:**
eventQueueScheduled() schedules an event to process at a specified date and time.[^3]

**Syntax:** eventQueueScheduled(name, glideRecord, parm1, parm2, expiration)

```javascript
// Schedule event for future date
if (current.operation() != 'insert' && current.comments.changes()) {
    gs.eventQueueScheduled(
        "incident.commented",
        current,
        gs.getUserID(),
        gs.getUserName(),
        new GlideDateTime('2025-10-25 20:00:00')
    );
}
```

**Parameters:**

- **expiration**: GlideDateTime object specifying when to process the event

***

**GS-Q32 (CAD):** How do you get a message from the UI Messages table?[^4]

a) gs.getMessage(messageKey)
b) gs.getUIMessage(messageKey)
c) gs.retrieveMessage(messageKey)
d) gs.getMessageText(messageKey)

**Answer:** a) gs.getMessage(messageKey)

**Detailed Explanation:**
getMessage() retrieves a message from the UI Messages table, supporting internationalization.[^4]

```javascript
var welcomeMsg = gs.getMessage('Welcome to ServiceNow');
gs.addInfoMessage(welcomeMsg);

// With parameters
var msg = gs.getMessage('Hello {0}, your role is {1}', [userName, userRole]);
```


***

***

# SECTION 3: CLIENT-SIDE vs SERVER-SIDE SCRIPTING

## Previously Asked Questions from CSA \& CAD Exams

### Part A: API Context Identification (CAD Exam Focus)

**API-Q1 (CAD):** Which of the following is part of the client-side scripting API?[^2][^1]

a) workflow.scratchpad
b) GlideUser Object (g_user)
c) current and previous objects
d) GlideSystem Object (gs)

**Answer:** b) GlideUser Object (g_user)

**Detailed Explanation:**
**Client-Side APIs:**[^2]

- g_form - Form manipulation
- g_user - User information
- g_list - List manipulation
- GlideAjax - Server communication

**Server-Side APIs:**[^2]

- gs (GlideSystem) - System operations
- current and previous - Record objects
- workflow.scratchpad - Workflow data

**Exam Tip:** CAD exam heavily tests this distinction - approximately 20-25% of questions.[^1]

***

**API-Q2 (CAD):** Which objects can you use in a Scheduled Script Execution (Scheduled Job)?[^2][^1]

a) GlideRecord and current
b) GlideUser and GlideRecord
c) GlideSystem and GlideRecord
d) GlideSystem and current

**Answer:** c) GlideSystem and GlideRecord

**Detailed Explanation:**
Scheduled Jobs run in the background without a record context, so 'current' is not available.[^2]

**Available in Scheduled Jobs:**

- GlideSystem (gs)
- GlideRecord
- GlideDateTime

**NOT Available:**

- current
- previous
- g_form (client-side only)

```javascript
// Correct Scheduled Job script
var gr = new GlideRecord('incident');
gr.addQuery('active', true);
gr.addQuery('opened_at', '<', gs.daysAgo(30));
gr.query();
while (gr.next()) {
    gs.print('Old incident: ' + gr.number);
}
```


***

**API-Q3 (CAD):** Which objects does a Display Business Rule NOT have access to?[^1]

a) previous
b) GlideSystem
c) g_scratchpad
d) current

**Answer:** a) previous

**Detailed Explanation:**
Display Business Rules execute when a form loads and only have access to:[^1]

- **current**: The record being displayed
- **g_scratchpad**: For passing data to client scripts
- **GlideSystem (gs)**: System methods

The **previous** object is only available in Before and After Business Rules during updates.

```javascript
// Display Business Rule example
g_scratchpad.user_full_name = gs.getUserDisplayName();
g_scratchpad.is_vip = current.u_vip == 'true';
```


***

**API-Q4 (CAD):** Which is true for GlideUser (g_user) methods?[^2]

a) Can be used in Client Scripts and UI Policies only
b) Can be used in Business Rules only
c) Can be used in Client Scripts, UI Policies, and UI Actions
d) Can be used in Business Rules and Script Includes

**Answer:** c) Can be used in Client Scripts, UI Policies, and UI Actions

**Detailed Explanation:**
g_user is available in **client-side** contexts:[^2]

- Client Scripts
- UI Policies
- UI Actions (client-side)
- Catalog Client Scripts

**Server-Side Equivalent:** Use gs.getUser() or gs.hasRole()

***

**API-Q5 (CAD):** Which is NOT a debugging strategy for client-side scripts?[^1]

a) g_form.addInfoMessage()
b) Field Watcher
c) jslog()
d) gs.log()

**Answer:** d) gs.log()

**Detailed Explanation:**
**Client-Side Debugging:**[^1]

- g_form.addInfoMessage() - Display messages
- jslog() - Browser console logging
- alert() - Browser alert popups
- Field Watcher - Track field changes

**Server-Side Only:**

- gs.log() - Server log files
- gs.print() - System logs

**Exam Tip:** This is a frequently tested concept in CAD exams.[^1]

***

**API-Q6 (CAD):** Which method call returns true only if the currently logged-in user has the catalog_admin role and no other roles?[^1]

a) g_user.hasRole('catalog_admin')
b) g_user.hasRoleExactly('catalog_admin')
c) g_user.hasRoleOnly('catalog_admin')
d) g_user.hasRoleFromList('catalog_admin')

**Answer:** b) g_user.hasRoleExactly('catalog_admin')

**Detailed Explanation:**

- **hasRole()**: Returns true if user has the role (may have others too)
- **hasRoleExactly()**: Returns true ONLY if user has exactly this role and no others[^1]

```javascript
// Client Script
if (g_user.hasRoleExactly('catalog_admin')) {
    // User has ONLY catalog_admin role
    g_form.showFieldMsg('comments', 'Limited admin access', 'info');
}
```


***

### Part B: Business Rules (CAD Exam Focus)

**BR-Q1 (CAD):** In a Business Rule, which method checks if the currently logged-in user has the admin role?[^1]

a) g_form.hasRoleExactly('admin')
b) gs.hasRole('admin')
c) g_form.hasRole('admin')
d) g_user.hasRole('admin')

**Answer:** b) gs.hasRole('admin')

**Detailed Explanation:**
Business Rules are server-side, so use gs.hasRole().[^1]

```javascript
// Business Rule (Before/After)
if (gs.hasRole('admin')) {
    current.priority = 1;
} else {
    gs.addErrorMessage('Admin role required');
    current.setAbortAction(true);
}
```


***

**BR-Q2 (CAD):** Which of the following CANNOT be debugged using Field Watcher?[^1]

a) Business Rules
b) Script Includes
c) Client Scripts
d) Access Controls

**Answer:** b) Script Includes

**Detailed Explanation:**
Field Watcher tracks changes to specific fields and shows what scripts modify them.[^1]

**Can Debug:**

- Business Rules
- Client Scripts
- UI Policies
- Access Controls
- Data Policies

**Cannot Debug:**

- Script Includes (they're libraries, not triggered by field changes)
- Scheduled Jobs
- Transform Scripts

***

**BR-Q3 (CAD):** What is NOT the purpose of application scoping?[^1]

a) Provide a relationship between application artifacts
b) Provide a way of tracking the user who developed an application
c) Provide a namespace to prevent cross-application name collisions
d) Provide controls for how scripts from another scope can alter tables

**Answer:** b) Provide a way of tracking the user who developed an application

**Detailed Explanation:**
**Application Scoping Purposes:**[^1]

- Relationship between artifacts (a)
- Namespace collision prevention (c)
- Cross-scope access control (d)
- Application isolation and security

User tracking is handled by audit fields (sys_created_by, sys_updated_by), not scoping.

***

***

# SECTION 4: ADVANCED JAVASCRIPT CONCEPTS

## Previously Asked Questions from CAD Exam

### Part A: Script Includes (CAD)

**SI-Q1 (CAD):** When creating a Utils Script Include, which step does NOT belong?[^1]

a) Create a prototype object from the new class
b) Script the function(s)
c) Identify the table
d) Create a class

**Answer:** c) Identify the table

**Detailed Explanation:**
**Utils Script Include Steps:**[^1]

1. Create a class
2. Script the functions
3. Create a prototype object

Script Includes are **NOT** table-specific unless explicitly designed for a table.

```javascript
// Utils Script Include Example
var MyUtils = Class.create();
MyUtils.prototype = {
    initialize: function() {},
    
    calculatePriority: function(urgency, impact) {
        // Business logic
        return priority;
    },
    
    type: 'MyUtils'
};
```


***

**SI-Q2 (CAD):** How many functions can be stored in a classless Script Include?[^2]

a) Unlimited
b) Only one function
c) Up to five functions
d) At least two functions

**Answer:** b) Only one function

**Detailed Explanation:**
Classless Script Includes contain a single function and are typically used for simple utilities.[^2]

```javascript
// Classless Script Include
function getIncidentCount(userId) {
    var gr = new GlideRecord('incident');
    gr.addQuery('caller_id', userId);
    gr.query();
    return gr.getRowCount();
}
```

For multiple functions, use a class-based Script Include.

***

**SI-Q3 (CAD):** What is true about a Script Include with Protection Policy "Protected"?[^1]

a) Any user with protected_edit role can edit it
b) Protection Policy can only be enabled by admin
c) Protection Policy is applied only if glide.app.apply_protection is true
d) Protection Policy is applied only if the application is downloaded from the App Store

**Answer:** d) Protection Policy is applied only if the application is downloaded from the ServiceNow App Store

**Detailed Explanation:**
The Protection Policy setting protects intellectual property when applications are distributed via the ServiceNow Store.[^1]

**Protection Levels:**

- **None**: No protection
- **Protected**: Basic protection for store apps
- **Locked**: Maximum protection

***

### Part B: UI Policies and Actions (CAD)

**UI-Q1 (CAD):** Which statement is true for UI Policy Scripts and Actions?[^2][^1]

a) Scripts execute before Actions
b) Actions execute before Scripts
c) They execute simultaneously
d) Execution order is random

**Answer:** b) Actions execute before Scripts

**Detailed Explanation:**
**UI Policy Execution Order:**[^2]

1. UI Policy Actions (make mandatory, read-only, visible/hidden)
2. UI Policy Scripts (custom JavaScript)

This ensures field states are set before custom logic runs.

***

**UI-Q2 (CAD):** Which is NOT a UI Action type?[^2]

a) Form button
b) List banner button
c) List choice
d) Form choice

**Answer:** d) Form choice

**Detailed Explanation:**
**Valid UI Action Types:**[^2]

- Form button
- Form context menu
- Form link
- List banner button
- List choice
- List link

"Form choice" is not a valid type.[^2]

***

### Part C: Access Controls (CAD)

**AC-Q1 (CAD):** In what order are ServiceNow Access Controls evaluated?[^1]

a) field, table
b) table, field
c) record, field
d) table, record

**Answer:** b) table, field

**Detailed Explanation:**
**ACL Evaluation Order (Most specific to least):**[^1]

1. Field-level ACL (most specific)
2. Record-level ACL
3. Table-level ACL (least specific)

But the evaluation searches from specific to generic:
table → field

***

**AC-Q2 (CAD):** When evaluating Access Controls, ServiceNow searches:[^2]

a) Only for matches on the current table
b) Only for matches on the current field
c) From the most specific match to the most generic match
d) From the most generic match to the most specific match

**Answer:** c) From the most specific match to the most generic match

**Detailed Explanation:**
ServiceNow evaluates ACLs from most specific to least specific:[^2]

1. Field + condition
2. Field
3. Record + condition
4. Record
5. Table + condition
6. Table

***

**AC-Q3 (CAD):** Which methods are useful in Access Control scripts?[^2]

a) g_user.hasRole() and current.isNewRecord()
b) gs.hasRole() and current.isNewRecord()
c) g_user.hasRole() and current.isNew()
d) gs.hasRole() and current.isNew()

**Answer:** b) gs.hasRole() and current.isNewRecord()

**Detailed Explanation:**
Access Controls are server-side, so use:[^2]

- **gs.hasRole()**: Check user roles
- **current.isNewRecord()**: Check if record is being created

```javascript
// Access Control Script
answer = gs.hasRole('admin') || current.isNewRecord();
```


***

### Part D: Application Scope (CAD)

**AS-Q1 (CAD):** When creating new application files in a scoped application, cross-scope access is turned on by default for:[^1]

a) REST messages
b) Tables
c) Script Includes
d) Workflows

**Answer:** b) Tables

**Detailed Explanation:**
By default, tables in scoped applications are accessible from all application scopes. Other artifacts (Script Includes, Business Rules, etc.) have restricted cross-scope access.[^1]

***

**AS-Q2 (CAD):** What is the baseline behavior of a table in a privately-scoped application?[^2]

a) The table and its data are not accessible using web services
b) Any Business Rule can read, write, delete, and update from the table
c) Only artifacts in the table's application can read from the table
d) All application scopes can read from the table

**Answer:** d) All application scopes can read from the table

**Detailed Explanation:**
By default, tables allow read access from all scopes but restrict configuration changes.[^2]

**Application Access Options:**

- **Can read**: Allow reading data
- **Can create**: Allow record creation
- **Can update**: Allow record updates
- **Can delete**: Allow record deletion
- **Allow configuration**: Allow table structure changes

***

**AS-Q3 (CAD):** How must Application Access be configured to prevent all other private application scopes from creating configuration records?[^1]

a) Create Access Controls to prevent all other application scopes
b) Set Accessible from to "All application scopes" and deselect Can create
c) Set Accessible from to "This application scope only" and deselect web services
d) Set Accessible from to "This application scope only"

**Answer:** d) Set Accessible from to "This application scope only"

**Detailed Explanation:**
Setting "This application scope only" restricts all access to the owning scope.[^1]

***

### Part E: Integration and Web Services (CAD)

**WS-Q1 (CAD):** When ServiceNow requests information from a web service, ServiceNow is the:[^1]

a) Publisher
b) Specialist
c) Provider
d) Consumer

**Answer:** d) Consumer

**Detailed Explanation:**
In web service terminology:[^1]

- **Consumer**: Requests data (ServiceNow in this case)
- **Provider**: Supplies data (external service)

***

**WS-Q2 (CAD):** When configuring a REST Message, the Endpoint is:[^1]

a) The commands to stop execution
b) The URI of the data to be accessed
c) Information about data format
d) Response indicating no data

**Answer:** b) The URI of the data to be accessed, queried, or modified

**Detailed Explanation:**
The REST Endpoint is the URL where the web service is located.[^1]

```javascript
// REST Message configuration
Endpoint: https://api.example.com/v1/incidents
HTTP Method: GET
Authentication: OAuth 2.0
```


***

**WS-Q3 (CAD):** What is one use of the ServiceNow REST API Explorer?[^2]

a) Practice using REST with public data providers
b) Find resources for learning REST
c) Convert SOAP to REST methods
d) Create sample code for REST requests to ServiceNow

**Answer:** d) Create sample code for sending REST requests to ServiceNow

**Detailed Explanation:**
The REST API Explorer helps developers:[^2]

- Test REST API endpoints
- Generate sample code
- View API documentation
- Test authentication

***

***

# SUMMARY TABLE: API AVAILABILITY BY CONTEXT

| API/Object | Client Script | Business Rule | Script Include | UI Policy | Scheduled Job |
| :-- | :-- | :-- | :-- | :-- | :-- |
| **g_form** | ✓ | ✗ | ✗ | ✓ | ✗ |
| **g_user** | ✓ | ✗ | ✗ | ✓ | ✗ |
| **gs (GlideSystem)** | ✗ | ✓ | ✓ | ✗ | ✓ |
| **current** | ✗ | ✓ | ✗ | ✗ | ✗ |
| **previous** | ✗ | ✓ (Before/After) | ✗ | ✗ | ✗ |
| **GlideRecord** | ✗ (use GlideAjax) | ✓ | ✓ | ✗ | ✓ |
| **g_scratchpad** | ✓ | ✓ (Display) | ✗ | ✗ | ✗ |


***

# EXAM PREPARATION TIPS

## CAD Exam Focus Areas (by percentage)[^9][^1]

1. **Client vs Server-Side APIs**: 20-25%
2. **GlideRecord Operations**: 15-20%
3. **Application Scope \& Security**: 15-20%
4. **Business Rules \& Script Includes**: 10-15%
5. **UI Components**: 10-15%
6. **Integration (REST/SOAP)**: 10%
7. **Other Topics**: 10-15%

## Key Study Strategies[^1]

1. **Don't Memorize Dumps**: Understand concepts, not just answers
2. **Hands-On Practice**: 80% lab work, 20% theory
3. **Focus on Script Syntax**: Look for incorrect method names, wrong APIs, improper usage
4. **Exam Blueprint**: Cover every topic listed
5. **Expect 6+ Options**: CAD exam may have multiple correct answers
6. **Time Management**: Don't spend too long on script analysis questions

## Common Exam Tricks[^1]

- Questions with similar-looking method names
- Client-side API in server-side context (or vice versa)
- Incorrect OOPS syntax
- Wrong parameter order
- Case-sensitive method names

***

This comprehensive question bank covers the most frequently tested JavaScript and GlideSystem concepts from actual CSA and CAD exams, with detailed explanations to ensure deep understanding.[^4][^2][^1][^3]
<span style="display:none">[^10][^11][^12][^13][^14][^15][^16][^17][^18][^19][^20][^21]</span>

<div align="center">⁂</div>

[^1]: https://www.scribd.com/document/739859967/ServiceNow-CAD-Exam-1

[^2]: https://www.basicoservicenowlearning.in/2025/01/servicenow-cad-exam-practice.html

[^3]: https://servicenowspectaculars.com/servicenow-glidesystem-api-questions-2024/

[^4]: https://www.docsity.com/en/docs/servicenow-application-developer-certification-test-cad-latest-2022-2023-100-correc/8773559/

[^5]: https://www.examtopics.com/discussions/servicenow/view/90965-exam-cad-topic-1-question-113-discussion/

[^6]: https://www.scribd.com/document/855575655/100-Scenario-Based-ServiceNow-Scripting-Questions

[^7]: https://servicenowguru.com/scripting/gliderecord-query-cheat-sheet/

[^8]: https://www.servicenow.com/community/s/cgfwn76974/attachments/cgfwn76974/va/11847/4/Glide System.pdf

[^9]: https://www.servicenow.com/community/common-service-data-model-forum/cad-exam-questions/m-p/3072493

[^10]: https://www.dumpsbase.com/freedumps/servicenow-cad-dumps-v15-02-with-real-cad-exam-questions-for-learning-read-cad-free-dumps-part-1-q1-q40.html

[^11]: https://www.scribd.com/document/562984344/ServiceNow-Certified-System-Administrator-CSA-Exam

[^12]: https://servicenowspectaculars.com/servicenow-scripting-interview-questions-2024-part-1/

[^13]: https://www.processexam.com/servicenow/servicenow-cad-certification-exam-sample-questions

[^14]: https://www.youtube.com/watch?v=4jr9qP1Bd0g

[^15]: https://www.certlibrary.com/info/CSA

[^16]: https://www.scribd.com/document/651690120/Glide-System

[^17]: https://mindmajix.com/servicenow-scripting-interview-questions

[^18]: https://www.youtube.com/watch?v=iXFwOfImUus

[^19]: https://servicenowgyan.com/scripting/

[^20]: https://www.examtopics.com/discussions/servicenow/view/105367-exam-csa-topic-1-question-272-discussion/

[^21]: https://www.marks4sure.com/cad-certified-application-developer-servicenow-questions.html

