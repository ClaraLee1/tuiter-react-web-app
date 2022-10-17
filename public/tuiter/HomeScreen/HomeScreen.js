import NavigationSidebar from "../NavigationSidebar/index.js";
import HomeComponent from "./HomeComponent.js";
import PostSummaryList from "../PostSummaryList/index.js";

const init = () => {
    const postSumm = $("#postSumm");
    postSumm.addClass('bg-dark');

}
$(init);

(function ($) {
    let active = 'home';
    $('#wd-home').append(`
        <div class="row mt-2">
            <div class="col-2">
                ${NavigationSidebar(active)}
            </div>
            <div class="d-flex col">
                ${HomeComponent()}
            </div>
            <div class="d-none d-lg-block col-lg-4 col-xl-4">
                ${PostSummaryList()}
            </div>
        </div>
    `);
    $("#liHome").addClass("active");
})($);