import { ApplictionURLS } from "../../test/data/testData";
import { Utils } from "../../Utils/Utils";
import { SearchResult } from "./searchResultPage";

class homePage {

    get hotelTab():WebdriverIO.Element{
        return $("#search-hotel-button");
    }

    get destinationTextBox():WebdriverIO.Element{
        return $("#inputDestination");
    }

    get checkInDateTextBox():WebdriverIO.Element{
        return $("#inputCheckInDate");
    }

    get checkOutDateTextBox():WebdriverIO.Element{
        return $("#inputCheckOutDate");
    }

    get guestsQty():WebdriverIO.Element{
        return $("#HotelGuestQtyButton");
    }

    get searchButton():WebdriverIO.Element{
        return $(".hotel__search--desktop");
    }

    async launchPage() {

        return await browser.url(ApplictionURLS.VacationAPP);
    }

    async goToHotelTab(){
        await Utils.clickOnElement(this.hotelTab);
    }

    async searchHotels(destination:string,checkInDate:string,checkOutDate:string){
        await Utils.setValueInTextBox(this.destinationTextBox,destination);
        await Utils.setValueAndTab(this.checkInDateTextBox,checkInDate);
        await Utils.setValueAndTab(this.checkOutDateTextBox,checkOutDate);
        await Utils.clickOnElement(this.searchButton);
        return await new SearchResult();
    }

}

export default new homePage();