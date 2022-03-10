import { ApplictionURLS } from "../../test/data/testData";

class BasePage {

    get button() {
        return $("//input[contains(@value,'Feeling Lucky')]");
    }

    async launchPage() {
        return await browser.url(ApplictionURLS.GoogleApp);
    }

    async getPageTitle(){
        return await browser.getTitle();
    }

    async getPageContent(){
        return await this.button.getAttribute("value");
    }
}

export default new BasePage();