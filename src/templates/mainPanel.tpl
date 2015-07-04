<div class="panel-heading">
    <ul class="nav nav-pills">
        <li class="<%= _area === 'CreateUpdateView' ? 'active' : '' %>"><a data-toggle="tab" href="#blankEntry"><%= lang.createTab %></a></li>
        <li class="<%= _area === 'ReviewView' ? 'active' : '' %>"><a data-toggle="tab" href="#review"><%= lang.reviewTab %></a></li>
        <li class="<%= _area === 'GroupedView' ? 'active' : '' %>"><a data-toggle="tab" href="#grouped"><%= lang.groupedTab %></a></li>
        <li class="<%= _area === 'EventsView' ? 'active' : '' %>"><a data-toggle="tab" href="#events"><%= lang.eventsTab %></a></li>
        <li class="<%= _area === 'ReportView' ? 'active' : '' %>"><a data-toggle="tab" href="#reports"><%= lang.reportsTab %></a></li>
        <li class="<%= _area === 'PreferencesView' ? 'active' : '' %>"><a data-toggle="tab" href="#preferences"><%= lang.preferencesTab %></a></li>
    </ul>
</div>
<div class="panel-body">
    <div id="panel-content" class="tab-content">
    </div>
</div>