import HomePage from "../../pages/google/homePage";

describe('Test Google', () => {


    it('Should have title "Google"', () => {
        HomePage.launchPage("https://www.google.com/")

        expect(HomePage.getPageTitle()).toBe("Google");
    });

    it("Should have content I'm Feeleing Lucky", () => {
        HomePage.launchPage("https://www.google.com/");
        expect(HomePage.getPageContent()).toBe("I'm Feeling Lucky");

    })

});