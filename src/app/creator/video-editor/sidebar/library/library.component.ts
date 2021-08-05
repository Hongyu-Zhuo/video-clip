import { FileStreamService } from './../../../../shared/file-stream/file-stream.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vc-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  constructor(
    private fileStream: FileStreamService
  ) { }

  ngOnInit(): void {
  }
  onFile($event: FileList) {
    const filesArray = Array.from($event);
    console.log(filesArray);

    const validFiles: File[] = [];
    for (const file of filesArray) {
        if (!file) {
            continue;
        }
        validFiles.push(file);
    }
    if (validFiles.length > 0) {
        this.fileStream.addFiles(validFiles /*, options*/);
    }
  }
}
