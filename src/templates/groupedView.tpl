
<% _.each(levels, function(level, levelName) { %>

        <div class="page-header">
            <h2 class="alert alert-success">
                <%= levelName %>
            </h2>
        </div>
        <div class="table-responsive">
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

                    <% _.each(level, function(student) { %>
                        <tr data-id="<%- student.id %>">
                            <td><%= student.passportID %></td>
                            <td><%= student.name %></td>
                            <td><%= student.lastname %></td>
                            <td><%= student.birthdate %></td>
                            <td><%= student.coachName %></td>
                            <td><%= student.levelToAchieve + ' ' + student.levelType %></td>
                            <td><%= student.seminarCost %></td>
                            <td><%= student.certificationCost %></td>
                            <td class="upgradeStudentBtn "><div class="glyphicon glyphicon-arrow-up btn-success"></div></td>
                        </tr>
                    <% }); %>

                </tbody>
            </table>
        </div>

<% }); %>

