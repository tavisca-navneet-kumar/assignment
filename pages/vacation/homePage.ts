class homePage {

    get hotelTab():WebdriverIO.Element{
        return $("//span[@id='search-hotel-button']");
    }

    launchPage() {

        return browser.url("https://vacationsdirect.com");
    }

    searchHotel(){
        Utils.clickOnElement(this.hotelTab);

    }


}

export default new homePage();