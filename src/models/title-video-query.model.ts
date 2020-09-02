export class VideoFileQueryModel {
    constructor(
        public titleId?: number,
        public series?: number
    ) {
    }

    public getQuery(): string {
        return `titleId=${this.titleId}&series=${this.series}`;
    }
}
