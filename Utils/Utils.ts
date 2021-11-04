class Utils{

    static clickOnElement(element:WebdriverIO.Element){
        element.waitForEnabled();
        element.click();

    }
}