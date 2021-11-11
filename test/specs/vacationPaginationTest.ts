import HomePage from "../../pages/vacation/homePage";
import { SearchResult } from "../../pages/vacation/searchResultPage";
import { AssertionData, Pagination, SortingOptions, TestData } from "../data/testData";

describe('Test Vacation Applicaion:', () => {
    describe('Pagination and Sorting:', () => {
        let SearchResult: SearchResult;

        before(function () {
            HomePage.launchPage();
            HomePage.goToHotelTab();
            SearchResult = HomePage.searchHotels(TestData.SearchedDestinationNewYork, TestData.SearchedFromDate, TestData.SearchedToDate);
        })

        it('Should have Recommended sorting by default. @Smoke', () => {
            expect(SearchResult.getSorting(SortingOptions.Recommended)).toContain(AssertionData.SortignOrderAscending);
        })

        it('Should apply sorting by Star Rating. @Regression', () => {
            SearchResult.setSorting(SortingOptions.StarRating);
            expect(SearchResult.getSorting(SortingOptions.StarRating)).toContain(AssertionData.SortingOrderDescending);
        })

        it('Should apply sorting by Price Per Night. @Smoke', () => {
            SearchResult.setSorting(SortingOptions.PricePerNight);
            expect(SearchResult.getSorting(SortingOptions.PricePerNight)).toContain(AssertionData.SortignOrderAscending);
        })

        it('Should apply sorting by Distance. @Regression', () => {
            SearchResult.setSorting(SortingOptions.Distance);
            expect(SearchResult.getSorting(SortingOptions.Distance)).toContain(AssertionData.SortignOrderAscending);
        })

        it('Should apply sorting by Hotel Name. @Regression', () => {
            SearchResult.setSorting(SortingOptions.HotelName);
            expect(SearchResult.getSorting(SortingOptions.HotelName)).toContain(AssertionData.SortignOrderAscending);
        })

        it('Should move to page 2. @Smoke', () => {
            expect(SearchResult.getHotelCount()).toContain(AssertionData.PaginationHotelCountPage1)
            SearchResult.goToPage(Pagination.Page2);
            expect(SearchResult.getHotelCount()).toContain(AssertionData.PaginationHotelCountPage2)
        })
    });

});