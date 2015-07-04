<div class="alert alert-success">
    <div class="row">
        <div class="left-row col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="row">
                <div class="input-obj input-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <label class="input-group-addon" for="#event-title"><%= lang.eventTitle %></label>
                    <input type="text" id="event-title" class="form-control" placeholder="<%= lang.eventTitle %>">
                </div>
            </div>
            <div class="row">
                <div class="input-obj input-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <label class="input-group-addon" for="#event-date"><%= lang.eventHeldDate %></label>
                    <input type="text" id="event-date" class="form-control" placeholder="<%= lang.eventHeldDate %>">
                </div>
            </div>
        </div>
        <div class="notes-wrapper col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="notes col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <textarea class="form-control" id="event-notes" rows="3" placeholder="<%= lang.notes %>"></textarea>
            </div>
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <button id="add-evt" class="btn btn-success btn-lg btn-add-evt"><div class="glyphicon glyphicon-plus"></div></button>
            </div>
        </div>
    </div>
</div>
