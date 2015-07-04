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
        <div id="lvl" class="input-obj col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <label for="#achievement-level"><%= lang.levelToAchieve %></label>
            <input type="number" id="achievement-level" class="form-control" placeholder="<%= lang.levelToAchieve %>">
        </div>
        <div id="lvl_type" class="input-obj col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <label for="#achievement-type">Type</label>
            <div class="dropdown" id="achievement-type">
                <select class="selectpicker" role="menu" id="a-type" aria-labelledby="typeBtn">
                    <option role="presentation" selected>D</option>
                    <option role="presentation">Q</option>
                </select>
            </div>
        </div>
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
<div class="row">
    <div class="input-obj col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <label for="#seminar-type"><%= lang.seminarType %></label>
        <div class="dropdown" id="seminar-type">
            <select class="selectpicker" role="menu" id="sem-type" aria-labelledby="typeBtn">
                <option role="presentation" selected></option>
            </select>
        </div>
    </div>
    <div class="input-obj col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div id="cur-lvl" class="input-obj col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <label for="#current-level"><%= lang.currentLevel %></label>
            <input type="number" id="current-level" class="form-control" placeholder="<%= lang.currentLevel %>">
        </div>
        <div id="cur-lvl_type" class="input-obj col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <label for="#current-type">Type</label>
            <div class="dropdown" id="current-type">
                <select class="selectpicker" role="menu" id="c-type" aria-labelledby="typeBtn">
                    <option role="presentation" selected>D</option>
                    <option role="presentation">Q</option>
                </select>
            </div>
        </div>
    </div>
</div>
<button type="button" id="saveBtn" class="btn-block btn-primary btn-lg"><%= lang.saveBtn %></button>