<h2><%= lang.title %></h2>
<h3>
    <span class="label label-primary"><%= lang.langLabel %></span>
    <div class="dropdown" id="langDropDown">
        <button class="btn btn-default dropdown-toggle" type="button" id="langBtn" data-toggle="dropdown" aria-expanded="true">
            <%= curLang %> <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" role="menu" id="language" aria-labelledby="langBtn">
            <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:void(0)" data-lang="en"><%= lang.en %></a></li>
            <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:void(0)" data-lang="uk"><%= lang.uk %></a></li>
            <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:void(0)" data-lang="ru"><%= lang.ru %></a></li>
        </ul>
    </div>
</h3>
<h3>
    <span class="label label-primary"><%= lang.upload %></span>
    <input id="uploader" type="file" size="1"/>
</h3>
