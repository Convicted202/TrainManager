<div class="row" id="searchArea">
    <div class="col-xs-9 col-sm-6 col-md-6 col-lg-6" id="searchGroup">
        <div class="input-group">
            <input type="text" class="form-control" id="searchInput" aria-label="...">
            <div class="input-group-btn">
                <button type="button" class="btn btn-default dropdown-toggle" id="searchByBtn" data-toggle="dropdown" aria-expanded="false" data-search="ALL"><%= lang.search.all %> <span class="caret"></span></button>
                <ul class="dropdown-menu dropdown-menu-right" id="search-drop" role="menu">
                    <li><a href="javascript:void(0)"><%= lang.search.all %></a></li>
                    <li class="divider"></li>
                    <li><a href="javascript:void(0)" data-search="passportID"><%= lang.search.passID %></a></li>
                    <li><a href="javascript:void(0)" data-search="name"><%= lang.search.firstName %></a></li>
                    <li><a href="javascript:void(0)" data-search="lastname"><%= lang.search.lastName %></a></li>
                    <li><a href="javascript:void(0)" data-search="birthdate"><%= lang.search.birthdate %></a></li>
                    <li><a href="javascript:void(0)" data-search="coachName"><%= lang.search.coachName %></a></li>
                    <li><a href="javascript:void(0)" data-search="levelToAchieve"><%= lang.search.levelToAchieve %></a></li>
                    <li><a href="javascript:void(0)" data-search="seminarCost"><%= lang.search.seminarCost %></a></li>
                    <li><a href="javascript:void(0)" data-search="certificationCost"><%= lang.search.certCost %></a></li>
                </ul>
            </div>
        </div>
    </div>

    <span id="viewEditBtn">
        <button type="button" id="editBtn" class="btn btn-primary col-xs-3 col-sm-2 col-md-1 col-lg-1"><%= lang.search.editBtn %></button>
        <button type="button" id="viewBtn" class="btn btn-danger col-xs-3 col-sm-2 col-md-1 col-lg-1"><%= lang.search.viewBtn %></button>
    </span>
</div>
