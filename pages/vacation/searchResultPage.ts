import { Utils } from "../../Utils/Utils";
import { HotelInfo } from "./hotelInfoPage";

export enum STARRATING {
    FIVESTAR,
    FOURSTAR,
    THREESTAR
}
export class SearchResult {

    get hotelsCount(): WebdriverIO.Element { return $("//h2[contains(.,'Hotels')]"); }
    get searchCriteria(): WebdriverIO.Element { return $(".wayfinder-info"); }
    get fiveStarRating(): WebdriverIO.Element { return $("label[for=StarRatingFilter5]"); }
    get fourStarRating(): WebdriverIO.Element { return $("label[for=StarRatingFilter4]"); }
    get threeStarRating(): WebdriverIO.Element { return $("label[for=StarRatingFilter3]"); }
    get hotelNameFilter(): WebdriverIO.Element { return $("#HotelNameFilter"); }

    getHotelCount() {
        return Utils.getElementText(this.hotelsCount);
    }

    getSearchCriteria() {
        return Utils.getElementText(this.searchCriteria);
    }

    applyStarFilter(rating: STARRATING) {
        switch (rating) {
            case 0: Utils.clickOnElement(this.fiveStarRating);
                Utils.twoSecondsDeadWait();
                break;
            case 1: Utils.clickOnElement(this.fourStarRating);
                Utils.twoSecondsDeadWait();
                break;
            case 2: Utils.clickOnElement(this.threeStarRating);
                Utils.twoSecondsDeadWait();
                break;
        }
    }

    applyNameFilter(hotelName: string) {
        Utils.setValueAndTab(this.hotelNameFilter, hotelName);
        Utils.twoSecondsDeadWait();
    }

    removeFilters() {
        Utils.refreshPage();
    }

    selectHotel(hotelName:string){
        Utils.clickOnElementByText(hotelName);
        return new HotelInfo();
    }
}