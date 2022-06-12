import { TestBed } from '@angular/core/testing';

import { LocalStorageDataServiceService } from './local-storage-data-service.service';

describe('LocalStorageDataServiceService', () => {
    let service: LocalStorageDataServiceService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LocalStorageDataServiceService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
