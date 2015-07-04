<div class="table-responsive">
    <table class="table table-striped table-condensed table-hover fixed-header" id="events-tbl">
        <thead>
            <tr>
                <th><%= lang.eventID %></th>
                <th><%= lang.eventTitle %></th>
                <th><%= lang.eventHeldDate %></th>
                <th><%= lang.eventCreatedDate %></th>
                <th><%= lang.notes %></th>
            </tr>
        </thead>
        <tbody>
            <% _.each(events, function(event) { %>
                <tr data-id="<%- event.id %>">
                    <td><%= event.get('eventID') %></td>
                    <td><%= event.get('eventTitle') %></td>
                    <td><%= event.get('eventHeldDate') %></td>
                    <td><%= event.get('eventCreatedDate') %></td>
                    <td><%= event.get('notes') %></td>
                </tr>
            <% }); %>


        </tbody>
    </table>
</div>