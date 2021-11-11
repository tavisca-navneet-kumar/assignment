import { HotelStarRating } from "../../test/data/testData";
import { Utils } from "../../Utils/Utils";
import { HotelInfo } from "./hotelInfoPage";
export class SearchResult {

    get hotelsCount(): WebdriverIO.Element { return $("//h2[contains(.,'Hotels')]"); }
    get searchCriteria(): WebdriverIO.Element { return $(".wayfinder-info"); }
    get fiveStarRating(): WebdriverIO.Element { return $("label[for=StarRatingFilter5]"); }
    get fourStarRating(): WebdriverIO.Element { return $("label[for=StarRatingFilter4]"); }
    get threeStarRating(): WebdriverIO.Element { return $("label[for=StarRatingFilter3]"); }
    get hotelNameFilter(): WebdriverIO.Element { return $("#HotelNameFilter"); }
    get recommendedSorting(): WebdriverIO.Element { return $("#HotelRecommended"); }
    get starRatingSorting(): WebdriverIO.Element { return $("#StarRating"); }
    get pricePerNightSorting(): WebdriverIO.Element { return $("#PricePerNight"); }
    get distanceSorting(): WebdriverIO.Element { return $("#DistanceSort"); }
    get hotelNameSorting(): WebdriverIO.Element { return $("#HotelName"); }
    get paginationPage1(): WebdriverIO.Element { return $("button[data-qaid=Button_Page_1]") }
    get paginationPage2(): WebdriverIO.Element { return $("button[data-qaid=Button_Page_2]") }

    getHotelCount() {
        return Utils.getElementText(this.hotelsCount);
    }

    getSearchCriteria() {
        return Utils.getElementText(this.searchCriteria);
    }

    applyStarFilter(rating: HotelStarRating) {
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

    selectHotel(hotelName: string) {
        Utils.clickOnElementByText(hotelName);
        return new HotelInfo();
    }
    setSorting(SortingOptions) {
        switch (SortingOptions) {
            case 0: Utils.clickOnElement(this.recommendedSorting);
                break;
            case 1: Utils.clickOnElement(this.starRatingSorting);
                break;
            case 2: Utils.clickOnElement(this.pricePerNightSorting);
                break;
            case 3: Utils.clickOnElement(this.distanceSorting);
                break;
            case 4: Utils.clickOnElement(this.hotelNameSorting);
                break;
        }
    }

    getSorting(SortingOptions): string {
        var value;
        switch (SortingOptions) {
            case 0: value = Utils.getElementAttributeValue(this.recommendedSorting, "aria-describedby");
                break;
            case 1: value = Utils.getElementAttributeValue(this.starRatingSorting, "aria-describedby");
                break;
            case 2: value = Utils.getElementAttributeValue(this.pricePerNightSorting, "aria-describedby");
                break;
            case 3: value = Utils.getElementAttributeValue(this.distanceSorting, "aria-describedby");
                break;
            case 4: value = Utils.getElementAttributeValue(this.hotelNameSorting, "aria-describedby");
        }
        return value;

    }

    goToPage(Pagination) {
        switch (Pagination) {
            case 0: Utils.scrollToTheElementAndClick(this.paginationPage1)
                break;

            case 1: Utils.scrollToTheElementAndClick(this.paginationPage2)
                break;
        }

    }

}