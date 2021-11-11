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

    launchPage() {

        return browser.url(ApplictionURLS.VacationAPP);
    }

    goToHotelTab(){
        Utils.clickOnElement(this.hotelTab);
    }

    searchHotels(destination:string,checkInDate:string,checkOutDate:string){
        Utils.setValueInTextBox(this.destinationTextBox,destination);
        Utils.setValueAndTab(this.checkInDateTextBox,checkInDate);
        Utils.setValueAndTab(this.checkOutDateTextBox,checkOutDate);
        Utils.clickOnElement(this.searchButton);
        return new SearchResult();
    }

}

export default new homePage();