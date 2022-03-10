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

    async getHotelCount() {
        return await Utils.getElementText(this.hotelsCount);
    }

    async getSearchCriteria() {
        return await Utils.getElementText(this.searchCriteria);
    }

    async applyStarFilter(rating: HotelStarRating) {
        switch (rating) {
            case 0: await Utils.clickOnElement(this.fiveStarRating);
                await Utils.twoSecondsDeadWait();
                break;
            case 1: await Utils.clickOnElement(this.fourStarRating);
                await Utils.twoSecondsDeadWait();
                break;
            case 2: await Utils.clickOnElement(this.threeStarRating);
                await Utils.twoSecondsDeadWait();
                break;
        }
    }

    async applyNameFilter(hotelName: string) {
        await Utils.setValueAndTab(this.hotelNameFilter, hotelName);
        await Utils.twoSecondsDeadWait();
    }

    async removeFilters() {
        await Utils.refreshPage();
    }

    async selectHotel(hotelName: string) {
        await Utils.clickOnElementByText(hotelName);
        return await new HotelInfo();
    }
    async setSorting(SortingOptions) {
        switch (SortingOptions) {
            case 0: await Utils.clickOnElement(this.recommendedSorting);
                await Utils.twoSecondsDeadWait();
                break;
            case 1: await Utils.clickOnElement(this.starRatingSorting);
                await Utils.twoSecondsDeadWait();
                break;
            case 2: await Utils.clickOnElement(this.pricePerNightSorting);
                await Utils.twoSecondsDeadWait();
                break;
            case 3: Utils.clickOnElement(this.distanceSorting);
                await Utils.twoSecondsDeadWait();
                break;
            case 4: await Utils.clickOnElement(this.hotelNameSorting);
                await Utils.twoSecondsDeadWait();
                break;
        }
    }

    async getSorting(SortingOptions) {
        var value;
        switch (SortingOptions) {
            case 0: value = await Utils.getElementAttributeValue(this.recommendedSorting, "aria-describedby");
                break;
            case 1: value = await Utils.getElementAttributeValue(this.starRatingSorting, "aria-describedby");
                break;
            case 2: value = await Utils.getElementAttributeValue(this.pricePerNightSorting, "aria-describedby");
                break;
            case 3: value = await Utils.getElementAttributeValue(this.distanceSorting, "aria-describedby");
                break;
            case 4: value = await Utils.getElementAttributeValue(this.hotelNameSorting, "aria-describedby");
        }
        return value;

    }

    async goToPage(Pagination) {
        switch (Pagination) {
            case 0: await Utils.scrollToTheElementAndClick(this.paginationPage1)
                break;

            case 1: await Utils.scrollToTheElementAndClick(this.paginationPage2)
                break;
        }

    }

}