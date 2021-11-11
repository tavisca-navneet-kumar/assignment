import HomePage from "../../pages/vacation/homePage";
import { SearchResult } from "../../pages/vacation/searchResultPage";
import { AssertionData, HotelStarRating, TestData } from "../data/testData";

describe('Test Vacation Applicaion:', () => {
    describe('Destination City:', () => {
        let SearchResults: SearchResult;

        before(function () {
            HomePage.launchPage();
            HomePage.goToHotelTab();
            SearchResults = HomePage.searchHotels(TestData.SearchedDestinationPune, TestData.SearchedFromDate, TestData.SearchedToDate);
        })
        it('Should have correct hotel count. @Regression', () => {

            expect(SearchResults.getHotelCount()).toContain(AssertionData.PuneHotelCount);

        });

        it('Should have correct Destination. @Smoke', () => {
            expect(SearchResults.getSearchCriteria()).toContain(AssertionData.SearchedDestinationPune);

        });

        it('Should have correct ChecIn and CheckOut Dates. @Regression', () => {
            expect(SearchResults.getSearchCriteria()).toContain(AssertionData.SearchedFromDate);
            expect(SearchResults.getSearchCriteria()).toContain(AssertionData.SearchedToDate);

        });

        it('Should have correct result for Star Filter. @Smoke', () => {
            SearchResults.applyStarFilter(HotelStarRating.FIVESTAR);
            expect(SearchResults.getHotelCount()).toContain(AssertionData.PuneFiveStarHotelCount);

        });

        it('Should have correct result for Name Filter. @Regression', () => {
            SearchResults.removeFilters();
            SearchResults.applyNameFilter(AssertionData.PuneSearchedHotelHyatt);
            expect(SearchResults.getHotelCount()).toContain(AssertionData.PuneHyattHotelCount);

        });
    });

});