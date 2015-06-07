<h2><%= lang.title %></h2>
<div class="row">
    <div class="input-obj col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <label for="#passport-input"><%= lang.passId %></label>
        <input type="number" id="passport-input" class="form-control" placeholder="<%= lang.passId %>">
    </div>
    <div class="input-obj col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <label for="#first-name"><%= lang.firstName %></label>
        <input type="text" id="first-name" class="form-control" placeholder="<%= lang.firstName %>">
    </div>
</div>
<div class="row">
    <div class="input-obj col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <label for="#last-name"><%= lang.lastName %></label>
        <input type="text" id="last-name" class="form-control" placeholder="<%= lang.lastName %>">
    </div>
    <div class="input-obj col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <label for="#birth-date"><%= lang.birthDate %></label>
        <input type="text" id="birth-date" class="form-control" placeholder="<%= lang.birthDate %>">
    </div>
</div>
<div class="row">
    <div class="input-obj col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <label for="#coach-name"><%= lang.coachName %></label>
        <input type="text" id="coach-name" class="form-control" placeholder="<%= lang.coachName %>">
    </div>
    <div class="input-obj col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <label for="#achievement-level"><%= lang.levelToAchieve %></label>
        <input type="number" id="achievement-level" class="form-control" placeholder="<%= lang.levelToAchieve %>">
    </div>
</div>
<div class="row">
    <div class="input-obj col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <label for="#seminar-payment"><%= lang.seminarCost %></label>
        <input type="number" id="seminar-payment" class="form-control" placeholder="<%= lang.seminarCost %>">
    </div>
    <div class="input-obj col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <label for="#certification-payment"><%= lang.certCost %></label>
        <input type="number" id="certification-payment" class="form-control" placeholder="<%= lang.certCost %>">
    </div>
</div>
<button type="button" id="saveBtn" class="btn-block btn-primary btn-lg"><%= lang.saveBtn %></button>