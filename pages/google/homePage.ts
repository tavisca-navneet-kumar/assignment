
class BasePage {

    get button() {
        return $("//input[contains(@value,'Feeling Lucky')]");
    }

    launchPage(url: string) {
        return browser.url(url);
    }

    getPageTitle(): string{
        return browser.getTitle();
    }

    getPageContent(){
        return this.button.getAttribute("value");
    }
}

export default new BasePage();