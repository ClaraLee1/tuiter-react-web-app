import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`   
        <div class="align-items-center">
        <div class="row">
            <div class="col-11">
                <div class="position-relative">
                    <span class="wd-search-tuiter position-absolute">
                        <i class="fa-solid fa-magnifying-glass position-absolute p-2 m-1"></i>
                    </span>
                    <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter" type="text"/>
                </div>
            </div>
            <div class="col-1">
                <span><a class="wd-gear" href="explore-settings.html">
                    <i class="fa-solid fa-gear fa-2x pt-2"></i></a>
                </span>
            </div>
        </div>

        <ul class="nav nav-tabs mt-1 nav-fill">
            <li class="nav-item">
                <a class="nav-link active" href="#">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="nav-item d-none d-md-block">
                <a class="nav-link" href="#">Entertainment</a>
            </li>
        </ul>

        <div class="position-relative mt-2">
            <img src="../../images/starship.jpg" width="100%">
            <h3 class="wd-image-description text-white position-absolute bottom-0">SpaceX's Starship</h3>
        </div>
       
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;