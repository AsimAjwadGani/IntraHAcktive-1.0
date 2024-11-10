<h1> BRAC University Co-curricular Hub (BUCH) </h1>

<h3>Project Overview</h2>
<p>BUCH is a centralized web platform developed to simplify and enhance interactions between BRAC University's Office of Co-Curricular Activities (OCA) and club panel members. This system addresses major administrative challenges, including delays in event approvals, fragmented communication, inefficient room booking processes, lack of transparency in budget approvals, and a need for data-driven insights. By providing an organized digital hub, BUCH improves operational efficiency, transparency, and the overall user experience for both OCA and club members.
</p>

<h3>Features Implemented</h3>
<ol>
  
  <li>
    <b>Homepage:</b><br>
    <ul>
      <li><b>Carousel Display:</b> Highlights upcoming events for quick visibility, promoting engagement.</li>
      <li><b>Notifications Bar:</b> Lists updates like event approval status, room booking confirmations, and budget changes.</li>
      <li><b>Event Calendar:</b> Displays scheduled events, allowing users to view and navigate through upcoming activities.</li>
      <li><b>News Bulletin:</b> Shows important announcements related to clubs and events</li>
      <li><b>Login Button:</b> Provides access to different features based on user roles (OCA or club panel members).</li>
    </ul>
  </li>
  
  <li>
    <b>Club Panel Member Dashboard:</b><br>
    <ul>
      <li><b>Profile Section:</b> Displays user information and role within the club.</li>
      <li><b>Notifications Bar:</b> Lists updates like event approval status, room booking confirmations, and budget changes.</li>
      <li><b>To-Do List:</b>b> Helps club members organize tasks for efficient management.</li>
      <li><b>Room Booking:</b> Allows real-time booking of rooms, with visible availability to prevent conflicts.</li>
      <li><b>Event Creation:</b> Provides a form for members to submit new event proposals to OCA for approval.</li>
      <li><b>Budget Tracking:</b> Displays budget requests and approval statuses, offering transparency on financial matters.</li>
      <li><b>Club Chat:</b> Enables direct communication with the OCA admin for quick clarifications and updates.</li>
    </ul>
  </li>
  
  <li>
    <b>OCA Admin Dashboard</b><br>
    <ul>
      <li><b>Pending Approvals:</b> Lists requests for event approvals, room bookings, poster location bookings and budget changes, allowing the OCA admin to approve or reject with a single click.</li>
      <li><b>Budgeting Table:</b> Provides full visibility into club budget requests, with editing options for adjustments.</li>
      <li><b>All-Club Chat Access:</b> Lets OCA monitor and respond to club-specific chat threads, streamlining communication.</li>
    </ul>
  </li>
  
  <li> 
    <b>Event Registration Page:</b><br>
    <ul>
      <li> <b>Event Details Form:</b> A structured form where club members can enter details like event name, date, time, location, and description for OCA’s review.</li>
      <li> <b>Submission Confirmation:</b> Provides a confirmation message upon submission, with real-time status updates available in the dashboard. </li>
    </ul>
  </li>
  
  <li>
    Budget Page:<br>
    <ul>
      <li> Editable Fields for OCA: Allows OCA to edit the budget table or add comments, making budget allocations transparent and easy to track.</li>
      <li> Both panel members and oca can view the budget table for the fiscal semster </li>
    </ul>
  </li>
  
  <li>
    <b>Room Booking System:</b><br>
    <ul>
      <li><b>Availability Schedule:</b> A calendar or grid view showing room availability in real time.</li>
      <li><b>Instant Booking Confirmation:</b> Club members can reserve rooms with immediate feedback on booking status to avoid conflicts.</li>
      <li><b>Conflict Prevention:</b> Blocks double-booking by locking room availability once reserved.</li>
    </ul>
  </li>

  <li>
    <b>Reporting and Analytics:</b><br>
    <ul>
      <li><b>Event Metrics:</b> Tracks participation, attendance, and success rates for each event.</li>
      <li><b>Budget Usage:</b> Provides insight into how funds are allocated across events and clubs.</li>
      <li><b>Room Utilization:</b> Analyzes room booking patterns to help OCA optimize resources.</li>
      <li><b>Automated Reporting:</b> Generates summaries and charts for data-driven insights on club performance.</li>
    </ul>
  </li>
  <li>
    <b>Poster Booking Page:</b>
    <ul>
      <li><b>Poster details form:</b> A structured form where panel members can enter details like poster name, event, location, date and upload the photo of the poster.</li>
      <li><b>Submission Confirmation:</b> Provides a confirmation message upon submission, with real-time status updates available in the dashboard.</li>
    </ul>
  </li>
</ol>


<h3>Technical Stack and Architecture</h3>
<ul>
  <li>Frontend: Developed using React for a responsive, dynamic user experience. Styled with CSS for a clean and professional look that aligns with university standards.</li>
  <li>Backend: Built with Node.js and Express, creating a robust RESTful API to handle client requests, approvals, and data management.</li>
  <li>Database: MongoDB serves as the database, storing data on events, room bookings, budget requests, users, and analytics.</li>
  <li>Real-Time Communication: WebSockets are implemented to handle real-time messaging for the chat and notification systems, ensuring prompt communication and updates.</li>
</ul>
