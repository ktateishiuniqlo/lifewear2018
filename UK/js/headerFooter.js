$('head').append('<link href="css/icomoon.css" rel="stylesheet" type="text/css" />');
$('head').append('<link href="css/nav.css" rel="stylesheet" type="text/css" /> ');
$(function(){
    var menuTranslations = {
        'FR': ["Menu","Fermer"],
        'DE': ["Menü","Schließen"],
        'ES': ["Menú","Cerrar"],
        'AT': ["Menu","Close"],
        'GB': ["Menu","Close"]
    };
    $("#uniqlo-site-header").load("header.html", function(){
        $("#uniqlo-site-header").addClass("uq-header-component group uql-component fixed");
        $('.top-nav-wrap, .logo-content, .top-nav-primary, .search-content').on('mouseenter', function () {
            if($('.dropdown-nav').hasClass('open')){
                $('.dropdown-nav').removeClass('open');
            }
        });
        $(".nav-category-group-list .js_mainnavlink").mouseenter(function(event){
            if($(this).is("li")){
                $(".top-nav, #IDhelp, #IDkids, #IDbaby, #IDmen, #IDwomen, #IDcompany").removeClass("active-subcategory");
                $(event.target).addClass("active-subcategory");
                $(".parbase.navDepartment.section, .parbase.navInfo.section").hide();
                $(".parsys.dropdown-nav").addClass("open");
                $(".parbase[data-js-category="+$(event.target).attr("id")+"]").slideDown();
            }
            return false;
        });
        $('.dropdown-nav').on('mouseleave', function (e) {
            var currentTarget = $(e.currentTarget);
            e.preventDefault();
            $(this).removeClass('open');
            $('.js_mainnavlink a').parent('li.active').removeClass('activeMenu');
        });
        $('.dropdown-nav').on('mouseenter', function (e) {
            e.preventDefault();
                $('.js_mainnavlink a').parent('li.active').each(function() {
                    $(this).addClass('activeMenu');
                });
        });
        $(".mobile-tab-head .default .icon-uniE906").click(function(){
            $(".mobile-tab-head .default").hide();
            $(".mobile-tab-head .active-search").show();
            $(".mobile-tab-head .active-search input[name=q]").focus();
            if($(".menu-list").hasClass("menu-list-active")){
                $(".default .mob-menu").trigger("click");
            }
        });
        $(".mobile-tab-head .active-search .icon-uniE906").click(function(){
            location.href = $(this).attr("url")+"?q="+$(".mobile-tab-head .active-search input[name=q]").val().trim();
        });
        $(".mobile-tab-head .active-search .icon-icn_close").click(function(){
            $(".mobile-tab-head .default").show();
            $(".mobile-tab-head .active-search").hide();
        });
        $(".mobile-tab-head .active-search .uni-search-clear-button").click(function(){
            $(".mobile-tab-head .active-search input[name=q]").val("");
        });
        $(".siteselect-selectedsite").click(function(){
            $(".siteselector-overlay").show();
        });
        $(".ct-close").click(function(){
            $(".siteselector-overlay").hide();
            return false;
        });
        var countryCode = $(".siteselect-selectedsite").attr("countrycode");
        $(".default .mob-menu").click(function () {
            $(this).toggleClass("btn-close");
            if(menuTranslations[countryCode])
                $(this).find("span").text($(this).hasClass("btn-close")?menuTranslations[countryCode][1]:menuTranslations[countryCode][0])
            else
                $(this).find("span").text($(this).hasClass("btn-close")?"Close":"Menu")
            $('.menu-list').toggleClass('menu-list-active');
            $(".default .hamburger-icon").toggleClass('icon-icn_close');
            $(".default .hamburger-icon").toggleClass("icon-uniE915");
            $(".default .hamburger-icon").toggleClass("icon-uniE902");
        });
        $(".active-search .mob-menu").click(function(){
            $(".mobile-tab-head .default").show();
            $(".mobile-tab-head .active-search").hide();
            $(".default .mob-menu").trigger("click");
        });
        var scroll = $(".top-nav-wrap .content-asset ul");
        setInterval(function(){ scroll.animate({scrollTop:20}, 500, function() {
           scroll.find("li:first-child")[0].parentNode.appendChild(scroll.find("li:first-child")[0]);
        }); },5000);
    });
    $("#uniqlo-site-footer").load("footer.html",function(){
        $(".change-region a").click(function(){
            $(".closed").toggleClass("open");
            $(".regions").slideToggle();
            return false;
        });
    });
});
