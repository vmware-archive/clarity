import { ActionSort } from "@cds/core/actions";
import { getVMData, paginate, sortStrings, filter, TestVM } from "@cds/core/demo";
export interface GridStateInterface  {
    page?: {
        size?: number;
        current?: number;
    }
    sort?: {
        by: string;
        sortType: ActionSort;
    };
    filters?: any[];
    _mockDelay?: number;
}

export class MockAPI {
    private timeout: any;

    private responseData: {pageVMs: TestVM[], totalPages: number};

    constructor () {
        this.responseData = {pageVMs: getVMData(), totalPages: 0};
    }

    private resetData(): void {
        this.responseData = {pageVMs: getVMData(), totalPages: 0};
    }

    private sortData(state: GridStateInterface): void {
        if(!state.sort) {
            return;
        }
        this.responseData.pageVMs = sortStrings(this.responseData.pageVMs, state.sort.by, state.sort.sortType);
    }

    private filterData(state: GridStateInterface): void {
        if(!state.filters) {
            return;
        }
        this.responseData.pageVMs = state.filters.reduce((final, current) => {
            return filter(final, current.key, current.filterValue);
        }, this.responseData.pageVMs);
    }

    private pagenateData(state: GridStateInterface): void {
        if(!state.page) {
            return;
        }

        if(state.page.size === undefined || state.page.current === undefined) {
            return;
        }

        const paginated = paginate(this.responseData.pageVMs, state.page.size);

        const totalPages = paginated.length;

        if(totalPages > 0) {
            if(state.page.current < totalPages) {
                this.responseData.pageVMs = paginated[state.page.current];
            } else {
                this.responseData.pageVMs = [];
            }
            this.responseData.totalPages = totalPages;
        } else {
            this.responseData.totalPages = 0;
        }
    }

    public requestData(state?: GridStateInterface) {
        const serverProcessedData = () => {
            if(state) {
                this.resetData();
                this.sortData(state);
                this.filterData(state);
                this.pagenateData(state);
            }
            return this.responseData;
        }

        return new Promise<any>((resolve) => {
            this.timeout = setTimeout(() => {
              resolve(serverProcessedData());
            }, state?._mockDelay?state._mockDelay : 2000);
        });
    }

    public disconnect() {
        clearTimeout(this.timeout);
    }
}