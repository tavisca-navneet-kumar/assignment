import { Utils } from "../../Utils/Utils";

export class HotelInfo {
    get hotleRatingInfo(): WebdriverIO.Element { return $(".hotel-details-star-rating-container span"); }
    get hotelNameInfo(): WebdriverIO.Element { return $("div[class~=hotel-redesign-detail-header-main] h2 span[class~=margin-right-1]"); }
    get roomCountInfo(): WebdriverIO.Element { return $("#hotel-rooms-count strong"); }

    async getHotleRatingInfo() {
        return Utils.getElementText(this.hotleRatingInfo);
    }

    async getHotleNameInfo() {
        return Utils.getElementText(this.hotelNameInfo);
    }

    async getRoomCountInfo() {
        return Utils.getElementText(this.roomCountInfo);
    }

}