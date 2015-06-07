
<table class="table table-striped table-condensed table-hover fixed-header" id="review-tbl">
    <thead>
        <tr>
            <th><%= lang.passID %></th>
            <th><%= lang.firstName %></th>
            <th><%= lang.lastName %></th>
            <th><%= lang.birthDate %></td>
            <th><%= lang.coachName %></th>
            <th><%= lang.levelToAchieve %></th>
            <th><%= lang.seminarCost %></th>
            <th><%= lang.certCost %></th>
        </tr>
    </thead>
    <tbody>
        <!-- <tr>
            <td>12345</td>
            <td>Al</td>
            <td>Sine</td>
            <td><%= new Date(Date.now()).toLocaleDateString() %></td>
            <td>H. Johnson</td>
            <td>3</td>
            <td>500$</td>
            <td>1000$</td>
        </tr> -->

        <% _.each(students, function(student) { %>
            <tr data-id="<%- student.id %>">
                <td><%= student.get('passportID') %></td>
                <td><%= student.get('name') %></td>
                <td><%= student.get('lastname') %></td>
                <td><%= student.get('birthdate') %></td>
                <td><%= student.get('coachName') %></td>
                <td><%= student.get('levelToAchieve') %></td>
                <td><%= student.get('seminarCost') %></td>
                <td><%= student.get('certificationCost') %></td>
                <td class="deleteStudentBtn invisible"><div class="glyphicon glyphicon-trash btn-danger deleteStudentIcon"></div></td>
            </tr>
        <% }); %>


    </tbody>
</table>