import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileStreamService implements OnDestroy {
  unsubscribe = new Subject();
  public readonly files$ = new Subject<any>();

  constructor() {
    this.files$.pipe(
      takeUntil(this.unsubscribe),
      tap(data => {
        const fileReader = new FileReader();
        fileReader.onload = function(e) {
          const result = e.target?.result;
        }
        // fileReader.rea(data[0]);
        console.log(data);
        // let db!: any;
        const request = indexedDB.open('local-cache');
        request.onerror = function(e) {
          console.log(e);
        }
        request.onsuccess = function(e) {
          console.log(e);
          debugger
          const db = (e.target as IDBOpenDBRequest).result;
          // const fileStore = db.createObjectStore('assets', {
          //   keyPath: 'permanentUrl'
          // });
          const transaction = db.transaction(['assets'], 'readwrite');
          const objectStore = transaction.objectStore('assets');
          const requestAdd = objectStore.put({
            blob: data.files[0],
            permanentUrl: 'uuid'
          })
          requestAdd.onsuccess = function(e) {
            console.log(e);

          }
        }
        request.onupgradeneeded = function(event: IDBVersionChangeEvent) {
          console.log(event);

          const db = (event.target as IDBOpenDBRequest).result;
          const fileStore = db.createObjectStore('assets', {
            keyPath: 'permanentUrl'
          });
        }

      }),
      tap(data => data),
      map(({ files, options }) => {
        return {
          files: files.filter(() => true),
          options
        }
      }),
      // map(({files, options}))
    ).subscribe()
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
  addFiles(files: File[], options?: any): void {
    this.files$.next({
      files,
      options
    });
  }
}
