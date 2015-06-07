<!--login modal-->
<div id="loginModal" class="modal show" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="text-center"><%= lang.login %></h1>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <input type="text" class="form-control input-lg" id="email" placeholder="<%= lang.email %>">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control input-lg" id="password" placeholder="<%= lang.pass %>">
                </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-lg btn-block" id="signIn"><%= lang.signin %></button>
                    <span class="pull-right"><a href="#"><%= lang.register %></a></span><span><a href="#"><%= lang.needhelp %></a></span>
                </div>
            </div>
            <div class="modal-footer"></div>
        </div>
    </div>
</div>