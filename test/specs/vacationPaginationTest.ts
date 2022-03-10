import HomePage from "../../pages/vacation/homePage";
import { SearchResult } from "../../pages/vacation/searchResultPage";
import { AssertionData, Pagination, SortingOptions, TestData } from "../data/testData";

describe('Test Vacation Applicaion:', () => {
    describe('Pagination and Sorting:', () => {
        let SearchResult: SearchResult;

        before(async function () {
            await HomePage.launchPage();
            await HomePage.goToHotelTab();
            SearchResult = await HomePage.searchHotels(TestData.SearchedDestinationNewYork, TestData.SearchedFromDate, TestData.SearchedToDate);
        })

        it('Should have Recommended sorting by default. @Smoke', async () => {
            expect(await SearchResult.getSorting(SortingOptions.Recommended)).toContain(AssertionData.SortignOrderAscending);
        })

        it('Should apply sorting by Star Rating. @Regression', async () => {
            await SearchResult.setSorting(SortingOptions.StarRating);
            expect(await SearchResult.getSorting(SortingOptions.StarRating)).toContain(AssertionData.SortingOrderDescending);
        })

        it('Should apply sorting by Price Per Night. @Smoke', async () => {
            await SearchResult.setSorting(SortingOptions.PricePerNight);
            expect(await SearchResult.getSorting(SortingOptions.PricePerNight)).toContain(AssertionData.SortignOrderAscending);
        })

        it('Should apply sorting by Distance. @Regression', async () => {
            await SearchResult.setSorting(SortingOptions.Distance);
            expect(await SearchResult.getSorting(SortingOptions.Distance)).toContain(AssertionData.SortignOrderAscending);
        })

        it('Should apply sorting by Hotel Name. @Regression', async () => {
            await SearchResult.setSorting(SortingOptions.HotelName);
            expect(await SearchResult.getSorting(SortingOptions.HotelName)).toContain(AssertionData.SortignOrderAscending);
        })

        it('Should move to page 2. @Smoke', async () => {
            expect(await SearchResult.getHotelCount()).toContain(AssertionData.PaginationHotelCountPage1)
            await SearchResult.goToPage(Pagination.Page2);
            expect(await SearchResult.getHotelCount()).toContain(AssertionData.PaginationHotelCountPage2)
        })
    });

});