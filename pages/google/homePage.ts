import { ApplictionURLS } from "../../test/data/testData";

class BasePage {

    get button() {
        return $("//input[contains(@value,'Feeling Lucky')]");
    }

    launchPage() {
        return browser.url(ApplictionURLS.GoogleApp);
    }

    getPageTitle(): string{
        return browser.getTitle();
    }

    getPageContent(){
        return this.button.getAttribute("value");
    }
}

export default new BasePage();