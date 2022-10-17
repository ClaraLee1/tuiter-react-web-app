import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
    let active = 'explore';
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="col-2">
                ${NavigationSidebar(active)}
                </div>
            <div class="d-flex col">
                ${ExploreComponent()}
            </div>
            </div>
            <div class="d-none d-lg-block col-lg-4 col-xl-4">
                ${WhoToFollowList()}
            </div>
        </div>
    `);
    $("#liExplore").addClass("active");
})($);