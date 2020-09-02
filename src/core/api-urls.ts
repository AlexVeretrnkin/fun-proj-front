import {environment} from "../environments/environment";

export class ApiUrls {
    public static getTitleInfoUrl(): string {
        return `${environment.apiUrl}title`;
    }

    public static getTitleDownloadUrl(): string {
        return `${environment.apiUrl}title/download`;
    }

    public static getTitleVideoUrl(): string {
        return `${environment.apiUrl}title/video`;
    }
}
