import HomePage from "../../pages/vacation/homePage";
import { SearchResult } from "../../pages/vacation/searchResultPage";
import { AssertionData, HotelStarRating, TestData } from "../data/testData";

describe('Test Vacation Applicaion:', () => {
    describe('Destination City:', () => {
        let SearchResults: SearchResult;

        before(async function () {
            await HomePage.launchPage();
            await HomePage.goToHotelTab();
            SearchResults = await HomePage.searchHotels(TestData.SearchedDestinationPune, TestData.SearchedFromDate, TestData.SearchedToDate);
        })
        it('Should have correct hotel count. @Regression', async () => {

            expect(await SearchResults.getHotelCount()).toContain(AssertionData.PuneHotelCount);

        });

        it('Should have correct Destination. @Smoke', async () => {
            expect(await SearchResults.getSearchCriteria()).toContain(AssertionData.SearchedDestinationPune);

        });

        it('Should have correct ChecIn and CheckOut Dates. @Regression', async () => {
            expect(await SearchResults.getSearchCriteria()).toContain(AssertionData.SearchedFromDate);
            expect(await SearchResults.getSearchCriteria()).toContain(AssertionData.SearchedToDate);

        });

        it('Should have correct result for Star Filter. @Smoke', async () => {
            await SearchResults.applyStarFilter(HotelStarRating.FIVESTAR);
            expect(await SearchResults.getHotelCount()).toContain(AssertionData.PuneFiveStarHotelCount);

        });

        it('Should have correct result for Name Filter. @Regression', async () => {
            await SearchResults.removeFilters();
            await SearchResults.applyNameFilter(AssertionData.PuneSearchedHotelHyatt);
            expect(await SearchResults.getHotelCount()).toContain(AssertionData.PuneHyattHotelCount);

        });
    });

});